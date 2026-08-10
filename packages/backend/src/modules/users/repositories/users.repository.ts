import { Injectable } from '@nestjs/common'
import { PrismaService } from '@cvb/prisma'
import { CreateUserParams } from './users-repository.types'

@Injectable()
export class UsersRepository {
	constructor(private readonly prisma: PrismaService) {}

	public async create(params: CreateUserParams) {
		const { email, name, profileUri, surname } = params

		const newUser = await this.prisma.user.create({
			data: {
				email,
				name,
				profileUri: profileUri || '',
				surname
			}
		})

		await this.prisma.profiles.create({
			data: {
				id: newUser.id
			}
		})

		return newUser
	}

	public async findByEmail(email: string) {
		return this.prisma.user.findFirst({
			where: {
				email
			}
		})
	}

	public async findById(id: number) {
		return this.prisma.user.findUniqueOrThrow({
			where: {
				id
			}
		})
	}

	public async deleteById(id: number) {
		return this.prisma.user.delete({
			where: {
				id
			}
		})
	}

	public async getUserRolesById(id: number) {
		return this.prisma.user.findUniqueOrThrow({
			select: {
				role: true
			},
			where: {
				id
			}
		})
	}
}
