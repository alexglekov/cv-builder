import { createAction } from '@reduxjs/toolkit'

import { ITechnologieType, TechnologiesActionsTokens } from '../technologies.types'

interface EditTechnologieGroupCreatedActionPayload {
	data: ITechnologieType
}

export const EditTechnologieGroupCreatedAction = createAction<
	EditTechnologieGroupCreatedActionPayload,
	TechnologiesActionsTokens.EDITED_TECHNOLOGIE_TYPE_INFO_ACTION
>(TechnologiesActionsTokens.EDITED_TECHNOLOGIE_TYPE_INFO_ACTION)
