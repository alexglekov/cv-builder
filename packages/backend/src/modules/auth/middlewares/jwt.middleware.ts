import { Injectable, NestMiddleware } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { NextFunction, Request, Response } from 'express'

import { Config } from '../../../config'

@Injectable()
export class JwtMiddleware implements NestMiddleware {
	constructor(private readonly jwtService: JwtService, private readonly configService: ConfigService<Config>) {}

	public async use(req: Request, res: Response, next: NextFunction) {
		const bearerToken = req.headers.authorization

		if (!bearerToken) {
			return next()
		}

		const token = bearerToken.split(' ')[1]

		if (!token) {
			return next()
		}

		const { accessTokenSecretKey } = this.configService.get('jwt')

		try {
			const check: { userId: number } = await this.jwtService.verifyAsync(token, { secret: accessTokenSecretKey })

			req.userCredentials = check
		} catch (error: any) {}

		return next()
	}
}
