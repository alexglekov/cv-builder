export interface DeleteCvState {
	isLoading: boolean
	isLoaded: boolean
	isFailed: boolean
	error: null | string
}

export enum DeleteCvActionsTokens {
	DELETE_CV_ACTION = 'DELETE_CV_ACTION',
	DELETED_CV_ACTION = 'DELETED_CV_ACTION',
	ERROR_IN_DELETE_CV_ACTION = 'ERROR_IN_DELETE_CV_ACTION',

	ASYNC_DELETE_CV_ACTION = 'ASYNC_DELETE_CV_ACTION'
}
