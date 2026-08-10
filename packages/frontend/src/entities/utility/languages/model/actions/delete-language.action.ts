import { createAction } from '@reduxjs/toolkit'

import { ILanguage, LanguagesActionsTokens } from '../languages.types'

type DeletedLanguageActionPayload = {
	id: ILanguage['id']
}

export const DeletedLanguageAction = createAction<
	DeletedLanguageActionPayload,
	LanguagesActionsTokens.DELETED_LANGUAGE_INFO_ACTION
>(LanguagesActionsTokens.DELETED_LANGUAGE_INFO_ACTION)
