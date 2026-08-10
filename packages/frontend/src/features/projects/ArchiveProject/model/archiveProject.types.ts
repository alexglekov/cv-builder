export interface ArchiveProjectState {
	isLoading: boolean
	isLoaded: boolean
	isFailed: boolean
	error: null | string
}

export enum ArchiveProjectActionsTokens {
	ARCHIVING_PROJECT_ACTION = 'ARCHIVING_PROJECT_ACTION',
	ARCHIVED_PROJECT_ACTION = 'ARCHIVED_PROJECT_ACTION',
	ERROR_IN_ARCHIVE_PROJECT_ACTION = 'ERROR_IN_ARCHIVE_PROJECT_ACTION',

	ASYNC_ARCHIVE_PROJECT_ACTION = 'ASYNC_ARCHIVE_PROJECT_ACTION'
}
