import { createAction } from '@reduxjs/toolkit'

import { LanguagesActionsTokens } from '../../languages.types'

type LoadLanguagesInfoActionPayload = undefined

export const loadLanguagesInfo = createAction<
	LoadLanguagesInfoActionPayload,
	LanguagesActionsTokens.ASYNC_LOAD_LANGUAGES_INFO_ACTION
>(LanguagesActionsTokens.ASYNC_LOAD_LANGUAGES_INFO_ACTION)
