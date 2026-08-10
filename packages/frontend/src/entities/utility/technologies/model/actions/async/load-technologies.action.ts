import { createAction } from '@reduxjs/toolkit'

import { TechnologiesActionsTokens } from '../../technologies.types'

type LoadTechnologiesInfoActionPayload = undefined

export const loadTechnologiesInfo = createAction<
	LoadTechnologiesInfoActionPayload,
	TechnologiesActionsTokens.ASYNC_LOAD_TECHNOLOGIES_INFO_ACTION
>(TechnologiesActionsTokens.ASYNC_LOAD_TECHNOLOGIES_INFO_ACTION)
