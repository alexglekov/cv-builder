import { BaseException } from '@cvb/exceptions'
import { Injectable } from '@nestjs/common'
import { ROLES } from '@prisma/client'
import { ProjectOutputDto } from '../dto'
import { ProjectInterface } from '../interface/project.interface'
import { ProjectRepository } from '../repository'

@Injectable()
export class ProjectDomain {
	constructor(private readonly projectRepository: ProjectRepository) {}

	public async postProject(userId: number, data: ProjectInterface) {
		const postData = data

		postData.start = new Date(Date.parse(postData.start)).toISOString()
		postData.end = new Date(Date.parse(postData.end)).toISOString()

		return this.projectRepository.postProject(userId, postData)
	}

	public async getProjectsByUserId(userId: number) {
		const projects = await this.projectRepository.getProjectsByUserId(userId)

		return projects.map(
			(a) =>
				new ProjectOutputDto(
					a.id,
					a.actual,
					a.title,
					a.description,
					a.position,
					a.start.toDateString(),
					a.end.toDateString(),
					a.respAndAchs,
					a.ProjectsTechnologies.map((a) => a.Technologies.id)
				)
		)
	}

	public async getProjectsByUserIdPDF(userId: number) {
		const projects = await this.projectRepository.getProjectsByUserId(userId)

		return projects.map(
			(a) =>
				new Object({
					id: a.id,
					title: a.title,
					description: a.description,
					position: a.position,
					start: a.start,
					end: a.end,
					respAndAchs: a.respAndAchs,
					userId: a.userId,
					actual: a.actual,
					technologies: a.ProjectsTechnologies.map((a) => Object.values(a)).flat()
				})
		)
	}

	public async patchProjectActuality(userId: number, projectId: number, role: ROLES) {
		if (role == 'USER') {
			if (await this.projectRepository.checkProjectAuthorship(userId, projectId))
				return this.projectRepository.patchProjectActuality(projectId)
			else throw new BaseException(`Project #${projectId} doesn't belong to user #${userId}`, 500)
		} else return this.projectRepository.patchProjectActuality(projectId)
	}

	public async changeProjectById(userId: number, projectId: number, role: ROLES, data: ProjectInterface) {
		const postData = data

		postData.start = new Date(Date.parse(postData.start)).toISOString()
		postData.end = new Date(Date.parse(postData.end)).toISOString()

		if (role == 'USER') {
			if (await this.projectRepository.checkProjectAuthorship(userId, projectId))
				return this.projectRepository.changeProjectById(projectId, postData)
			else throw new BaseException(`Project #${projectId} doesn't belong to user #${userId}`, 500)
		} else return this.projectRepository.changeProjectById(projectId, postData)
	}

	public async deleteProject(userId: number, projectId: number, role: ROLES) {
		if (role == 'USER') {
			if (await this.projectRepository.checkProjectAuthorship(userId, projectId))
				return this.projectRepository.deleteProject(projectId)
			else throw new BaseException(`Project #${projectId} doesn't belong to user #${userId}`, 500)
		} else return this.projectRepository.deleteProject(projectId)
	}

	public async getAllTechnologiesFromDb() {
		const technologies = await this.projectRepository.getAllTechnologiesFromDb()

		return technologies
	}

	public async getTechTableById(userId: number) {
		const projects = await this.getProjectsByUserId(userId)

		const arrTechnologies = {}

		//клеим из projects один объект с нужными данными
		projects.forEach((a) => {
			if (a.actual)
				a.technologies.forEach((b) => {
					if (!arrTechnologies[b])
						arrTechnologies[b] = {
							total: 0,
							last: 0
						}
				})
		})

		//cчитаем опыт работы с каждой технологией в милисекундах
		projects.forEach((a) => {
			const period = Date.parse(a.end) - Date.parse(a.start)

			if (a.actual)
				a.technologies.forEach((b) => {
					arrTechnologies[b].total += period
				})
		})

		//переводим опыт работы из милисекунд в года (округление)
		Object.values(arrTechnologies).forEach((a: any) => (a.total = Math.round(a.total / (1000 * 60 * 60 * 24 * 365))))

		//находим последний год использования каждой технологии
		for (let i = projects.length - 1; i > -1; i--) {
			const last = new Date(Date.parse(projects[i].end)).getFullYear()

			if (projects[i].actual)
				projects[i].technologies.forEach((b) => {
					if (arrTechnologies[b].last < last) arrTechnologies[b].last = last
				})
		}

		return Object.keys(arrTechnologies).map((key) => ({
			id: Number(key),
			...arrTechnologies[key]
		}))
	}

	public async getTechTableByIdPDF(userId: number) {
		const technologies = await this.getAllTechnologiesFromDb()
		const technologiesMap = new Map<number, { name: string; type: string }>(
			technologies.map((technologie) => {
				return [technologie.id, technologie]
			})
		)

		const projects = await this.getProjectsByUserId(userId)

		const arrTechnologies = {}

		//клеим из projects один объект с нужными данными
		projects.forEach((a) => {
			if (a.actual)
				a.technologies.forEach((b) => {
					if (!Object.keys(arrTechnologies).includes(b.name))
						Object.assign(arrTechnologies, {
							[b]: {
								total: 0,
								last: 0
							}
						})
				})
		})
		//cчитаем опыт работы с каждой технологией в милисекундах
		projects.forEach((a) => {
			const period = Date.parse(a.end) - Date.parse(a.start)

			if (a.actual)
				a.technologies.forEach((b) => {
					arrTechnologies[b].total += period
				})
		})

		//переводим опыт работы из милисекунд в года (округление)
		Object.values(arrTechnologies).forEach((a: any) => (a.total = Math.round(a.total / (1000 * 60 * 60 * 24 * 365))))

		//находим последний год использования каждой технологии
		for (let i = projects.length - 1; i > -1; i--) {
			const last = new Date(Date.parse(projects[i].end)).getFullYear()

			if (projects[i].actual)
				projects[i].technologies.forEach((b) => {
					if (arrTechnologies[b].last < last) arrTechnologies[b].last = last
				})
		}

		Object.keys(arrTechnologies).forEach((key) => {
			if (arrTechnologies[Number(key)].total < 1) {
				arrTechnologies[Number(key)].total = 1
			}
		})

		return Object.keys(arrTechnologies).map((key) => ({
			id: Number(key),
			...arrTechnologies[key],
			...(technologiesMap.get(Number(key)) || {})
		}))
	}
}
