import { createAction } from '@reduxjs/toolkit'

import { DeleteProjectActionsTokens } from '../../deleteProject.types'

type DeleteProjectActionPayload = {
	id: number
}

export const DeleteProjectAction = createAction<
	DeleteProjectActionPayload,
	DeleteProjectActionsTokens.ASYNC_DELETE_PROJECT_ACTION
>(DeleteProjectActionsTokens.ASYNC_DELETE_PROJECT_ACTION)
