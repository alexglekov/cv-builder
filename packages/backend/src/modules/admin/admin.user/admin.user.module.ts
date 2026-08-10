import { Module } from '@nestjs/common'
import { UsersModule } from 'src/modules/users'
import { AdminUserController } from './admin.user.controller'

@Module({
	imports: [UsersModule],
	controllers: [AdminUserController],
	providers: []
})
export class AdminUserModule {}
