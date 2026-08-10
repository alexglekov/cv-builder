import { createAction } from '@reduxjs/toolkit'

import { IVacancy, VacanciesActionsTokens } from '../vacancies.types'

interface VacanciesLoadedInfoActionPayload {
	data: IVacancy[]
}

export const VacanciesLoadedInfoAction = createAction<
	VacanciesLoadedInfoActionPayload,
	VacanciesActionsTokens.LOADED_VACANCIES_INFO_ACTION
>(VacanciesActionsTokens.LOADED_VACANCIES_INFO_ACTION)
