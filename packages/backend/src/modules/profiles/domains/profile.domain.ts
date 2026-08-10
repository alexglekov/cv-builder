import { Injectable } from '@nestjs/common'
import { ProfileRepository } from '../repositories'
import { GetProfilesList, PutProfileInfo } from '../profile.interfaces'

@Injectable()
export class ProfileDomain {
	constructor(private readonly profileRepository: ProfileRepository) {}

	public async getProfileInfoById(userId: number): Promise<any> {
		const user = await this.profileRepository.getUserById(userId)
		const languages = await this.profileRepository.getUserLanguagesById(userId)
		const profile = await this.profileRepository.getProfileById(userId)
		const expInYears = await this.profileRepository.getUserExpInYearsById(userId)
		const technologies = await this.profileRepository.getUserTechnologiesById(userId)

		return new Object({
			name: user.name,
			surname: user.surname,
			profileUri: user.profileUri,
			languages,
			specialty: profile.specialty,
			education: profile.education,
			biography: profile.biography,
			domains: profile.domains,
			technologies,
			expInYears
		})
	}

	public async getProfileInfoByIdPDF(userId: number): Promise<any> {
		const user = await this.profileRepository.getUserById(userId)
		const languages = await this.profileRepository.getUserLanguagesById(userId)
		const profile = await this.profileRepository.getProfileById(userId)
		const expInYears = await this.profileRepository.getUserExpInYearsById(userId)
		const technologies = await this.profileRepository.getUserTechnologiesByIdPDF(userId)

		return new Object({
			name: user.name,
			surname: user.surname,
			profileUri: user.profileUri,
			languages,
			specialty: profile.specialty,
			education: profile.education,
			biography: profile.biography,
			domains: profile.domains,
			technologies,
			expInYears: expInYears < 1 ? 1 : Math.floor(expInYears)
		})
	}

	public async putProfileInfoById(userId: number, data: PutProfileInfo) {
		return this.profileRepository.putProfileInfoById(userId, data)
	}

	public async getProfilesList() {
		const users = await this.profileRepository.getProfilesList()
		const profiles: GetProfilesList[] = []

		users.forEach((a) =>
			profiles.push(
				new Object({
					id: a.id,
					name: a.name,
					surname: a.surname,
					profileUri: a.profileUri,
					role: a.role,
					education: a.Profiles.education
				}) as GetProfilesList
			)
		)

		return profiles
	}
}
