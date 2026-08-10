import { createAction } from '@reduxjs/toolkit'

import { LanguagesActionsTokens, ILanguage } from '../languages.types'

interface LanguagesLoadedInfoActionPayload {
	data: Array<ILanguage>
}

export const LanguagesLoadedInfoAction = createAction<
	LanguagesLoadedInfoActionPayload,
	LanguagesActionsTokens.LOADED_LANGUAGES_INFO_ACTION
>(LanguagesActionsTokens.LOADED_LANGUAGES_INFO_ACTION)
