import { createAction, DeepPartial } from '@reduxjs/toolkit'

import { TechnologiesActionsTokens, TechnologiesFilters } from '../technologies.types'

interface TechnologiesChangeFiltersActionPayload {
	filters: DeepPartial<TechnologiesFilters>
}

export const changeTechnologiesFiltersAction = createAction<
	TechnologiesChangeFiltersActionPayload,
	TechnologiesActionsTokens.CHANGE_TECHNOLOGIES_FILTERS_ACTION
>(TechnologiesActionsTokens.CHANGE_TECHNOLOGIES_FILTERS_ACTION)
