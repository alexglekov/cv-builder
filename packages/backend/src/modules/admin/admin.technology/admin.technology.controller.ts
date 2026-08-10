import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { Roles } from 'src/modules/auth/decorators'
import { AuthGuard, RolesGuard } from '../../auth/guards'
import { AdminTechnologyService } from './admin.technology.service'
import { TechnologyAddDto, TechnologyUpdateDto } from './dto'

@ApiBearerAuth()
@ApiTags('Technology Panel')
@UseGuards(AuthGuard, RolesGuard)
@Controller('admin/technology')
export class AdminTechnologyController {
	constructor(private readonly adminService: AdminTechnologyService) {}

	@Get()
	public async getTechnologies() {
		const result = await this.adminService.getTechnologies()

		return result
	}

	@Roles('ADMIN', 'MANAGER')
	@Post()
	public async addTechnology(@Body() data: TechnologyAddDto) {
		const result = await this.adminService.addTechnology(data.technology)

		return result
	}

	@Roles('ADMIN')
	@Delete(':technologyId')
	public async deleteTechnology(@Param('technologyId') technologyId: string) {
		const result = await this.adminService.deleteTechnology(+technologyId)

		return result
	}

	@Roles('ADMIN', 'MANAGER')
	@Put()
	public async updateTechnology(@Body() data: TechnologyUpdateDto) {
		const updating = await this.adminService.updateTechnology(data)

		return updating
	}
}
