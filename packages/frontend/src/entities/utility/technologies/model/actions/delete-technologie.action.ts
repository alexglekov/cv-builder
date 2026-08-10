import { createAction } from '@reduxjs/toolkit'

import { ITechnologie, TechnologiesActionsTokens } from '../technologies.types'

type DeletedTechnologieActionPayload = {
	id: ITechnologie['id']
}

export const DeletedTechnologieAction = createAction<
	DeletedTechnologieActionPayload,
	TechnologiesActionsTokens.DELETED_TECHNOLOGIE_INFO_ACTION
>(TechnologiesActionsTokens.DELETED_TECHNOLOGIE_INFO_ACTION)
