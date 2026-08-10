import { Injectable } from '@nestjs/common'
import { ProfileDomain } from '../domains'
import { GetProfilesList, PutProfileInfo } from '../profile.interfaces'

@Injectable()
export class ProfileService {
	constructor(private readonly profileDomain: ProfileDomain) {}
	public async getProfileInfoById(userId: number): Promise<any> {
		return this.profileDomain.getProfileInfoById(userId)
	}

	public async getProfileInfoByIdPDF(userId: number): Promise<any> {
		return this.profileDomain.getProfileInfoByIdPDF(userId)
	}

	public async putProfileInfoById(userId: number, data: PutProfileInfo) {
		return this.profileDomain.putProfileInfoById(userId, data)
	}

	public async getProfilesList(): Promise<GetProfilesList[]> {
		return this.profileDomain.getProfilesList()
	}
}
