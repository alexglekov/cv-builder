import { createAction } from '@reduxjs/toolkit'
import { VacanciesActionsTokens } from '../../vacancies.types'

type LoadVacanciesInfoActionPayload = {
	userId: number
}

export const loadVacanciesInfo = createAction<
	LoadVacanciesInfoActionPayload,
	VacanciesActionsTokens.ASYNC_LOAD_VACANCIES_INFO_ACTION
>(VacanciesActionsTokens.ASYNC_LOAD_VACANCIES_INFO_ACTION)
