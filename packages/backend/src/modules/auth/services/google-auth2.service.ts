import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { google } from 'googleapis'
import { SignUpProvider } from '@prisma/client'
import axios from 'axios'

import { Config } from '../../../config'
import { AuthService } from './auth.service'

@Injectable()
export class GoogleAuth20Service {
	private readonly client: any

	constructor(private readonly configService: ConfigService<Config>, private readonly authService: AuthService) {
		const {
			google: { clientId, clientSecret, redirect_uri }
		} = this.configService.get('auth2')

		this.client = new google.auth.OAuth2(clientId, clientSecret, redirect_uri)
	}

	public getGoogleAuthUrl(): string {
		return this.client.generateAuthUrl({
			access_type: 'offline',
			prompt: 'consent',
			scope: ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile']
		})
	}

	public async handleUser(code: string) {
		const { tokens } = await this.client.getToken(code)

		const { data: user } = await axios.get(
			`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`,
			{
				headers: {
					Authorization: `Bearer ${tokens.id_token}`
				}
			}
		)

		return this.authService.signInOrSignUp({
			email: user.email,
			name: user.given_name,
			surname: user.family_name,
			profileUri: user.picture,
			providerRefreshToken: tokens.refresh_token,
			signUpProvider: SignUpProvider.GOOGLE,
			password: null
		})
	}
}
