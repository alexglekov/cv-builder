import { createAction } from '@reduxjs/toolkit'

import { ProjectsActionsTokens } from '../projects.types'

type ErrorInLoadingProjectsInfoActionPayload = {
	message: string
}

export const ErrorInLoadingProjectsInfoAction = createAction<
	ErrorInLoadingProjectsInfoActionPayload,
	ProjectsActionsTokens.ERROR_IN_LOADING_PROJECTS_INFO_ACTION
>(ProjectsActionsTokens.ERROR_IN_LOADING_PROJECTS_INFO_ACTION)
