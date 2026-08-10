export interface AppConfig {
	app: {
		clientUrl: string
		port: number
		protocol: 'http' | 'https'
		ssl: {
			cert: string
			key: string
			passphrase: string
		}
	}
}
