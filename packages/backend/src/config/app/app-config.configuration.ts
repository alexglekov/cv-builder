// import { readFileSync } from 'fs'
// import { resolve } from 'path'
import { AppConfig } from './app-config.type'

export const loadAppConfig = (): AppConfig => {
	return {
		app: {
			clientUrl: process.env.CLIENT_URL,
			port: parseInt(process.env.PORT, 10),
			protocol: process.env.PROTOCOL as any,
			ssl: {
				// cert: process.env.PROTOCOL === 'https' ? readFileSync(resolve(process.cwd(), 'ssl', 'cert.pem'), 'utf8') : '',
				// key: process.env.PROTOCOL === 'https' ? readFileSync(resolve(process.cwd(), 'ssl', 'key.pem'), 'utf8') : '',
				cert: '',
				key: '',
				passphrase: process.env.PASSPHRASE
			}
		}
	}
}
