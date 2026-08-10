import { createAction } from '@reduxjs/toolkit'

import { VacanciesActionsTokens } from '../vacancies.types'

type ErrorInLoadingVacanciesInfoActionPayload = {
	message: string
}

export const ErrorInLoadingVacanciesInfoAction = createAction<
	ErrorInLoadingVacanciesInfoActionPayload,
	VacanciesActionsTokens.ERROR_IN_LOADING_VACANCIES_INFO_ACTION
>(VacanciesActionsTokens.ERROR_IN_LOADING_VACANCIES_INFO_ACTION)
