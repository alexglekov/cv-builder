import { Controller, Post, Req, Res, UseGuards } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { Request, Response } from 'express'
import { RefreshGuard } from '../guards'
import { AuthService } from '../services'

@ApiTags('Auth')
@Controller('auth/tokens')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@UseGuards(RefreshGuard)
	@Post('/refresh-tokens')
	public async refresh(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
		const { userId, token } = req.refresh

		const { accessToken, refreshToken } = await this.authService.updateTokens({ userId, token })

		this.saveRefreshTokenOnCookie(res, refreshToken)

		console.log(accessToken)

		return accessToken
	}

	@UseGuards(RefreshGuard)
	@Post('/sign-out')
	public async signOut(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
		const { userId } = req.refresh

		await this.authService.signOut({ userId })

		this.clearRefreshTokenOnCookie(res)
	}

	private saveRefreshTokenOnCookie(response: Response, refreshToken: string) {
		response.cookie('refreshToken', refreshToken, {
			sameSite: 'none',
			httpOnly: true,
			secure: true
		})
	}

	private clearRefreshTokenOnCookie(response: Response) {
		response.clearCookie('refreshToken')
	}
}
