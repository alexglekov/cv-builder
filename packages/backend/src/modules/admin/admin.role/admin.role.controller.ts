import { Body, Controller, Param, Put, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { Roles } from 'src/modules/auth/decorators'
import { AuthGuard, RolesGuard } from '../../auth/guards'
import { AdminRoleService } from './admin.role.service'
import { RoleDto } from './dto'

@ApiBearerAuth()
@ApiTags('Role Panel')
@UseGuards(AuthGuard, RolesGuard)
@Controller('admin/role')
export class AdminRoleController {
	constructor(private readonly adminService: AdminRoleService) {}

	@Roles('ADMIN')
	@Put('/:userId')
	public async updateUserRoleById(@Param('userId') userId: string, @Body() data: RoleDto) {
		const role = await this.adminService.updateUserRoleById(+userId, data)

		return role
	}
}
