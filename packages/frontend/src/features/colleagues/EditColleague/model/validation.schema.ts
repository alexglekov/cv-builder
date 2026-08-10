import * as Yup from 'yup'
import { Assign, ObjectShape } from 'yup/lib/object'
import { AnyObject } from 'yup/lib/types'
import { Roles } from '../../../../entities/auth'
import { InfoState } from './types'

export const editColleagueValidationSchema: Yup.ObjectSchema<
	Assign<ObjectShape, Record<keyof InfoState, any>>,
	AnyObject
> = Yup.object().shape({
	role: Yup.string().oneOf([Roles.ADMIN, Roles.MANAGER, Roles.USER]),
	name: Yup.string().notRequired(),
	profileUri: Yup.string().notRequired(),
	specialty: Yup.string().notRequired(),
	surname: Yup.string().notRequired()
})
