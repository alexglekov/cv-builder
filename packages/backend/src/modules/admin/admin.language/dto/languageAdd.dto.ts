import { IsString, Validate } from 'class-validator'
import { NotInLangnameValidation } from '../validators'

export class LanguageAddDto {
	@IsString()
	@Validate(NotInLangnameValidation)
	name: string
}
