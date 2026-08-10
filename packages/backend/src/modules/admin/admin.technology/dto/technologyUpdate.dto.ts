import { IsNumber, IsString } from 'class-validator'

export class TechnologyUpdateDto {
	@IsNumber()
	id: number

	@IsString()
	name: string
}
