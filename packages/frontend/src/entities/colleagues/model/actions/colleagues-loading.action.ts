import { createAction } from '@reduxjs/toolkit'

import { ColleaguesActionsTokens } from '../colleagues.types'

type LoadingColleaguesInfoActionPayload = undefined

export const LoadingColleaguesInfoAction = createAction<
	LoadingColleaguesInfoActionPayload,
	ColleaguesActionsTokens.LOADING_COLLEAGUES_INFO_ACTION
>(ColleaguesActionsTokens.LOADING_COLLEAGUES_INFO_ACTION)
