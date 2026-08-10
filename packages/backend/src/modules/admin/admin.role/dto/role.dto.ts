import { ROLES } from '@prisma/client'
import { IsString } from 'class-validator'

export class RoleDto {
	@IsString()
	name: ROLES
}
