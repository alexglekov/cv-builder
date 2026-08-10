import { Validate } from 'class-validator'
import { Type } from 'class-transformer'
import { NotInTechnologyValidation } from '../validators'
import { NewTechnology } from './newTechnology.dto'

export class TechnologyAddDto {
	@Validate(NotInTechnologyValidation)
	@Type(() => NewTechnology)
	technology: NewTechnology
}
