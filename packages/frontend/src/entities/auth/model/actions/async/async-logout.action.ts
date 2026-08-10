import { createAction } from '@reduxjs/toolkit'

import { AuthActionsTokens } from '../../auth.types'

type AsyncLogoutActionPayload = undefined

export const AsyncLogoutAction = createAction<AsyncLogoutActionPayload, AuthActionsTokens.ASYNC_LOGOUT_ACTION>(
	AuthActionsTokens.ASYNC_LOGOUT_ACTION
)
