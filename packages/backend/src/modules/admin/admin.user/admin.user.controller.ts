import { Body, Controller, Delete, Param, Post, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { Roles } from 'src/modules/auth/decorators'
import { AuthGuard, RolesGuard } from '../../auth/guards'
import { UsersService } from '../../users/services'
import { CreateUserDto } from './dto'

@ApiBearerAuth()
@ApiTags('User Panel')
@UseGuards(AuthGuard, RolesGuard)
@Controller('admin/user')
export class AdminUserController {
	constructor(private readonly userService: UsersService) {}

	@Roles('ADMIN')
	@Post()
	public async createUser(@Body() data: CreateUserDto) {
		const user = await this.userService.create(data)

		return user
	}

	@Roles('ADMIN')
	@Delete(':userId')
	public async deleteUser(@Param('userId') userId: string) {
		const user = await this.userService.deleteById(+userId)

		return user
	}
}
