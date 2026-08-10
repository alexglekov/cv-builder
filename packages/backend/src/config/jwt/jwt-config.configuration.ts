import { JwtConfig } from './jwt-config.type'

export const loadJwtConfig = (): JwtConfig => {
	return {
		jwt: {
			accessTokenExpiresIn: Number(process.env.ACCESS_TOKEN_EXPIRES_IN),
			accessTokenSecretKey: process.env.ACCESS_TOKEN_SECRET_KEY,
			refreshTokenExpiresIn: Number(process.env.REFRESH_TOKEN_EXPIRES_IN),
			refreshTokenSecretKey: process.env.REFRESH_TOKEN_SECRET_KEY
		}
	}
}
