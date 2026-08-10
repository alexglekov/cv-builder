import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { Roles } from 'src/modules/auth/decorators'
import { AuthGuard, RolesGuard } from '../../auth/guards'
import { AdminTechtypeService } from './admin.techtype.service'
import { TechtypeAddDto, TechtypeUpdateDto } from './dto'

@ApiBearerAuth()
@ApiTags('Techtype Panel')
@UseGuards(AuthGuard, RolesGuard)
@Controller('admin/techtype')
export class AdminTechtypeController {
	constructor(private readonly adminService: AdminTechtypeService) {}

	@Get()
	public async getTechtypes() {
		const result = await this.adminService.getTechtypes()

		return result
	}

	@Roles('ADMIN', 'MANAGER')
	@Post()
	public async addTechtype(@Body() data: TechtypeAddDto) {
		const result = await this.adminService.addTechtype(data)

		return result
	}

	@Roles('ADMIN')
	@Delete(':techtypeId')
	public async deleteTechtypeById(@Param('techtypeId') techtypeId: string) {
		const result = await this.adminService.deleteTechtypeById(+techtypeId)

		return result
	}

	@Roles('ADMIN', 'MANAGER')
	@Put()
	public async updateTechtype(@Body() data: TechtypeUpdateDto) {
		const updating = await this.adminService.updateTechtype(data)

		return updating
	}
}
