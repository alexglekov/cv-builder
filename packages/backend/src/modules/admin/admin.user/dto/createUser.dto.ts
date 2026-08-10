import { IsString, IsEmail, Contains } from 'class-validator'

export class CreateUserDto {
	@IsString()
	name: string

	@IsString()
	surname: string

	@IsEmail()
	@Contains('@innowise-group.com')
	email: string
}
