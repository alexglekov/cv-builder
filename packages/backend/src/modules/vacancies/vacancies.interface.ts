import { IsArray, IsBoolean, IsNumber, IsString } from 'class-validator'

export class VacancyDto {
	constructor(
		vacancyId: string,
		name: string,
		salaryFrom: number,
		salaryTo: number,
		currency: string,
		typeId: string,
		typeName: string,
		addressCity: string,
		addressStreet: string,
		addressRaw: string,
		publishedAt: string,
		createdAt: string,
		archived: boolean,
		vacancyUrl: string,
		employerName: string,
		employerId: string,
		employerUrl: string,
		employerLogoUrl: string,
		requirements: string,
		responsibilities: string,
		scheduleId: string,
		scheduleName: string,
		professionalRoleId: string,
		professionalRoleName: string,
		experienceId: string,
		experienceName: string,
		employmentId: string,
		employmentName: string,
		passLevel: string,
		profileId: number,
		passMessage: string,
		description: string,
		keySkills: string[],
		advice: string
	) {
		;(this.vacancyId = vacancyId),
			(this.name = name),
			(this.salaryFrom = salaryFrom),
			(this.salaryTo = salaryTo),
			(this.currency = currency),
			(this.typeId = typeId),
			(this.typeName = typeName),
			(this.addressCity = addressCity),
			(this.addressStreet = addressStreet),
			(this.addressRaw = addressRaw),
			(this.publishedAt = publishedAt),
			(this.createdAt = createdAt),
			(this.archived = archived),
			(this.vacancyUrl = vacancyUrl),
			(this.employerName = employerName),
			(this.employerId = employerId),
			(this.employerUrl = employerUrl),
			(this.employerLogoUrl = employerLogoUrl),
			(this.requirements = requirements),
			(this.responsibilities = responsibilities),
			(this.scheduleId = scheduleId),
			(this.scheduleName = scheduleName),
			(this.professionalRoleId = professionalRoleId),
			(this.professionalRoleName = professionalRoleName),
			(this.experienceId = experienceId),
			(this.experienceName = experienceName),
			(this.employmentId = employmentId),
			(this.employmentName = employmentName),
			(this.passLevel = passLevel),
			(this.profileId = profileId),
			(this.passMessage = passMessage),
			(this.description = description),
			(this.keySkills = keySkills),
			(this.advice = advice)
	}

	@IsString()
	public vacancyId: string

	@IsString()
	public name: string

	@IsNumber()
	public salaryFrom: number

	@IsNumber()
	public salaryTo: number

	@IsString()
	public currency: string

	@IsString()
	public typeId: string

	@IsString()
	public typeName: string

	@IsString()
	public addressCity: string

	@IsString()
	public addressStreet: string

	@IsString()
	public addressRaw: string

	@IsString()
	public publishedAt: string

	@IsString()
	public createdAt: string

	@IsBoolean()
	public archived: boolean

	@IsString()
	public vacancyUrl: string

	@IsString()
	public employerName: string

	@IsString()
	public employerId: string

	@IsString()
	public employerUrl: string

	@IsString()
	public employerLogoUrl: string

	@IsString()
	public requirements: string

	@IsString()
	public responsibilities: string

	@IsString()
	public scheduleId: string

	@IsString()
	public scheduleName: string

	@IsString()
	public professionalRoleId: string

	@IsString()
	public professionalRoleName: string

	@IsString()
	public experienceId: string

	@IsString()
	public experienceName: string

	@IsString()
	public employmentId: string

	@IsString()
	public employmentName: string

	@IsString()
	public passLevel: string

	@IsNumber()
	public profileId: number

	@IsString()
	public passMessage: string

	@IsString()
	public description: string

	@IsArray()
	@IsString({ each: true })
	public keySkills: string[]

	@IsString()
	public advice: string
}
