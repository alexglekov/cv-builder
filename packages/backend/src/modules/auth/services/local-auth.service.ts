import { Injectable } from '@nestjs/common'
import { SignUpProvider } from '@prisma/client'

import { AuthService } from './auth.service'

interface SignInParams {
	email: string
	password: string
}

interface SignUpParams {
	name: string
	surname: string
	email: string
	password: string
}

@Injectable()
export class LocalAuthService {
	constructor(private readonly authService: AuthService) {}

	public async signIn(params: SignInParams) {
		const { email, password } = params

		return this.authService.signSignIn({
			email,
			password,
			signUpProvider: SignUpProvider.LOCAL
		})
	}

	public async signUp(params: SignUpParams) {
		const { email, password, name, surname } = params

		return this.authService.signSignUp({
			email,
			password,
			name,
			surname,
			profileUri: null,
			providerRefreshToken: null,
			signUpProvider: SignUpProvider.LOCAL
		})
	}
}
