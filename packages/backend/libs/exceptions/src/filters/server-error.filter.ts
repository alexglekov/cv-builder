import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common'
import { Response } from 'express'

@Catch(Error)
export class ServerErrorFilter implements ExceptionFilter {
	public catch(exception: Error, ctx: ArgumentsHost) {
		const message = exception.message
		const details = 'please, try again later'
		const status = 500

		const response = ctx.switchToHttp().getResponse<Response>()

		response.status(status).json({
			error: {
				statusCode: status,
				message,
				details
			}
		})
	}
}
