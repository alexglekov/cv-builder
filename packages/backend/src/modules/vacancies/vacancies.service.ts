import { PrismaService } from '@cvb/prisma'
import { Injectable } from '@nestjs/common'
import { VacancyDto } from './vacancies.interface'

@Injectable()
export class VacansciesService {
	constructor(private readonly prismaService: PrismaService) {}

	public async getVacanciesByUserId(profileId: number) {
		return this.prismaService.vacancies.findMany({
			where: {
				profileId
			}
		})
	}

	public async getVacancyById(id: string) {
		return this.prismaService.vacancies.findFirst({
			where: {
				id
			}
		})
	}

	public async deleteVacancyById(id: string) {
		return this.prismaService.vacancies.delete({
			where: {
				id
			}
		})
	}

	public async createVacancy(data: VacancyDto) {
		return this.prismaService.vacancies.create({
			data: {
				...data
			}
		})
	}
}
