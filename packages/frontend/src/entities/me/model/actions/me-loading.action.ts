import { createAction } from '@reduxjs/toolkit'

import { MeActionsTokens } from '../me.types'

type LoadingMeInfoActionPayload = undefined

export const LoadingMeInfoAction = createAction<LoadingMeInfoActionPayload, MeActionsTokens.LOADING_ME_INFO_ACTION>(
	MeActionsTokens.LOADING_ME_INFO_ACTION
)
