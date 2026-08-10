import { BaseException } from '@cvb/exceptions'
import { PrismaService } from '@cvb/prisma'
import { Injectable } from '@nestjs/common'

import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'

@ValidatorConstraint({ name: 'language', async: true })
@Injectable()
export class InLangnameValidation implements ValidatorConstraintInterface {
	constructor(private readonly prisma: PrismaService) {}

	public async validate(value: string): Promise<boolean> {
		return this.prisma.langnames.findFirst({ where: { name: value } }).then((langname) => {
			if (!langname) {
				throw new BaseException('There is no language with this name', 500)
			} else {
				return true
			}
		})
	}
}
