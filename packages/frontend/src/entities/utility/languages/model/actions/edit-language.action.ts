import { createAction } from '@reduxjs/toolkit'

import { ILanguage, LanguagesActionsTokens } from '../languages.types'

type EditedLanguageInfoActionPayload = {
	id: ILanguage['id']
	data: ILanguage
}

export const EditedLanguageInfoAction = createAction<
	EditedLanguageInfoActionPayload,
	LanguagesActionsTokens.EDITED_LANGUAGE_INFO_ACTION
>(LanguagesActionsTokens.EDITED_LANGUAGE_INFO_ACTION)
