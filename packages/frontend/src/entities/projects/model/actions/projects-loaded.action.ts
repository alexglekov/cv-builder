import { createAction } from '@reduxjs/toolkit'

import { IProject, ProjectsActionsTokens } from '../projects.types'

interface ProjectsLoadedInfoActionPayload {
	data: Array<IProject>
}

export const ProjectsLoadedInfoAction = createAction<
	ProjectsLoadedInfoActionPayload,
	ProjectsActionsTokens.LOADED_PROJECTS_INFO_ACTION
>(ProjectsActionsTokens.LOADED_PROJECTS_INFO_ACTION)
