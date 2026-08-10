import { HttpStatus } from '@nestjs/common'

import { BaseException } from './base.exception'

export class InternalErrorException extends BaseException {
	constructor(message = 'internal error - try again later', details?: any) {
		super(message, HttpStatus.INTERNAL_SERVER_ERROR, details)
	}
}
