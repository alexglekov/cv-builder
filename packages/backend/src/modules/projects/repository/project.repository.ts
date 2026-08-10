import { PrismaService } from '@cvb/prisma'
import { ProjectInterface, ProjectsTechnologiesInterface } from '../interface'
import { Injectable } from '@nestjs/common'

@Injectable()
export class ProjectRepository {
	constructor(private readonly prisma: PrismaService) {}

	public async postProject(userId: number, data: ProjectInterface) {
		const newProject = await this.prisma.projects.create({
			data: {
				title: data.title,
				description: data.description,
				position: data.position,
				start: data.start,
				end: data.end,
				respAndAchs: data.respAndAchs,
				userId
			}
		})

		await this.prisma.projectsTechnologies.createMany({
			data: data.technologies.map(
				(tech) =>
					({
						projectId: newProject.id,
						technologyId: tech
					} as ProjectsTechnologiesInterface)
			)
		})

		return Object.assign(newProject)
	}

	public async getProjectsByUserId(userId: number) {
		const projects = await this.prisma.projects.findMany({
			where: { userId },
			include: {
				ProjectsTechnologies: {
					select: {
						Technologies: true
					}
				}
			}
		})

		return projects
	}

	public async checkProjectAuthorship(userId: number, projectId: number): Promise<boolean> {
		const project = await this.prisma.projects.findMany({
			where: {
				id: projectId,
				userId
			}
		})

		if (project.length == 1) return true
		else return false
	}

	public async patchProjectActuality(projectId: number) {
		const result = await this.prisma.$executeRaw`UPDATE "Projects" SET "actual" = NOT "actual" WHERE "id" = ${projectId}`

		return result
	}

	public async changeProjectById(projectId: number, data: ProjectInterface) {
		const newProject = await this.prisma.projects.update({
			where: {
				id: projectId
			},
			data: {
				title: data.title,
				description: data.description,
				position: data.position,
				start: data.start,
				end: data.end,
				respAndAchs: data.respAndAchs
			}
		})

		await this.prisma.projectsTechnologies.deleteMany({
			where: {
				projectId
			}
		})

		const newProjectTechnologies = await this.prisma.projectsTechnologies.createMany({
			data: data.technologies.map(
				(tech) =>
					({
						projectId: newProject.id,
						technologyId: tech
					} as ProjectsTechnologiesInterface)
			)
		})

		return Object.assign(newProject, newProjectTechnologies)
	}

	public async deleteProject(projectId: number) {
		const result = await this.prisma.projects.delete({
			where: {
				id: projectId
			}
		})

		return result
	}

	public async getAllTechnologiesFromDb() {
		const technologies = await this.prisma.technologies.findMany()

		return technologies
	}
}
