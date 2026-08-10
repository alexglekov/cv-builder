import { Injectable } from '@nestjs/common'
import { PrismaService } from '@cvb/prisma'
import { TechtypeAdd, TechtypeDelete, TechtypeUpdate } from './interface'

@Injectable()
export class AdminTechtypeRepository {
	constructor(private readonly prisma: PrismaService) {}

	public async getTechtypes() {
		const techs = await this.prisma.techtypes.findMany({
			select: {
				id: true,
				name: true
			}
		})

		return techs
	}

	public async addTechtype(data: TechtypeAdd) {
		const result = await this.prisma.techtypes.create({
			data: {
				name: data.name
			}
		})

		return result
	}

	public async deleteTechtypeById(id: number) {
		const result = await this.prisma.techtypes.delete({
			where: {
				id
			}
		})

		return result
	}

	public async deleteRecordsWithTechtype(data: TechtypeDelete) {
		const records = await this.prisma.technologies.deleteMany({
			where: { type: data.name }
		})

		return records
	}

	public async deleteTechtype(data: TechtypeDelete) {
		const deleting = await this.prisma.techtypes.deleteMany({
			where: {
				name: data.name
			}
		})

		return deleting
	}

	public async updateTechtype(data: TechtypeUpdate) {
		const updating = await this.prisma.techtypes.update({
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
