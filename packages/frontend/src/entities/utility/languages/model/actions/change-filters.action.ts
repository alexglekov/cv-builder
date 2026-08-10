import { createAction, DeepPartial } from '@reduxjs/toolkit'

import { LanguagesActionsTokens, LanguagesFilters } from '../languages.types'

interface LanguagesChangeFiltersActionPayload {
	filters: DeepPartial<LanguagesFilters>
}

export const changeLanguagesFiltersAction = createAction<
	LanguagesChangeFiltersActionPayload,
	LanguagesActionsTokens.CHANGE_LANGUAGES_FILTERS_ACTION
>(LanguagesActionsTokens.CHANGE_LANGUAGES_FILTERS_ACTION)
