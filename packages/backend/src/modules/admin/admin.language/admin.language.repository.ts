import { Injectable } from '@nestjs/common'
import { PrismaService } from '@cvb/prisma'
import { LanguageAdd, LanguageUpdate } from './interface'

@Injectable()
export class AdminLanguageRepository {
	constructor(private readonly prisma: PrismaService) {}

	public async getLanguages() {
		const result = await this.prisma.langnames.findMany({
			select: {
				id: true,
				name: true
			}
		})

		return result
	}

	public async addLanguage(data: LanguageAdd) {
		const result = await this.prisma.langnames.create({
			data: {
				name: data.name
			}
		})

		return result
	}

	public async deleteLanguageById(id: number) {
		const deleting = await this.prisma.langnames.delete({
			where: {
				id
			}
		})

		return deleting
	}

	public async updateLanguage(data: LanguageUpdate) {
		const updating = await this.prisma.langnames.updateMany({
			where: {
				id: data.id
			},
			data: {
				name: data.name
			}
		})

		return updating
	}
}
