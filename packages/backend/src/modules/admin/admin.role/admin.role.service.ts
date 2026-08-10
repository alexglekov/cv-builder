import { Injectable } from '@nestjs/common'
import { AdminRoleDomain } from './admin.role.domain'
import { Role } from './interface/role.interface'

@Injectable()
export class AdminRoleService {
	constructor(private readonly adminDomain: AdminRoleDomain) {}

	public async updateUserRoleById(userId: number, data: Role) {
		const role = await this.adminDomain.updateUserRoleById(userId, data)

		return role
	}
}
