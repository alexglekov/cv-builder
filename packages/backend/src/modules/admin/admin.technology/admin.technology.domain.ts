import { Injectable } from '@nestjs/common'
import { AdminTechnologyRepository } from './admin.technology.repository'
import { TechnologyAdd, TechnologyUpdate } from './interface'

@Injectable()
export class AdminTechnologyDomain {
	constructor(private readonly adminRepository: AdminTechnologyRepository) {}

	public async getTechnologies() {
		const technologies = await this.adminRepository.getTechnologies()

		return technologies
	}

	public async addTechnology(data: TechnologyAdd) {
		const result = await this.adminRepository.addTechnology(data)

		return result
	}

	public async deleteTechnology(id: number) {
		await this.adminRepository.deleteTechnologyById(id)
	}

	public async updateTechnology(data: TechnologyUpdate) {
		const updating = await this.adminRepository.updateTechnology(data)

		return updating
	}
}
