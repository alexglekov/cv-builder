import { createAction } from '@reduxjs/toolkit'

import { DeleteProjectActionsTokens } from '../deleteProject.types'

type ProjectDeletedComplitedActionPayload = undefined

export const ProjectDeletedComplitedAction = createAction<
	ProjectDeletedComplitedActionPayload,
	DeleteProjectActionsTokens.DELETED_PROJECT_ACTION
>(DeleteProjectActionsTokens.DELETED_PROJECT_ACTION)
