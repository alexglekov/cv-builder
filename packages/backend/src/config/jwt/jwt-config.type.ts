export interface JwtConfig {
	jwt: {
		accessTokenExpiresIn: number
		accessTokenSecretKey: string
		refreshTokenExpiresIn: number
		refreshTokenSecretKey: string
	}
}
