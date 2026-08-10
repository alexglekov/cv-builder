import { IsString } from 'class-validator'

export class Technology {
	@IsString()
	name: string

	@IsString()
	type: string
}
