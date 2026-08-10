import { createAction } from '@reduxjs/toolkit'
import { VacanciesActionsTokens } from '../../vacancies.types'

type DeleteVacancyActionPayload = {
	vacancyId: string
}

export const deleteVacancy = createAction<DeleteVacancyActionPayload, VacanciesActionsTokens.ASYNC_DELETE_VACANCY_ACTION>(
	VacanciesActionsTokens.ASYNC_DELETE_VACANCY_ACTION
)
