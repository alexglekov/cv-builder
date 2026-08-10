import { Injectable } from '@nestjs/common'
import { PrismaService } from '@cvb/prisma'
import { Languages, Profiles, Projects, User } from '@prisma/client'
import { PutProfileInfo } from '../profile.interfaces'

@Injectable()
export class ProfileRepository {
	constructor(private readonly prisma: PrismaService) {}

	public async getProfilesList() {
		const user = await this.prisma.user.findMany({
			include: {
				Profiles: true
			}
			// select: {
			// 	id: true,
			// 	name: true,
			// 	surname: true,
			// 	profileUri: true,
			// 	role: true
			// }
		})

		return user
	}

	public async getUserById(userId: number): Promise<User> {
		const user = await this.prisma.user.findUnique({
			where: {
				id: userId
			}
		})

		return user
	}

	public async getUserLanguagesById(userId: number): Promise<Languages[]> {
		const languages = await this.prisma.languages.findMany({
			where: {
				profileId: userId
			},
			include: {
				Langnames: true
			}
		})

		return languages
	}

	public async getProfileById(userId: number): Promise<Profiles> {
		const profile = await this.prisma.profiles.findUnique({
			where: {
				id: userId
			}
		})

		return profile
	}

	public async getUserProjectsById(userId: number): Promise<Projects[]> {
		const projects = await this.prisma.projects.findMany({
			where: {
				userId
			}
		})

		return projects
	}

	public async getUserTechnologiesByIdPDF(userId: number): Promise<any> {
		const projects = await this.prisma.projects.findMany({
			where: { userId },
			select: {
				ProjectsTechnologies: {
					select: {
						Technologies: true
					}
				}
			}
		})

		// if (technologies.length > 0) {
		// 	return technologies.reduce((prev, technologie) => {
		// 		prev.push(
		// 			...technologie.ProjectsTechnologies.map((a) => ({
		// 				name: a.Technologies.name,
		// 				type: a.Technologies.type
		// 			}))
		// 		)

		// 		return prev
		// 	}, [] as Array<{ name: string; type: string }>)
		// } else return []

		const uniqueUserTechnologies: Record<string, { name: string; type: string }> = {}

		projects.forEach((project) => {
			project.ProjectsTechnologies.forEach((technologie) => {
				uniqueUserTechnologies[technologie.Technologies.id] = technologie.Technologies
			})
		})

		return Object.values(uniqueUserTechnologies)
	}

	public async getUserTechnologiesById(userId: number): Promise<any> {
		const projectsTechns = await this.prisma.projectsTechnologies.findMany({
			where: {
				Projects: {
					userId
				}
			},
			select: {
				Technologies: true
			},
			distinct: 'technologyId'
		})

		return projectsTechns.map((project) => project.Technologies)
	}

	public async getUserExpInYearsById(userId: number): Promise<number> {
		const projects = await this.prisma.projects.findMany({
			where: {
				userId,
				actual: true
			}
		})
		let expInYears = 0

		projects.forEach((a) => (expInYears += a.end.getTime() - a.start.getTime()))

		// TODO: number of months worked should also be taken into calculations
		return Number((expInYears / (1000 * 60 * 60 * 24 * 364)).toFixed(1))
	}

	public async putProfileInfoById(userId: number, data: PutProfileInfo): Promise<any> {
		await this.prisma.profiles.update({
			where: {
				id: userId
			},
			data: {
				education: data.education,
				specialty: data.specialty,
				biography: data.biography,
				domains: data.domains
			}
		})

		await this.prisma.languages.deleteMany({
			where: {
				profileId: userId
			}
		})

		await this.prisma.languages.createMany({
			data: [
				...data.languages.map((a) => {
					return Object.assign(a, { profileId: userId })
				})
			]
		})
	}
}
