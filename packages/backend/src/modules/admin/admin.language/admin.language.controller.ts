import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { Roles } from 'src/modules/auth/decorators'
import { AuthGuard, RolesGuard } from '../../auth/guards'
import { AdminLanguageService } from './admin.language.service'
import { LanguageAddDto, LanguageUpdateDto } from './dto'

@ApiBearerAuth()
@ApiTags('Language Panel')
@UseGuards(AuthGuard, RolesGuard)
@Controller('admin/language')
export class AdminLanguageController {
	constructor(private readonly adminService: AdminLanguageService) {}

	@Get()
	public async getLanguages() {
		const result = await this.adminService.getLanguages()

		return result
	}

	@Roles('ADMIN', 'MANAGER')
	@Post()
	public async addLanguage(@Body() data: LanguageAddDto) {
		const result = await this.adminService.addLanguage(data)

		return result
	}

	@Roles('ADMIN')
	@Delete(':languageId')
	public async deleteLanguage(@Param('languageId') languageId: string) {
		const result = await this.adminService.deleteLanguage(+languageId)

		return result
	}

	@Roles('ADMIN', 'MANAGER')
	@Put()
	public async updateLanguage(@Body() data: LanguageUpdateDto) {
		const updating = await this.adminService.updateLanguage(data)

		return updating
	}
}
