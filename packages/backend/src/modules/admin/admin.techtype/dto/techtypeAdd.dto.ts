import { IsString, Validate } from 'class-validator'
import { NotInTechtypeValidation } from 'src/modules/admin/admin.techtype/validators'

export class TechtypeAddDto {
	@IsString()
	@Validate(NotInTechtypeValidation)
	name: string
}
