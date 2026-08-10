import { Injectable } from '@nestjs/common'
import { StorageDomain } from './storage.domain'
import { InputCvData } from './storage.interface'

@Injectable()
export class StorageService {
	constructor(private readonly storageDomain: StorageDomain) {}

	public async createYourPdf(userId: number, data: InputCvData) {
		const answer = await this.storageDomain.createYourPdf(userId, data)

		return answer
	}

	public async getAllPdfByUserId(userId: number) {
		const list = await this.storageDomain.getAllPdfByUserId(userId)

		return list
	}

	public async deletePdfByKey(key: string) {
		const result = await this.storageDomain.deletePdfByKey(key)

		return result
	}

	public async changePdfCredentials(key: string, title: string, description: string) {
		const result = await this.storageDomain.changePdfCredentials(key, title, description)

		return result
	}

	// public async uploadPdfByKey(key: string) {
	// 	const pdf = await this.awsService.uploadPdfByKey(key)

	// 	return pdf
	// }
}
