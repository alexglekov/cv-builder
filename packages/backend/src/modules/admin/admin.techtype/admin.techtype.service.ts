import { Injectable } from '@nestjs/common'
import { AdminTechtypeDomain } from './admin.techtype.domain'
import { TechtypeAdd, TechtypeDelete, TechtypeUpdate } from './interface'

@Injectable()
export class AdminTechtypeService {
	constructor(private readonly adminDomain: AdminTechtypeDomain) {}

	public async getTechtypes() {
		const techtypes = await this.adminDomain.getTechtypes()

		return techtypes
	}

	public async addTechtype(data: TechtypeAdd) {
		const result = await this.adminDomain.addTechtype(data)

		return result
	}

	public async deleteTechtypeById(id: number) {
		return this.adminDomain.deleteTechtypeById(id)
	}

	public async deleteTechtype(data: TechtypeDelete[]) {
		const result = await this.adminDomain.deleteTechtype(data)

		return result
	}

	public async updateTechtype(data: TechtypeUpdate) {
		const updating = await this.adminDomain.updateTechtype(data)

		return updating
	}
}
