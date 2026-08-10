import { Module } from '@nestjs/common'
import { AdminTechtypeController } from './admin.techtype.controller'
import { AdminTechtypeDomain } from './admin.techtype.domain'
import { AdminTechtypeRepository } from './admin.techtype.repository'
import { AdminTechtypeService } from './admin.techtype.service'
import { InTechtypeValidation, NotInTechtypeValidation } from './validators'

@Module({
	controllers: [AdminTechtypeController],
	exports: [AdminTechtypeService, InTechtypeValidation, NotInTechtypeValidation],
	providers: [
		AdminTechtypeDomain,
		AdminTechtypeRepository,
		AdminTechtypeService,
		NotInTechtypeValidation,
		InTechtypeValidation
	]
})
export class AdminTechtypeModule {}
