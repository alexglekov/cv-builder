import { IsDateString, IsNotEmpty, IsNumber, IsString, Length } from 'class-validator'

export class ProjectInputDto {
	@IsString()
	@IsNotEmpty()
	title: string

	@IsString()
	@IsNotEmpty()
	description: string

	@IsString()
	@IsNotEmpty()
	position: string

	@IsDateString({ strict: true })
	@Length(10, 10)
	start: string

	@IsDateString({ strict: true })
	@Length(10, 10)
	end: string

	@IsString({ each: true })
	respAndAchs: string[]

	@IsNumber({ allowNaN: false, allowInfinity: false }, { each: true })
	technologies: number[]
}
