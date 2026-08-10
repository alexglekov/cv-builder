import { createAction } from '@reduxjs/toolkit'

import { IUser, UserActionsTokens } from '../user.types'

interface UserLoadedInfoActionPayload {
	data: IUser
}

export const UserLoadedInfoAction = createAction<UserLoadedInfoActionPayload, UserActionsTokens.LOADED_USER_INFO_ACTION>(
	UserActionsTokens.LOADED_USER_INFO_ACTION
)
