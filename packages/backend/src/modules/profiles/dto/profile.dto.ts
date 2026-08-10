import { IsString, ValidateNested } from 'class-validator'

import { Type } from 'class-transformer'

import { LanguageWithoutIdProfileId } from '../profile.interfaces'

import { LanguagesInput } from './languages.input.dto'

export class ProfileDto {
	constructor(
		specialty: string,
		education: string,
		domains: string[],
		biography: string,
		languages: LanguageWithoutIdProfileId[]
	) {
		this.specialty = specialty
		this.education = education
		this.domains = domains
		this.biography = biography
		this.languages = languages
	}

	@IsString()
	specialty: string

	@IsString()
	education: string

	@IsString({ each: true })
	domains: string[]

	@IsString()
	biography: string

	@ValidateNested()
	@Type(() => LanguagesInput)
	languages: LanguageWithoutIdProfileId[]
}
