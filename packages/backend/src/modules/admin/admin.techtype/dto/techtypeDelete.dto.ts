import { IsNumber, IsString, Validate } from 'class-validator'
import { InTechtypeValidation } from 'src/modules/admin/admin.techtype/validators'

export class TechtypeDeleteDto {
	@IsString()
	@Validate(InTechtypeValidation)
	name: string

	@IsNumber()
	id: number
}
