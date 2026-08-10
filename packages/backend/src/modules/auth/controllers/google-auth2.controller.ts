import { Controller, Get, Post, Query, Redirect, Res } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { ApiExcludeEndpoint, ApiTags } from '@nestjs/swagger'
import { Response } from 'express'

import { Config } from '../../../config'
import { GoogleAuth20Service } from '../services'
import { GoogleAuth2CallbackInput } from './inputs'

@ApiTags('OAuth2 Google')
@Controller('auth20/google')
export class GoogleAuth20Controller {
	constructor(private readonly auth2service: GoogleAuth20Service, private readonly configService: ConfigService<Config>) {}

	@Post('/sign-in')
	@Redirect()
	public async googleSignIn() {
		return { url: this.auth2service.getGoogleAuthUrl() }
	}

	@ApiExcludeEndpoint()
	@Get('/callback')
	@Redirect()
	public async handleCallback(@Query() input: GoogleAuth2CallbackInput, @Res({ passthrough: true }) response: Response) {
		const { code } = input

		const { refreshToken } = await this.auth2service.handleUser(code)

		this.saveRefreshTokenOnCookie(response, refreshToken)

		console.log(this.getClientUri())

		return { url: this.getClientUri() }
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
