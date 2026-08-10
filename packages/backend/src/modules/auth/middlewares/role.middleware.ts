import { Injectable, NestMiddleware } from '@nestjs/common'
import { NextFunction, Request, Response } from 'express'

import { UsersService } from '../../users'

@Injectable()
export class RoleMiddleware implements NestMiddleware {
	constructor(private readonly userService: UsersService) {}

	public async use(req: Request, res: Response, next: NextFunction) {
		if (req.userCredentials) {
			const { userId } = req.userCredentials

			const { role } = await this.userService.getUserRolesById(userId)

			req.userCredentials.role = role
		}

		return next()
	}
}
