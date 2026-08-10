import { IsString, IsNumber } from 'class-validator'

export class TechtypeUpdateDto {
	@IsString()
	name: string

	@IsNumber()
	id: number
}
