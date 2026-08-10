import { createAction } from '@reduxjs/toolkit'

import { IProject, ProjectsActionsTokens } from '../projects.types'

interface NewProjectCreatedActionPayload {
	data: IProject
}

export const NewProjectCreatedAction = createAction<
	NewProjectCreatedActionPayload,
	ProjectsActionsTokens.NEW_PROJECT_CREATED_ACTION
>(ProjectsActionsTokens.NEW_PROJECT_CREATED_ACTION)
