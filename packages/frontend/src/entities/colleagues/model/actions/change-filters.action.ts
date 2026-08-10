import { createAction, DeepPartial } from '@reduxjs/toolkit'

import { ColleaguesActionsTokens, ColleaguesFilters } from '../colleagues.types'

interface ColleaguesChangeFiltersActionPayload {
	filters: DeepPartial<ColleaguesFilters>
}

export const changeColleaguesFiltersAction = createAction<
	ColleaguesChangeFiltersActionPayload,
	ColleaguesActionsTokens.CHANGE_COLLEAGUES_FILTERS_ACTION
>(ColleaguesActionsTokens.CHANGE_COLLEAGUES_FILTERS_ACTION)
