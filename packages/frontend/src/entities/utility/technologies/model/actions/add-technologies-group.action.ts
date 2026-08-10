import { createAction } from '@reduxjs/toolkit'

import { ITechnologieType, TechnologiesActionsTokens } from '../technologies.types'

interface NewTechnologieGroupCreatedActionPayload {
	data: ITechnologieType
}

export const NewTechnologieGroupCreatedAction = createAction<
	NewTechnologieGroupCreatedActionPayload,
	TechnologiesActionsTokens.NEW_TECHNOLOGIE_GROUP_CREATED_ACTION
>(TechnologiesActionsTokens.NEW_TECHNOLOGIE_GROUP_CREATED_ACTION)
