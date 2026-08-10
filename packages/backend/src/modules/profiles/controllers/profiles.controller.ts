import { Body, Controller, Get, Param, Put, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { User } from '@prisma/client'
import { Roles } from 'src/modules/auth/decorators'
import { AccessGuard, AuthGuard } from '../../auth/guards'
import { ProfileDto } from '../dto'
import { GetProfilesList } from '../profile.interfaces'
import { ProfileService } from '../services'

@ApiBearerAuth()
@ApiTags('Profile')
@UseGuards(AuthGuard, AccessGuard)
@Controller('profile')
export class ProfileManagerController {
	constructor(private readonly profileService: ProfileService) {}

	@Roles('ADMIN', 'MANAGER')
	@Get('info/list')
	public async getProfilesList(): Promise<GetProfilesList[]> {
		const list = await this.profileService.getProfilesList()

		return list
	}

	@Roles('ADMIN', 'MANAGER')
	@Get('info/:userId')
	public async getProfileInfoById(@Param('userId') id): Promise<User> {
		const userId = Number(id)

		const user = await this.profileService.getProfileInfoById(userId)

		return user
	}

	@Roles('ADMIN', 'MANAGER')
	@Put('info/:userId')
	public async putProfileInfoById(@Param('userId') id, @Body() data: ProfileDto): Promise<any> {
		const userId = Number(id)
		const inputData = data

		await this.profileService.putProfileInfoById(userId, inputData)

		const answer = this.profileService.getProfileInfoById(userId)

		return answer
	}
}
