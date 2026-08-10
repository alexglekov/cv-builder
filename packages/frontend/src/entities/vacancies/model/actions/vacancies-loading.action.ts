import { createAction } from '@reduxjs/toolkit'

import { VacanciesActionsTokens } from '../vacancies.types'

type LoadingVacanciesInfoActionPayload = undefined

export const LoadingVacanciesInfoAction = createAction<
	LoadingVacanciesInfoActionPayload,
	VacanciesActionsTokens.LOADING_VACANCIES_INFO_ACTION
>(VacanciesActionsTokens.LOADING_VACANCIES_INFO_ACTION)
