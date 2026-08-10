import { Module } from '@nestjs/common'
import { AdminLanguageModule } from './admin.language'
import { AdminRoleModule } from './admin.role'
import { AdminTechnologyModule } from './admin.technology'
import { AdminTechtypeModule } from './admin.techtype'
import { AdminUserModule } from './admin.user/admin.user.module'

@Module({
	imports: [AdminLanguageModule, AdminTechtypeModule, AdminRoleModule, AdminUserModule, AdminTechnologyModule]
})
export class AdminModule {}
