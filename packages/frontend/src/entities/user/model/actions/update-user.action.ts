import { createAction } from '@reduxjs/toolkit'

import { IUser, UserActionsTokens } from '../user.types'

interface UpdateUserInfoActionPayload {
	data: Partial<IUser>
}

export const UpdateUserInfoAction = createAction<UpdateUserInfoActionPayload, UserActionsTokens.UPDATE_USER_INFO_ACTION>(
	UserActionsTokens.UPDATE_USER_INFO_ACTION
)
