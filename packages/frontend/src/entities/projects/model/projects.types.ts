export interface ProjectsFilters {
	isArchive: boolean
	title: string
}

export interface IProject {
	id: number
	title: string
	description: string
	position: string
	start: string // Date
	end: string // Date
	respAndAchs: Array<string>
	technologies: Array<number>
	actual: boolean
}

export interface ProjectsState {
	data: Array<IProject>
	_data: Array<IProject>
	filters: ProjectsFilters
	isLoading: boolean
	isLoaded: boolean
	isFailed: boolean
	error: null | string
}

export enum ProjectsActionsTokens {
	LOADING_PROJECTS_INFO_ACTION = 'LOADING_PROJECTS_INFO_ACTION',
	LOADED_PROJECTS_INFO_ACTION = 'LOADED_PROJECTS_INFO_ACTION',
	ERROR_IN_LOADING_PROJECTS_INFO_ACTION = 'ERROR_IN_LOADING_PROJECTS_INFO_ACTION',
	CHANGE_PROJECTS_FILTERS_ACTION = 'CHANGE_PROJECTS_FILTERS_ACTION',

	NEW_PROJECT_CREATED_ACTION = 'NEW_PROJECT_CREATED_ACTION',

	EDITED_PROJECT_INFO_ACTION = 'EDITED_PROJECT_INFO_ACTION',
	DELETED_PROJECT_INFO_ACTION = 'DELETED_PROJECT_INFO_ACTION',

	ASYNC_LOAD_PROJECTS_INFO_ACTION = 'ASYNC_LOAD_PROJECTS_INFO_ACTION'
}
