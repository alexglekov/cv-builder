import { createAction } from '@reduxjs/toolkit'

import { DeleteProjectActionsTokens } from '../deleteProject.types'

type DeletingProjectActionPayload = undefined

export const DeletingProjectAction = createAction<
	DeletingProjectActionPayload,
	DeleteProjectActionsTokens.DELETE_PROJECT_ACTION
>(DeleteProjectActionsTokens.DELETE_PROJECT_ACTION)
