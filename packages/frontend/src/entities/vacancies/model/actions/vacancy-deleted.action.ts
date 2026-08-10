import { createAction } from '@reduxjs/toolkit'

import { VacanciesActionsTokens } from '../vacancies.types'

interface VacancyDeletedActionPayload {
	id: string
}

export const VacancyDeletedAction = createAction<VacancyDeletedActionPayload, VacanciesActionsTokens.VACANCY_DELETED_ACTION>(
	VacanciesActionsTokens.VACANCY_DELETED_ACTION
)
