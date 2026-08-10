import { Injectable } from '@nestjs/common'
import { AdminTechnologyDomain } from './admin.technology.domain'
import { TechnologyAdd, TechnologyUpdate } from './interface'

@Injectable()
export class AdminTechnologyService {
	constructor(private readonly adminDomain: AdminTechnologyDomain) {}

	public async getTechnologies() {
		const technologies = await this.adminDomain.getTechnologies()

		return technologies
	}

	public async addTechnology(data: TechnologyAdd) {
		const result = await this.adminDomain.addTechnology(data)

		return result
	}

	public async deleteTechnology(id: number) {
		const result = await this.adminDomain.deleteTechnology(id)

		return result
	}

	public async updateTechnology(data: TechnologyUpdate) {
		const updating = await this.adminDomain.updateTechnology(data)

		return updating
	}
}
