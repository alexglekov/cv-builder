import { createAction } from '@reduxjs/toolkit'

import { ColleaguesActionsTokens } from '../colleagues.types'

type ErrorInLoadingColleaguesInfoActionPayload = {
	message: string
}

export const ErrorInLoadingColleaguesInfoAction = createAction<
	ErrorInLoadingColleaguesInfoActionPayload,
	ColleaguesActionsTokens.ERROR_IN_LOADING_COLLEAGUES_INFO_ACTION
>(ColleaguesActionsTokens.ERROR_IN_LOADING_COLLEAGUES_INFO_ACTION)
