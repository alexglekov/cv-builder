import { createAction } from '@reduxjs/toolkit'

import { UserActionsTokens } from '../user.types'

type ErrorInLoadingUserInfoActionPayload = {
	message: string
}

export const ErrorInLoadingUserInfoAction = createAction<
	ErrorInLoadingUserInfoActionPayload,
	UserActionsTokens.ERROR_IN_LOADING_USER_INFO_ACTION
>(UserActionsTokens.ERROR_IN_LOADING_USER_INFO_ACTION)
