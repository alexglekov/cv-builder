export interface IMe {
	name: string
	surname: string
	profileUri: string
}

export interface MeState {
	data: IMe | null
	isLoading: boolean
	isLoaded: boolean
	isFailed: boolean
	error: null | string
}

export enum MeActionsTokens {
	LOADING_ME_INFO_ACTION = 'LOADING_ME_INFO_ACTION',
	LOADED_ME_INFO_ACTION = 'LOADED_ME_INFO_ACTION',
	ERROR_IN_LOADING_ME_INFO_ACTION = 'ERROR_IN_LOADING_ME_INFO_ACTION',

	ASYNC_LOAD_ME_INFO_ACTION = 'ASYNC_LOAD_ME_INFO_ACTION'
}
