export interface DeleteProjectState {
	isLoading: boolean
	isLoaded: boolean
	isFailed: boolean
	error: null | string
}

export enum DeleteProjectActionsTokens {
	DELETE_PROJECT_ACTION = 'DELETE_PROJECT_ACTION',
	DELETED_PROJECT_ACTION = 'DELETED_PROJECT_ACTION',
	ERROR_IN_DELETE_PROJECT_ACTION = 'ERROR_IN_DELETE_PROJECT_ACTION',

	ASYNC_DELETE_PROJECT_ACTION = 'ASYNC_DELETE_PROJECT_ACTION'
}
