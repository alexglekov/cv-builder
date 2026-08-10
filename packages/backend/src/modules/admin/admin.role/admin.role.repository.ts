import { Injectable } from '@nestjs/common'
import { PrismaService } from '@cvb/prisma'
import { Role } from './interface'

@Injectable()
export class AdminRoleRepository {
	constructor(private readonly prisma: PrismaService) {}

	public async updateUserRoleById(userId: number, data: Role) {
		const records = await this.prisma.user.updateMany({
			where: {
				NOT: {
					role: 'ADMIN'
				},
				AND: {
					id: userId
				}
			},
			data: { role: data.name }
		})

		return records
	}
}
