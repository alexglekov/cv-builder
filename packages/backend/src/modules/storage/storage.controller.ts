import { BaseException } from '@cvb/exceptions'
import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { Roles } from '../auth/decorators'
import { AccessGuard, AuthGuard } from '../auth/guards'
import { InputCvDataDto } from './dto'
import { StorageService } from './storage.service'

@ApiBearerAuth()
@ApiTags('Build CV')
@Controller('doc')
export class StorageController {
	constructor(private readonly storageService: StorageService) {}

	@Post('/create/:userId')
	public async createYourPdf(@Param('userId') id, @Body() data: InputCvDataDto) {
		const userId = Number(id)
		let answer = null

		try {
			answer = await this.storageService.createYourPdf(userId, data)
		} catch (e) {
			throw new BaseException(e.message, e.code)
		}

		return answer
	}

	@Roles('ADMIN', 'MANAGER')
	@UseGuards(AuthGuard)
	@UseGuards(AccessGuard)
	@Get('/list/:userId')
	public async getList(@Param('userId') id) {
		const userId = Number(id)

		const answer = await this.storageService.getAllPdfByUserId(userId)

		return answer
	}

	@Delete('/:key')
	@UseGuards(AuthGuard)
	public async deletePdfByKey(@Param('key') key: string) {
		const result = await this.storageService.deletePdfByKey(key)

		return result
	}

	@Patch('/:key')
	@UseGuards(AuthGuard)
	public async changePdfByKey(@Param('key') key: string, @Body() data: InputCvDataDto) {
		const result = await this.storageService.changePdfCredentials(key, data.title, data.description)

		return result
	}
}
