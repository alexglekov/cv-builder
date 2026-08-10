import { createAction } from '@reduxjs/toolkit'

import { LanguagesActionsTokens } from '../languages.types'

type LoadingLanguagesInfoActionPayload = undefined

export const LoadingLanguagesInfoAction = createAction<
	LoadingLanguagesInfoActionPayload,
	LanguagesActionsTokens.LOADING_LANGUAGES_INFO_ACTION
>(LanguagesActionsTokens.LOADING_LANGUAGES_INFO_ACTION)
