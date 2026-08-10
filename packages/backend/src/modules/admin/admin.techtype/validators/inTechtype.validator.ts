import { BaseException } from '@cvb/exceptions'
import { PrismaService } from '@cvb/prisma'
import { Injectable } from '@nestjs/common'

import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'

@ValidatorConstraint({ name: 'techtype', async: true })
@Injectable()
export class InTechtypeValidation implements ValidatorConstraintInterface {
	constructor(private readonly prisma: PrismaService) {}

	public async validate(value: string): Promise<boolean> {
		return this.prisma.techtypes.findFirst({ where: { name: value } }).then((techtype) => {
			if (!techtype) {
				throw new BaseException('There is no techtypes with this name', 500)
			} else {
				return true
			}
		})
	}
}
