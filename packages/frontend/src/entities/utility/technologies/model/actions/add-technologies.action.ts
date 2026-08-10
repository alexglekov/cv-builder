import { createAction } from '@reduxjs/toolkit'

import { ITechnologie, TechnologiesActionsTokens } from '../technologies.types'

interface NewTechnologieCreatedActionPayload {
	data: {
		techtype: string
		technologie: ITechnologie
	}
}

export const NewTechnologieCreatedAction = createAction<
	NewTechnologieCreatedActionPayload,
	TechnologiesActionsTokens.NEW_TECHNOLOGIE_CREATED_ACTION
>(TechnologiesActionsTokens.NEW_TECHNOLOGIE_CREATED_ACTION)
