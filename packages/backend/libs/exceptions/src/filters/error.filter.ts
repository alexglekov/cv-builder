import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common'
import { Response } from 'express'

import { BaseException } from '../exceptions'

@Catch(BaseException)
export class MainExceptionFilter implements ExceptionFilter {
	public catch(exception: BaseException, host: ArgumentsHost) {
		const status = exception.getStatus()
		const details = exception.getDetails()
		const message = exception.getMessage()

		const response = host.switchToHttp().getResponse<Response>()

		response.status(status).json({
			error: {
				statusCode: status,
				message,
				details
			}
		})
	}
}
