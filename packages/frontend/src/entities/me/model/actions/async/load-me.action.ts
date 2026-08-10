import { createAction } from '@reduxjs/toolkit'
import { MeActionsTokens } from '../../me.types'

type LoadMeInfoActionPayload = {
	userId: number
}

export const loadMeInfo = createAction<LoadMeInfoActionPayload, MeActionsTokens.ASYNC_LOAD_ME_INFO_ACTION>(
	MeActionsTokens.ASYNC_LOAD_ME_INFO_ACTION
)
