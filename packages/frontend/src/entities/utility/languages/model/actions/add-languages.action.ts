import { createAction } from '@reduxjs/toolkit'

import { ILanguage, LanguagesActionsTokens } from '../languages.types'

interface NewLanguageCreatedActionPayload {
	data: ILanguage
}

export const NewLanguageCreatedAction = createAction<
	NewLanguageCreatedActionPayload,
	LanguagesActionsTokens.NEW_LANGUAGE_CREATED_ACTION
>(LanguagesActionsTokens.NEW_LANGUAGE_CREATED_ACTION)
