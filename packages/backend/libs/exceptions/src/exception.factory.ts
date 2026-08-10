import { ValidationError } from 'class-validator'
import { BaseException, BadRequestException } from './exceptions'

export const simpleExceptionFactory = (): BaseException => {
	return new BadRequestException('')
}

export const validationExceptionFactory = (errors: Array<ValidationError>): BaseException => {
	return new BadRequestException(
		'Validation error',
		errors.map((error) => error.toString())
	)
}
