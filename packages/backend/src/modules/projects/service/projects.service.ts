import { Injectable } from '@nestjs/common'
import { ROLES } from '@prisma/client'
import { ProjectDomain } from '../domain'
import { ProjectInterface } from '../interface'

@Injectable()
export class ProjectsService {
	constructor(private readonly projectDomain: ProjectDomain) {}

	public async postProject(userId: number, data: ProjectInterface) {
		return this.projectDomain.postProject(userId, data)
	}

	public async getProjectsByUserId(userId: number) {
		const projects = await this.projectDomain.getProjectsByUserId(userId)

		if (!projects) return []
		else return projects
	}

	public async getProjectsByUserIdPDF(userId: number) {
		const projects = await this.projectDomain.getProjectsByUserIdPDF(userId)

		if (!projects) return []
		else return projects
	}

	public async patchProjectActuality(userId: number, projectId: number, role: ROLES) {
		const project = await this.projectDomain.patchProjectActuality(userId, projectId, role)

		return project
	}

	public async changeProjectById(userId: number, projectId: number, role: ROLES, data: ProjectInterface) {
		const project = await this.projectDomain.changeProjectById(userId, projectId, role, data)

		return project
	}

	public async deleteProject(userId: number, projectId: number, role: ROLES) {
		const project = await this.projectDomain.deleteProject(userId, projectId, role)

		return project
	}

	public async getAllTechnologiesFromDb() {
		const technologies = await this.projectDomain.getAllTechnologiesFromDb()

		return technologies
	}

	public async getTechTableById(userId: number) {
		const table = await this.projectDomain.getTechTableById(userId)

		return table
	}

	public async getTechTableByIdPDF(userId: number) {
		const table = await this.projectDomain.getTechTableByIdPDF(userId)

		return table
	}
}
