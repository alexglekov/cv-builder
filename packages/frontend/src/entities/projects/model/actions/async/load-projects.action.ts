import { createAction } from '@reduxjs/toolkit'

import { ProjectsActionsTokens } from '../../projects.types'

type LoadProjectsInfoActionPayload = {
	userId: number
}

export const loadProjectsInfo = createAction<
	LoadProjectsInfoActionPayload,
	ProjectsActionsTokens.ASYNC_LOAD_PROJECTS_INFO_ACTION
>(ProjectsActionsTokens.ASYNC_LOAD_PROJECTS_INFO_ACTION)
