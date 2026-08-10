import { CanActivate, ExecutionContext } from '@nestjs/common'
import { Request } from 'express'

export class AuthGuard implements CanActivate {
	public canActivate(context: ExecutionContext): boolean {
		const request = context.switchToHttp().getRequest<Request>()

		return request.userCredentials != undefined
	}
}
