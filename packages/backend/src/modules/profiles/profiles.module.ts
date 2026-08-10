import { Module } from '@nestjs/common'

import { ProfileManagerController } from './controllers'
import { ProfileDomain } from './domains'
import { ProfileRepository } from './repositories'
import { ProfileService } from './services'

@Module({
	exports: [ProfileService],
	controllers: [ProfileManagerController],
	providers: [ProfileService, ProfileDomain, ProfileRepository]
})
export class ProfileModule {}
