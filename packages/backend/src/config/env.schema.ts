import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

export class EnvSchema {
	@IsNotEmpty()
	@IsString()
	CLIENT_URL: string

	@IsString()
	@IsNotEmpty()
	GOOGLE_CALLBACK_URI: string

	@IsString()
	@IsNotEmpty()
	ACCESS_TOKEN_SECRET_KEY

	@IsString()
	@IsNotEmpty()
	ACCESS_TOKEN_EXPIRES_IN

	@IsString()
	@IsNotEmpty()
	REFRESH_TOKEN_SECRET_KEY

	@IsString()
	@IsNotEmpty()
	REFRESH_TOKEN_EXPIRES_IN

	@IsString()
	@IsNotEmpty()
	GOOGLE_CLIENT_ID: string

	@IsString()
	@IsNotEmpty()
	GOOGLE_CLIENT_SECRET: string

	@IsString()
	@IsOptional()
	PASSPHRASE: string

	@IsNumber()
	@IsNotEmpty()
	PORT: number

	@IsString()
	@IsNotEmpty()
	PROTOCOL: string

	@IsString()
	@IsNotEmpty()
	AWS_ACCESS_KEY: string

	@IsString()
	@IsNotEmpty()
	AWS_SECRET_ACCESS_KEY: string

	@IsString()
	@IsNotEmpty()
	AWS_S3_BUCKET: string

	@IsString()
	@IsNotEmpty()
	AWS_S3_ENDPOINT: string

	@IsString()
	@IsNotEmpty()
	AWS_REGION: string

	@IsString()
	@IsNotEmpty()
	AWS_S3_EXPIRES_IN: string
}
