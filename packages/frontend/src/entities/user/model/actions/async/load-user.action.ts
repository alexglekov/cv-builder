import { createAction } from '@reduxjs/toolkit'
import { UserActionsTokens } from '../../user.types'

type LoadUserInfoActionPayload = {
	userId: number
}

export const loadUserInfo = createAction<LoadUserInfoActionPayload, UserActionsTokens.ASYNC_LOAD_USER_INFO_ACTION>(
	UserActionsTokens.ASYNC_LOAD_USER_INFO_ACTION
)
