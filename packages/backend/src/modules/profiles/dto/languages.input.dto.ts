import { LANGRANK } from '@prisma/client'
import { IsEnum, IsNumber } from 'class-validator'

export class LanguagesInput {
	@IsNumber()
	languageId: number

	@IsEnum(LANGRANK)
	rank: LANGRANK
}
