import { createAction } from '@reduxjs/toolkit'

import { ProjectsActionsTokens } from '../projects.types'

type LoadingProjectsInfoActionPayload = undefined

export const LoadingProjectsInfoAction = createAction<
	LoadingProjectsInfoActionPayload,
	ProjectsActionsTokens.LOADING_PROJECTS_INFO_ACTION
>(ProjectsActionsTokens.LOADING_PROJECTS_INFO_ACTION)
