import { IsBoolean, IsDateString, IsNotEmpty, IsString, Length } from 'class-validator'

export class ProjectOutputDto {
	constructor(
		id: any,
		actual: boolean,
		title: string,
		description: string,
		position: string,
		start: string,
		end: string,
		respAndAchs: string[],
		technologies: number[]
	) {
		this.id = id
		this.actual = actual
		this.title = title
		this.description = description
		this.position = position
		this.start = start
		this.end = end
		this.respAndAchs = respAndAchs
		this.technologies = technologies
	}

	@IsNotEmpty()
	id: any

	@IsBoolean()
	actual: boolean

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

	technologies: any[]
}
