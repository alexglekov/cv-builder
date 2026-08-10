import { IsString, IsNumber, Validate } from 'class-validator'
import { InLangnameValidation } from '../validators'

export class LanguageDeleteDto {
	@IsString()
	@Validate(InLangnameValidation)
	name: string

	@IsNumber()
	id: number
}
