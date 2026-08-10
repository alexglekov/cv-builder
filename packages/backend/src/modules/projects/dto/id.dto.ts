import { IsDecimal } from 'class-validator'

export class IdDto {
	@IsDecimal()
	userId: string
}
