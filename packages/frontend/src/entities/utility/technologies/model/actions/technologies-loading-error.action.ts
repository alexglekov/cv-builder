import { createAction } from '@reduxjs/toolkit'

import { TechnologiesActionsTokens } from '../technologies.types'

type ErrorInLoadingTechnologiesInfoActionPayload = {
	message: string
}

export const ErrorInLoadingTechnologiesInfoAction = createAction<
	ErrorInLoadingTechnologiesInfoActionPayload,
	TechnologiesActionsTokens.ERROR_IN_LOADING_TECHNOLOGIES_INFO_ACTION
>(TechnologiesActionsTokens.ERROR_IN_LOADING_TECHNOLOGIES_INFO_ACTION)
