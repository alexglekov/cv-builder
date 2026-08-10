import { IsNotEmpty, IsString } from 'class-validator'

export class CredentialsUserId {
	@IsNotEmpty()
	@IsString()
	userId: string
}
