import { Body, Controller, Post, Res } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { ApiTags } from '@nestjs/swagger'
import { Response } from 'express'

import { Config } from '../../../config'
import { SignInInput, SignUpInput } from './inputs'
import { LocalAuthService } from '../services'

@ApiTags('Local Auth')
@Controller('auth')
export class LocalAuthController {
	constructor(private readonly localAuthService: LocalAuthService, private readonly configService: ConfigService<Config>) {}

	@Post('/sign-in')
	public async signIn(@Body() input: SignInInput, @Res({ passthrough: true }) response: Response) {
		const { refreshToken } = await this.localAuthService.signIn(input)

		this.saveRefreshTokenOnCookie(response, refreshToken)

		console.log(this.getClientUri())

		// return { url: this.getClientUri() }

		return refreshToken
	}

	@Post('/sign-up')
	public async signUp(@Body() input: SignUpInput, @Res({ passthrough: true }) response: Response) {
		const { refreshToken } = await this.localAuthService.signUp(input)

		this.saveRefreshTokenOnCookie(response, refreshToken)

		console.log(this.getClientUri())

		// return { url: this.getClientUri() }
		return refreshToken
	}

	private saveRefreshTokenOnCookie(response: Response, refreshToken: string) {
		response.cookie('refreshToken', refreshToken, {
			sameSite: 'none',
			httpOnly: true,
			secure: true
		})
	}

	private getClientUri(): string {
		const { clientUrl } = this.configService.get('app')
		const uri = new URL(clientUrl)

		// uri.searchParams.set('accessToken', accessToken)

		return uri.toString()
	}
}
