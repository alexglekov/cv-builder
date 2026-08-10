import * as Yup from 'yup'
import { Assign, ObjectShape } from 'yup/lib/object'
import { AnyObject } from 'yup/lib/types'
import { InfoState } from './types'

export const addNewColleagueValidationSchema: Yup.ObjectSchema<
	Assign<ObjectShape, Record<keyof InfoState, any>>,
	AnyObject
> = Yup.object().shape({
	name: Yup.string().required('Название группы технологий введена некорректно...')
})
