import { Roles } from '../../auth'

export enum WhosEnum {
	ADMIN = 'ADMIN',
	BUILDERS = 'BUILDERS',
	ALL = 'ALL'
}

export interface ColleaguesFilters {
	whos: WhosEnum
}

export interface IColleague {
	id: number
	name: string
	surname: string
	profileUri: string
	specialty: string
	role: Roles
}

export interface ColleaguesState {
	data: Array<IColleague>
	_data: Array<IColleague>
	filters: ColleaguesFilters
	isLoading: boolean
	isLoaded: boolean
	isFailed: boolean
	error: null | string
}

export enum ColleaguesActionsTokens {
	LOADING_COLLEAGUES_INFO_ACTION = 'LOADING_COLLEAGUES_INFO_ACTION',
	LOADED_COLLEAGUES_INFO_ACTION = 'LOADED_COLLEAGUES_INFO_ACTION',
	ERROR_IN_LOADING_COLLEAGUES_INFO_ACTION = 'ERROR_IN_LOADING_COLLEAGUES_INFO_ACTION',

	CHANGE_COLLEAGUES_FILTERS_ACTION = 'CHANGE_COLLEAGUES_FILTERS_ACTION',
	CHANGE_COLLEAGUES_ROLE_ACTION = 'CHANGE_COLLEAGUES_ROLE_ACTION',

	ADD_NEW_COLLEAGUE_ACTION = 'ADD_NEW_COLLEAGUE_ACTION',

	COLLEAGUE_REMOVED_ACTION = 'COLLEAGUE_REMOVED_ACTION',

	ASYNC_LOAD_COLLEAGUES_INFO_ACTION = 'ASYNC_LOAD_COLLEAGUES_INFO_ACTION'
}
