import { Injectable } from '@nestjs/common'
import { PrismaService } from '@cvb/prisma'
import { CreateAuthParams, UpdateAuthParams } from './auth-repository.types'

@Injectable()
export class AuthRepository {
	constructor(private readonly prisma: PrismaService) {}

	public async create(params: CreateAuthParams) {
		const { userId, providerRefreshToken, refreshToken, signUpProvider, password } = params

		return this.prisma.auth.create({
			data: {
				providerRefreshToken,
				refreshToken,
				signUpProvider,
				password,
				userId
			}
		})
	}

	public async update(userId: number, params: UpdateAuthParams) {
		const { providerRefreshToken, refreshToken } = params

		return this.prisma.auth.update({
			data: {
				providerRefreshToken,
				refreshToken
			},
			where: {
				userId
			}
		})
	}

	public async updateRefreshToken(userId: number, refreshToken: string) {
		return this.prisma.auth.update({
			data: {
				refreshToken
			},
			where: {
				userId
			}
		})
	}

	public async findByUserId(userId: number) {
		return this.prisma.auth.findUniqueOrThrow({
			where: {
				userId
			}
		})
	}
}
