import { LANGRANK } from '../../../shared/enums'

export interface Tehnology {
	name: string
	type: string
}

export interface Languages {
	id: number
	languageId: number
	rank: LANGRANK
}

export interface IUser {
	id: number
	name: string
	surname: string
	profileUri: string
	email: string
	languages: Array<Languages>
	specialty: string
	education: string
	expInYears: number
	biography: string
	domains: Array<string>
	technologies: Array<Tehnology>
}

export interface UserState {
	data: IUser | null
	isLoading: boolean
	isLoaded: boolean
	isFailed: boolean
	error: null | string
}

export enum UserActionsTokens {
	LOADING_USER_INFO_ACTION = 'LOADING_USER_INFO_ACTION',
	LOADED_USER_INFO_ACTION = 'LOADED_USER_INFO_ACTION',
	ERROR_IN_LOADING_USER_INFO_ACTION = 'ERROR_IN_LOADING_USER_INFO_ACTION',
	UPDATE_USER_INFO_ACTION = 'UPDATE_USER_INFO_ACTION',

	ASYNC_LOAD_USER_INFO_ACTION = 'ASYNC_LOAD_USER_INFO_ACTION'
}
