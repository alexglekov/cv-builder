export interface ICV {
	id: number
	title: string
	description: string
	key: string
	downloadUri: {
		uri: string
		key: string
	}
	created: string
	updated: string
}

export interface StorageState {
	data: Array<ICV>
	isLoading: boolean
	isLoaded: boolean
	isFailed: boolean
	error: null | string
}

export enum StorageActionsTokens {
	LOADING_STORAGE_INFO_ACTION = 'LOADING_STORAGE_INFO_ACTION',
	LOADED_STORAGE_INFO_ACTION = 'LOADED_STORAGE_INFO_ACTION',
	ERROR_IN_LOADING_STORAGE_INFO_ACTION = 'ERROR_IN_LOADING_STORAGE_INFO_ACTION',
	CHANGE_STORAGE_FILTERS_ACTION = 'CHANGE_STORAGE_FILTERS_ACTION',

	NEW_CV_CREATED_ACTION = 'NEW_CV_CREATED_ACTION',

	DELETED_CV_INFO_ACTION = 'DELETED_CV_INFO_ACTION',

	ASYNC_LOAD_STORAGE_INFO_ACTION = 'ASYNC_LOAD_STORAGE_INFO_ACTION'
}
