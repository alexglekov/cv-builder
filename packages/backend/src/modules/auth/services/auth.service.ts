import { BadRequestException, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'

import { Config } from '../../../config'
import { AuthRepository } from '../repositories'
import { SignInOrSignUpParams, SignInParams, SignOutParams, SignUpParams, UpdateTokenParams } from './types'

import { UsersService } from '../../users'
import { UnauthorizedException } from '@cvb/exceptions'
import { ROLES, SignUpProvider } from '@prisma/client'

@Injectable()
export class AuthService {
	constructor(
		private readonly jwtService: JwtService,
		private readonly configService: ConfigService<Config>,
		private readonly authRepository: AuthRepository,
		private readonly usersService: UsersService
	) {}

	public async signInOrSignUp(params: SignInOrSignUpParams) {
		const { email, profileUri, name, surname, providerRefreshToken, signUpProvider } = params

		const isExists = await this.usersService.getByEmail(email)

		let userId: number = isExists?.id
		let role: ROLES = ROLES.USER

		if (!isExists) {
			const newUser = await this.usersService.create({ profileUri, email, name, surname })

			userId = newUser.id
			role = newUser.role
		}

		const tokens = await this.generateTokens({ userId, role })

		if (!isExists) {
			await this.authRepository.create({
				providerRefreshToken,
				refreshToken: tokens.refreshToken,
				signUpProvider,
				userId
			})
		} else {
			await this.authRepository.update(userId, {
				providerRefreshToken,
				refreshToken: tokens.refreshToken
			})
		}

		return tokens
	}

	public async signSignUp(params: SignUpParams) {
		const { email, profileUri, name, surname, providerRefreshToken, signUpProvider, password } = params

		const foundUser = await this.usersService.getByEmail(email)

		if (foundUser) {
			throw new BadRequestException('User already exists with this email.')
		}

		const role: ROLES = ROLES.USER

		const user = await this.usersService.create({ profileUri, email, name, surname })

		const tokens = await this.generateTokens({ userId: user.id, role })

		await this.authRepository.create({
			providerRefreshToken,
			refreshToken: tokens.refreshToken,
			signUpProvider,
			userId: user.id,
			password
		})

		return tokens
	}

	public async signSignIn(params: SignInParams) {
		const { providerRefreshToken, signUpProvider, password, email } = params

		const foundUser = await this.usersService.getByEmail(email)

		if (!foundUser) {
			throw new BadRequestException('Email or Password is incorrect')
		}

		const auth = await this.authRepository.findByUserId(foundUser.id)

		if (!auth) {
			throw new BadRequestException('Email or Password is incorrect')
		}

		if (signUpProvider === SignUpProvider.LOCAL && auth.password !== password) {
			throw new BadRequestException('Email or Password is incorrect.')
		}

		const tokens = await this.generateTokens({ userId: foundUser.id, foundUser: foundUser.role })

		await this.authRepository.update(foundUser.id, {
			providerRefreshToken,
			refreshToken: tokens.refreshToken
		})

		return tokens
	}

	public async signOut(params: SignOutParams) {
		const { userId } = params

		await this.authRepository.updateRefreshToken(userId, '')
	}

	public async updateTokens(params: UpdateTokenParams) {
		const { userId, token } = params

		const user = await this.usersService.getById(userId)
		const auth = await this.authRepository.findByUserId(userId)

		if (!user || !auth || (auth && auth.refreshToken !== token)) {
			throw new UnauthorizedException('not auth')
		}

		const tokens = await this.generateTokens({ userId, role: user.role })

		await this.authRepository.updateRefreshToken(userId, tokens.refreshToken)

		return tokens
	}

	private async generateTokens(payload: any): Promise<{
		accessToken: string
		refreshToken: string
	}> {
		const { accessTokenExpiresIn, accessTokenSecretKey, refreshTokenExpiresIn, refreshTokenSecretKey } =
			this.configService.get('jwt')

		const accessToken = await this.jwtService.signAsync(payload, {
			expiresIn: accessTokenExpiresIn,
			secret: accessTokenSecretKey
		})

		const refreshToken = await this.jwtService.signAsync(payload, {
			expiresIn: refreshTokenExpiresIn,
			secret: refreshTokenSecretKey
		})

		return {
			accessToken,
			refreshToken
		}
	}
}
