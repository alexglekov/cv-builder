import { IsString, IsNumber } from 'class-validator'

export class LanguageUpdateDto {
	@IsString()
	name: string

	@IsNumber()
	id: number
}
