import { createAction } from '@reduxjs/toolkit'

import { AuthActionsTokens } from '../auth.types'

type LogoutActionPayload = undefined

export const LogoutAction = createAction<LogoutActionPayload, AuthActionsTokens.LOGOUT_ACTION>(
	AuthActionsTokens.LOGOUT_ACTION
)
