import { Module } from '@nestjs/common'
import { UsersRepository } from './repositories'
import { UsersService } from './services'

@Module({
	providers: [UsersService, UsersRepository],
	exports: [UsersService]
})
export class UsersModule {}
