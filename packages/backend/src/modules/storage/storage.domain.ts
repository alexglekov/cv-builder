import { AwsS3Service } from '@cvb/aws'
import { BaseException } from '@cvb/exceptions'
import { PdfCreatorService } from 'libs/pdf-creator'
import { Injectable } from '@nestjs/common'
import { ProfileService } from '../profiles'
import { ProjectsService } from '../projects'
import { InputCvData } from './storage.interface'
import { StorageRepository } from './storage.repository'
import { AdminTechtypeService } from '../admin/admin.techtype/admin.techtype.service'

@Injectable()
export class StorageDomain {
	constructor(
		private readonly adminTechtypeService: AdminTechtypeService,
		private readonly pdfService: PdfCreatorService,
		private readonly profileService: ProfileService,
		private readonly projectService: ProjectsService,
		private readonly awsService: AwsS3Service,
		private readonly storageRepository: StorageRepository
	) {}

	public async createYourPdf(userId: number, data: InputCvData) {
		const profile = await this.profileService.getProfileInfoByIdPDF(userId)
		const projects = await this.projectService.getProjectsByUserId(userId)
		const techtable = await this.projectService.getTechTableByIdPDF(userId)
		const technologies = await this.projectService.getAllTechnologiesFromDb()

		const techtypes = (await this.adminTechtypeService.getTechtypes()).map((a) => a.name)

		if (techtable.length < 1) {
			throw new BaseException(
				`It's strange that employee ${userId} doesn't have any technologies but you want to build his CV`,
				500
			)
		}

		if (technologies.length < 1) throw new BaseException(`There are no technologies in our database. Sorry =(`, 500)

		const file = await this.pdfService.createPdf(profile, projects, technologies, techtable, techtypes)

		const key = await this.awsService.putFile({ file, name: `${Date.now()}.pdf`, subPath: userId.toString() })

		const answer = await this.awsService.getFileUri(key)

		const cv = await this.storageRepository.addPdfToDb(userId, key.key, data.title, data.description)

		return { ...cv, downloadUri: answer }
	}

	public async getAllPdfByUserId(userId: number) {
		const list = await this.storageRepository.getAllPdfByUserId(userId)

		const result: Array<any> = []

		for (const cv of list) {
			const downloadUri = await this.awsService.getFileUri({ key: cv.key })

			result.push({ ...cv, downloadUri })
		}

		return result
	}

	public async deletePdfByKey(key: string) {
		try {
			await this.awsService.deletePdfByKey(key)
			await this.storageRepository.dropPdfToDb(key)
		} catch (e) {
			throw new BaseException(e.message, 500)
		}

		return 'pdf № ' + key + ' was deleted!'
	}

	public async changePdfCredentials(key: string, title: string, description: string) {
		const updating = await this.storageRepository.changePdfCredentials(key, title, description)

		return updating
	}
}
