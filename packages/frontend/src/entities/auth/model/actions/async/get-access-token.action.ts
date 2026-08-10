import { createAction } from '@reduxjs/toolkit'

import { AuthActionsTokens } from '../../auth.types'

type AsyncGetAccessTokenActionPayload = undefined

export const AsyncGetAccessTokenAction = createAction<
	AsyncGetAccessTokenActionPayload,
	AuthActionsTokens.ASYNC_GET_ACCESS_TOKEN_ACTION
>(AuthActionsTokens.ASYNC_GET_ACCESS_TOKEN_ACTION)
