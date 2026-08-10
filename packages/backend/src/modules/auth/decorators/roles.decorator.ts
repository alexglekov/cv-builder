import { SetMetadata } from '@nestjs/common'
import { ROLES } from '@prisma/client'

export const Roles = (...roles: ROLES[]) => SetMetadata('role', roles)
