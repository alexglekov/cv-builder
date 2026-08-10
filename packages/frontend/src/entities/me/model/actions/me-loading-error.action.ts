import { createAction } from '@reduxjs/toolkit'

import { MeActionsTokens } from '../me.types'

type ErrorInLoadingMeInfoActionPayload = {
	message: string
}

export const ErrorInLoadingMeInfoAction = createAction<
	ErrorInLoadingMeInfoActionPayload,
	MeActionsTokens.ERROR_IN_LOADING_ME_INFO_ACTION
>(MeActionsTokens.ERROR_IN_LOADING_ME_INFO_ACTION)
