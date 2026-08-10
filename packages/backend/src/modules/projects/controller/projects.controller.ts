import { Controller, Param, UseGuards, Get, Post, Body, Patch, Delete, Put } from '@nestjs/common'
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger'
import { Roles } from 'src/modules/auth/decorators'
import { UserCredentials } from 'src/modules/profiles/decorators'
import { AuthGuard, AccessGuard } from 'src/modules/auth/guards'
import { IdDto, ProjectInputDto } from '../dto'
import { ProjectsService } from '../service'
import { CredentialsUserId } from 'src/modules/profiles/dto'
import { ROLES } from '@prisma/client'

@ApiBearerAuth()
@ApiTags('Projects')
@Controller('/projects')
export class ManagerProjectsController {
	constructor(private readonly projectService: ProjectsService) {}

	@Roles('ADMIN', 'MANAGER')
	@ApiParam({ name: 'userId' })
	@UseGuards(AuthGuard, AccessGuard)
	@Get('/info/:userId')
	public async getProjectsByUserId(@Param() id: IdDto) {
		const { userId } = id
		const projects = await this.projectService.getProjectsByUserId(+userId)

		return projects
	}

	@Get('/techtable/:userId')
	public async getTechTableById(@Param() id: IdDto) {
		const { userId } = id

		const table = await this.projectService.getTechTableById(+userId)

		return table
	}

	@Roles('ADMIN', 'MANAGER')
	@Post('/:userId')
	@UseGuards(AuthGuard, AccessGuard)
	public async postProjectByUserId(@Param() id: IdDto, @Body() data: ProjectInputDto) {
		const { userId } = id

		const project = await this.projectService.postProject(+userId, data)

		return project
	}

	@Get('/skills')
	public async getAllTechnologiesFromDb() {
		const technologies = await this.projectService.getAllTechnologiesFromDb()

		return technologies
	}

	@Patch('/:projectId')
	@UseGuards(AuthGuard, AccessGuard)
	public async patchProjectActuality(
		@UserCredentials('userId') userId: CredentialsUserId,
		@UserCredentials('role') role: ROLES,
		@Param('projectId') projectId: string
	) {
		const project = await this.projectService.patchProjectActuality(+userId, +projectId, role)

		return project
	}

	@Put('/:projectId')
	@UseGuards(AuthGuard, AccessGuard)
	public async changeProjectById(
		@UserCredentials('userId') userId: CredentialsUserId,
		@UserCredentials('role') role: ROLES,
		@Body() data: ProjectInputDto,
		@Param('projectId') projectId: string
	) {
		const project = await this.projectService.changeProjectById(+userId, +projectId, role, data)

		return project
	}

	@Delete('/:projectId')
	@UseGuards(AuthGuard, AccessGuard)
	public async deleteYourProjectActuality(
		@UserCredentials('userId') userId: CredentialsUserId,
		@UserCredentials('role') role: ROLES,
		@Param('projectId') projectId: string
	) {
		const project = await this.projectService.deleteProject(+userId, +projectId, role)

		return project
	}
}
