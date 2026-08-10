import { createAction } from '@reduxjs/toolkit'

import { DeleteProjectActionsTokens } from '../deleteProject.types'

type ErrorInDeleteProjectActionPayload = {
	message: string
}

export const ErrorInDeleteProjectAction = createAction<
	ErrorInDeleteProjectActionPayload,
	DeleteProjectActionsTokens.ERROR_IN_DELETE_PROJECT_ACTION
>(DeleteProjectActionsTokens.ERROR_IN_DELETE_PROJECT_ACTION)
