import { BaseException } from '@cvb/exceptions'
import { Injectable } from '@nestjs/common'
import { AdminRoleRepository } from './admin.role.repository'
import { Role } from './interface'

@Injectable()
export class AdminRoleDomain {
	constructor(private readonly adminRepository: AdminRoleRepository) {}

	public async updateUserRoleById(userId: number, data: Role) {
		if (data.name !== 'ADMIN') {
			const role = await this.adminRepository.updateUserRoleById(userId, data)

			if (role.count === 0) throw new BaseException('There are no user with this Id or this user is "ADMIN"', 400)

			return role
		} else throw new BaseException(`You can't assign 'ADMIN' role to anybody`, 403)
	}
}
