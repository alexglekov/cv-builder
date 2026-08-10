import { Module } from '@nestjs/common'
import { AdminTechtypeModule } from '../admin.techtype'
import { AdminTechnologyController } from './admin.technology.controller'
import { AdminTechnologyDomain } from './admin.technology.domain'
import { AdminTechnologyRepository } from './admin.technology.repository'
import { AdminTechnologyService } from './admin.technology.service'
import { InTechnologyValidation, NotInTechnologyValidation } from './validators'

@Module({
	controllers: [AdminTechnologyController],
	exports: [AdminTechnologyService],
	providers: [
		AdminTechnologyDomain,
		AdminTechnologyRepository,
		AdminTechnologyService,
		NotInTechnologyValidation,
		InTechnologyValidation
	],
	imports: [AdminTechtypeModule]
})
export class AdminTechnologyModule {}
