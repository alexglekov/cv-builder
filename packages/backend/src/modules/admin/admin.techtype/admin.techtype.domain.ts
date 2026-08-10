import { BaseException } from '@cvb/exceptions'
import { Injectable } from '@nestjs/common'
import { AdminTechtypeRepository } from './admin.techtype.repository'
import { TechtypeAdd, TechtypeDelete, TechtypeUpdate } from './interface'

@Injectable()
export class AdminTechtypeDomain {
	constructor(private readonly adminRepository: AdminTechtypeRepository) {}

	public async getTechtypes() {
		const techtypes = await this.adminRepository.getTechtypes()

		return techtypes
	}

	public async addTechtype(data: TechtypeAdd) {
		const result = await this.adminRepository.addTechtype(data)

		return result
	}

	public async deleteTechtypeById(id: number) {
		const result = await this.adminRepository.deleteTechtypeById(id)

		return result
	}

	public async deleteTechtype(data: TechtypeDelete[]) {
		data.forEach(async (data) => {
			try {
				await this.adminRepository.deleteRecordsWithTechtype(data)
				await this.adminRepository.deleteTechtype(data)
			} catch (e) {
				throw new BaseException(e.message, 500)
			}
		})

		return this.getTechtypes()
	}

	public async updateTechtype(data: TechtypeUpdate) {
		const updating = await this.adminRepository.updateTechtype(data)

		return updating
	}
}
