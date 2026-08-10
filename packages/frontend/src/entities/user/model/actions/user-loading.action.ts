import { createAction } from '@reduxjs/toolkit'

import { UserActionsTokens } from '../user.types'

type LoadingUserInfoActionPayload = undefined

export const LoadingUserInfoAction = createAction<LoadingUserInfoActionPayload, UserActionsTokens.LOADING_USER_INFO_ACTION>(
	UserActionsTokens.LOADING_USER_INFO_ACTION
)
