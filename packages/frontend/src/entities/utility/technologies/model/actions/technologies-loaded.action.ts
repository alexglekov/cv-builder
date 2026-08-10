import { createAction } from '@reduxjs/toolkit'

import { ITechnologieType, TechnologiesActionsTokens } from '../technologies.types'

interface TechnologiesLoadedInfoActionPayload {
	data: Array<ITechnologieType>
}

export const TechnologiesLoadedInfoAction = createAction<
	TechnologiesLoadedInfoActionPayload,
	TechnologiesActionsTokens.LOADED_TECHNOLOGIES_INFO_ACTION
>(TechnologiesActionsTokens.LOADED_TECHNOLOGIES_INFO_ACTION)
