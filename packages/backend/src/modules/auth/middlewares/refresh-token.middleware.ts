import { Injectable, NestMiddleware } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { NextFunction, Request, Response } from 'express'
import { Config } from '../../../config'

@Injectable()
export class RefreshTokenMiddleware implements NestMiddleware {
	constructor(private readonly jwtService: JwtService, private readonly configService: ConfigService<Config>) {}

	public async use(req: Request, res: Response, next: NextFunction) {
		const refreshToken = req.cookies['refreshToken'] as any

		if (!refreshToken && typeof refreshToken !== 'string') {
			return next()
		}

		const { refreshTokenSecretKey } = this.configService.get('jwt')

		try {
			const check = await this.jwtService.verifyAsync(refreshToken, {
				secret: refreshTokenSecretKey
			})

			req.refresh = {
				token: refreshToken,
				...check
			}
		} catch (error: any) {}

		return next()
	}
}
