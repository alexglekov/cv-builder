import { BaseException } from '@cvb/exceptions'
import { PrismaService } from '@cvb/prisma'
import { Injectable } from '@nestjs/common'

import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'

@ValidatorConstraint({ name: 'technology', async: true })
@Injectable()
export class InTechnologyValidation implements ValidatorConstraintInterface {
	constructor(private readonly prisma: PrismaService) {}

	public async validate(value: string): Promise<boolean> {
		return this.prisma.technologies.findFirst({ where: { name: value } }).then((technology) => {
			if (!technology) {
				throw new BaseException('There is no technologies with this name', 500)
			} else {
				return true
			}
		})
	}
}
