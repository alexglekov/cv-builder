import { Injectable } from '@nestjs/common'

import { UsersRepository } from '../repositories'
import { CreateUserParams } from './users-service.types'

@Injectable()
export class UsersService {
	constructor(private readonly usersRepository: UsersRepository) {}

	public async create(params: CreateUserParams) {
		return this.usersRepository.create(params)
	}

	public async getByEmail(email: string) {
		return this.usersRepository.findByEmail(email)
	}

	public async getById(userId: number) {
		return this.usersRepository.findById(userId)
	}

	public async deleteById(userId: number) {
		return this.usersRepository.deleteById(userId)
	}

	public async getUserRolesById(userId: number) {
		return this.usersRepository.getUserRolesById(userId)
	}
}
