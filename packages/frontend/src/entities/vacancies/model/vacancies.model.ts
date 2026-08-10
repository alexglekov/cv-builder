import { createReducer } from '@reduxjs/toolkit'
import _ from 'lodash'

import { VacanciesLoadedInfoAction, ErrorInLoadingVacanciesInfoAction, LoadingVacanciesInfoAction } from './actions'

import { VacanciesState } from './vacancies.types'
import { VacancyDeletedAction } from './actions/vacancy-deleted.action'

const initialState: VacanciesState = {
	data: [],
	isLoading: false,
	isLoaded: false,
	isFailed: false,
	error: null
}

export const vacanciesReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(LoadingVacanciesInfoAction, () => {
			return {
				data: [],
				isLoading: true,
				isLoaded: false,
				isFailed: false,
				error: null
			}
		})

		.addCase(VacancyDeletedAction, (state, { payload }) => {
			const { id } = payload

			return {
				data: state.data.filter((item) => item.id !== id),
				isLoading: true,
				isLoaded: false,
				isFailed: false,
				error: null
			}
		})

		.addCase(VacanciesLoadedInfoAction, (state, action) => {
			const { payload } = action

			const { data } = payload

			return {
				data: data,
				isLoading: false,
				isLoaded: true,
				isFailed: false,
				error: null
			}
		})

		.addCase(ErrorInLoadingVacanciesInfoAction, (state, action) => {
			const {
				payload: { message }
			} = action

			return {
				data: [],
				isLoading: false,
				isLoaded: true,
				isFailed: true,
				error: message
			}
		})
})
