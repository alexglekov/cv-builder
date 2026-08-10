import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { ROLES } from '@prisma/client'
import { Request } from 'express'

@Injectable()
export class RolesGuard implements CanActivate {
	constructor(private reflector: Reflector) {}

	public canActivate(context: ExecutionContext): boolean {
		const requiredRoles = this.reflector.get<ROLES[]>('role', context.getHandler())

		if (!requiredRoles) {
			return true
		}

		const request = context.switchToHttp().getRequest<Request>()

		return requiredRoles.some((role) => request.userCredentials.role.includes(role))
	}
}
