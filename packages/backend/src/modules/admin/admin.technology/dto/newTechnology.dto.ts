import { IsString, Validate } from 'class-validator'
import { InTechtypeValidation } from '../../admin.techtype/validators'

export class NewTechnology {
	@IsString()
	name: string

	@IsString()
	@Validate(InTechtypeValidation)
	type: string
}
