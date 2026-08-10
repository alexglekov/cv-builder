import * as Yup from 'yup'
import { Assign, ObjectShape } from 'yup/lib/object'
import { AnyObject } from 'yup/lib/types'
import { InfoState } from './types'

export const generateCvValidationSchema: Yup.ObjectSchema<
	Assign<ObjectShape, Record<keyof InfoState, any>>,
	AnyObject
> = Yup.object().shape({
	description: Yup.string().required('Заполните описание проекта'),
	title: Yup.string().required('Введите название проекта')
})
