import { Injectable } from '@nestjs/common'
import { PrismaService } from '@cvb/prisma'

@Injectable()
export class StorageRepository {
	constructor(private readonly prisma: PrismaService) {}

	public async addPdfToDb(userId: number, key: string, title: string, description: string) {
		const adding = await this.prisma.cv.create({
			data: {
				key,
				title,
				description,
				userId,
				created: new Date(Date.now()),
				updated: new Date(Date.now())
			}
		})

		return adding
	}

	public async changePdfCredentials(key: string, title: string, description: string) {
		const updating = await this.prisma.cv.update({
			where: { key },
			data: {
				title,
				description,
				updated: new Date(Date.now())
			}
		})

		return updating
	}

	public async getAllPdfByUserId(userId: number) {
		const pdfs = await this.prisma.cv.findMany({
			where: { userId }
		})

		return pdfs
	}

	public async dropPdfToDb(key: string) {
		const deleting = await this.prisma.cv.delete({
			where: { key }
		})

		return deleting
	}
}
