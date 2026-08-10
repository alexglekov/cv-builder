import { Module } from '@nestjs/common'
import { AdminRoleController } from './admin.role.controller'
import { AdminRoleDomain } from './admin.role.domain'
import { AdminRoleRepository } from './admin.role.repository'
import { AdminRoleService } from './admin.role.service'

@Module({
	controllers: [AdminRoleController],
	providers: [AdminRoleDomain, AdminRoleRepository, AdminRoleService]
})
export class AdminRoleModule {}
