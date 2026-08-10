import { Module } from '@nestjs/common'
import { AdminLanguageController } from './admin.language.controller'
import { AdminLanguageDomain } from './admin.language.domain'
import { AdminLanguageRepository } from './admin.language.repository'
import { AdminLanguageService } from './admin.language.service'
import { InLangnameValidation, NotInLangnameValidation } from './validators'

@Module({
	controllers: [AdminLanguageController],
	providers: [
		AdminLanguageDomain,
		AdminLanguageRepository,
		AdminLanguageService,
		InLangnameValidation,
		NotInLangnameValidation
	]
})
export class AdminLanguageModule {}
