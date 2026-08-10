import { Module } from '@nestjs/common'
import { VacansciesService } from './vacancies.service'
import { VacanciesController } from './vacancies.controller'

@Module({
	controllers: [VacanciesController],
	providers: [VacansciesService],
	exports: []
})
export class VacanciesModule {}
