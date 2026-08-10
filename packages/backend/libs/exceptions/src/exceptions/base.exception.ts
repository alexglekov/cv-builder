import { HttpException } from '@nestjs/common'

export class BaseException extends HttpException {
	protected readonly details: any

	constructor(message: string, status: number, details?: any) {
		super(message, status || 500)
		this.details = details
	}

	public getDetails() {
		return this.details
	}

	public getMessage(): string {
		return this.message
	}
}
