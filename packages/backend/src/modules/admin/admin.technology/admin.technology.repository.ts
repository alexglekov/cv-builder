import { Injectable } from '@nestjs/common'
import { PrismaService } from '@cvb/prisma'
import { TechnologyAdd, TechnologyDelete, TechnologyUpdate } from './interface'

@Injectable()
export class AdminTechnologyRepository {
	constructor(private readonly prisma: PrismaService) {}

	public async getTechnologies() {
		const techs = await this.prisma.technologies.findMany({
			select: {
				id: true,
				name: true,
				type: true
			}
		})

		return techs
	}

	public async addTechnology(data: TechnologyAdd) {
		const result = await this.prisma.technologies.create({
			data: {
				name: data.name,
				type: data.type
			}
		})

		return result
	}

	public async deleteTechnologyById(id: number) {
		const result = await this.prisma.technologies.delete({
			where: { id }
		})

		return result
	}

	// public async findRecordsWithTechnology(data: TechnologyDelete) {
	// 	const records = await this.prisma.technologies.findFirst({
	// 		where: {
	// 			name: data.name,
	// 			type: data.type
	// 		}
	// 	})

	// 	const projectsTechnologiesRecords = await this.prisma.projectsTechnologies.findMany({
	// 		where: {
	// 			technologyId: records.id
	// 		}
	// 	})

	// 	return projectsTechnologiesRecords
	// }

	public async deleteTechnology(data: TechnologyDelete) {
		const deleting = await this.prisma.technologies.deleteMany({
			where: {
				name: data.name,
				type: data.type
			}
		})

		return deleting
	}

	public async updateTechnology(data: TechnologyUpdate) {
		const updating = await this.prisma.technologies.update({
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
