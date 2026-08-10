import { Module } from '@nestjs/common'
import { StorageService } from './storage.service'
import { StorageController } from './storage.controller'
import { AwsS3Module } from '@cvb/aws'
import { ProjectsModule } from '../projects'
import { ProfileModule } from '../profiles'
import { StorageDomain } from './storage.domain'
import { StorageRepository } from './storage.repository'
import { PdfCreatorModule } from 'libs/pdf-creator'
import { AdminTechtypeModule } from '../admin/admin.techtype'

@Module({
	imports: [AwsS3Module, ProjectsModule, ProfileModule, PdfCreatorModule, AdminTechtypeModule],
	controllers: [StorageController],
	providers: [StorageService, StorageDomain, StorageRepository]
})
export class StorageModule {}
