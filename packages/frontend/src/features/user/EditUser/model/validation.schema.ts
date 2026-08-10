import * as Yup from 'yup'

import { Assign, ObjectShape } from 'yup/lib/object'
import { AnyObject } from 'yup/lib/types'
import { InfoState } from './types'

export const editUserValidationSchema: Yup.ObjectSchema<
	Assign<ObjectShape, Record<keyof InfoState, any>>,
	AnyObject
> = Yup.object().shape({
	name: Yup.string().required('Поле обязательно для заполнения'),
	biography: Yup.string().required('Введите биографию'),
	specialty: Yup.string().required('Введите направление'),
	education: Yup.string().required('Введите образование'),
	languages: Yup.array().of(
		Yup.object().shape({
			languageId: Yup.number().required('Выберете иностранный язык'),
			rank: Yup.string().required('Выберете уровень владения языком')
		})
	),
	domains: Yup.array().of(Yup.string().notOneOf([''], 'Домен не может быть пустым')),
	profileUri: Yup.string(),
	surname: Yup.string()
})
