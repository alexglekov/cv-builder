import * as Yup from 'yup'
import { Assign, ObjectShape } from 'yup/lib/object'
import { AnyObject } from 'yup/lib/types'
import { InfoState } from './types'

export const addNewColleagueValidationSchema: Yup.ObjectSchema<
	Assign<ObjectShape, Record<keyof InfoState, any>>,
	AnyObject
> = Yup.object().shape({
	email: Yup.string()
		.matches(/^[\w-.]+@innowise-group.com/, { message: 'Почта введена не корректна' })
		.required('Введите почту сотрудника'),
	name: Yup.string().required('Введите имя сотрудника'),
	surname: Yup.string().required('Введите фамилию сотрудника')
})
