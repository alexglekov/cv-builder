import { BaseException } from '@cvb/exceptions'
import { PrismaService } from '@cvb/prisma'
import { Injectable } from '@nestjs/common'

import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'
import { Technology } from '../dto'

@ValidatorConstraint({ name: 'technology', async: true })
@Injectable()
export class NotInTechnologyValidation implements ValidatorConstraintInterface {
	constructor(private readonly prisma: PrismaService) {}

	public async validate(value: Technology): Promise<boolean> {
		const answer = await this.prisma.technologies
			.findFirst({ where: { name: value.name, type: value.type } })
			.then((technology) => {
				if (technology) {
					throw new BaseException('There is such a technology with this name', 500)
				} else {
					return true
				}
			})

		return answer
	}
}
