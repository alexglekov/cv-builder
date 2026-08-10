import { IUser } from '../../../../entities/user'

export type InfoState = Pick<
	IUser,
	'biography' | 'education' | 'specialty' | 'name' | 'surname' | 'profileUri' | 'domains' | 'languages'
>

export type PageType = 'general' | 'domains' | 'languages'
