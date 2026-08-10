import { Module } from '@nestjs/common'
import { ProjectDomain } from './domain'
import { ManagerProjectsController } from './controller'
import { ProjectsService } from './service'
import { ProjectRepository } from './repository'

@Module({
	exports: [ProjectsService],
	controllers: [ManagerProjectsController],
	providers: [ProjectsService, ProjectDomain, ProjectRepository]
})
export class ProjectsModule {}
