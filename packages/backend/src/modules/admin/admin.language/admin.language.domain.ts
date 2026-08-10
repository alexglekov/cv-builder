import { Injectable } from '@nestjs/common'
import { AdminLanguageRepository } from './admin.language.repository'
import { LanguageAdd, LanguageUpdate } from './interface'

@Injectable()
export class AdminLanguageDomain {
	constructor(private readonly adminRepository: AdminLanguageRepository) {}

	public async getLanguages() {
		const result = await this.adminRepository.getLanguages()

		return result
	}

	public async addLanguage(data: LanguageAdd) {
		const result = await this.adminRepository.addLanguage(data)

		return result
	}

	public async deleteLanguageById(id: number) {
		await this.adminRepository.deleteLanguageById(id)

		return this.getLanguages()
	}

	public async updateLanguage(data: LanguageUpdate) {
		const updating = await this.adminRepository.updateLanguage(data)

		return updating
	}
}
