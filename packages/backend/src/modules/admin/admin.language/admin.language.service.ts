import { Injectable } from '@nestjs/common'
import { AdminLanguageDomain } from './admin.language.domain'
import { LanguageAdd, LanguageUpdate } from './interface'

@Injectable()
export class AdminLanguageService {
	constructor(private readonly adminDomain: AdminLanguageDomain) {}

	public async getLanguages() {
		const languages = await this.adminDomain.getLanguages()

		return languages
	}

	public async addLanguage(data: LanguageAdd) {
		const result = await this.adminDomain.addLanguage(data)

		return result
	}

	public async deleteLanguage(id: number) {
		const result = await this.adminDomain.deleteLanguageById(id)

		return result
	}

	public async updateLanguage(data: LanguageUpdate) {
		const updating = await this.adminDomain.updateLanguage(data)

		return updating
	}
}
