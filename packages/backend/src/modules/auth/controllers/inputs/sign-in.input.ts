/* eslint-disable sort-keys */
import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator'

export class SignInInput {
	@ApiProperty({ type: String, required: true })
	@IsString()
	@IsEmail()
	@IsNotEmpty()
	email: string

	@ApiProperty({ type: String, required: true })
	@IsString()
	@MinLength(5)
	@MaxLength(10)
	@IsNotEmpty()
	password: string
}
