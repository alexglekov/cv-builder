import { loadAppConfig } from './app'
import { loadAuth2Config } from './auth2'
import { loadJwtConfig } from './jwt'
import { loadAwsConfig } from './aws'

export const configLoader = [loadAppConfig, loadAuth2Config, loadJwtConfig, loadAwsConfig]
