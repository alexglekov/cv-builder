import { Post, Delete, Body, Controller, Get, Param } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { VacansciesService } from './vacancies.service'
import { VacancyDto } from './vacancies.interface'

@Controller('vacancies')
@ApiTags('Vacancies')
@ApiBearerAuth()
export class VacanciesController {
	constructor(private readonly vacanciesService: VacansciesService) {}

	@Get('/:profileId')
	public async getVacanciesByUserId(@Param('profileId') profileId: number) {
		return this.vacanciesService.getVacanciesByUserId(profileId)
	}

	@Get('/:id')
	public async getVacancyById(@Param('id') id: string) {
		return this.vacanciesService.getVacancyById(id)
	}

	@Delete('/:id')
	public async deleteVacancyById(@Param('id') id: string) {
		return this.vacanciesService.deleteVacancyById(id)
	}

	@Post('/')
	public async createVacancy(@Body() vacancyDto: VacancyDto) {
		return this.vacanciesService.createVacancy(vacancyDto)
	}
}
