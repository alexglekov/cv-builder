import { createAction } from '@reduxjs/toolkit'

import { ITechnologie, TechnologiesActionsTokens } from '../technologies.types'

type EditedTechnologieInfoActionPayload = {
	id: ITechnologie['id']
	data: ITechnologie
}

export const EditedTechnologieInfoAction = createAction<
	EditedTechnologieInfoActionPayload,
	TechnologiesActionsTokens.EDITED_TECHNOLOGIE_INFO_ACTION
>(TechnologiesActionsTokens.EDITED_TECHNOLOGIE_INFO_ACTION)
