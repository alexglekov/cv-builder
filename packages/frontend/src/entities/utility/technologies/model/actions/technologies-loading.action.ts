import { createAction } from '@reduxjs/toolkit'

import { TechnologiesActionsTokens } from '../technologies.types'

type LoadingTechnologiesInfoActionPayload = undefined

export const LoadingTechnologiesInfoAction = createAction<
	LoadingTechnologiesInfoActionPayload,
	TechnologiesActionsTokens.LOADING_TECHNOLOGIES_INFO_ACTION
>(TechnologiesActionsTokens.LOADING_TECHNOLOGIES_INFO_ACTION)
