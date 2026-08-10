import { createAction } from '@reduxjs/toolkit'

import { LanguagesActionsTokens } from '../languages.types'

type ErrorInLoadingLanguagesInfoActionPayload = {
	message: string
}

export const ErrorInLoadingLanguagesInfoAction = createAction<
	ErrorInLoadingLanguagesInfoActionPayload,
	LanguagesActionsTokens.ERROR_IN_LOADING_LANGUAGES_INFO_ACTION
>(LanguagesActionsTokens.ERROR_IN_LOADING_LANGUAGES_INFO_ACTION)
