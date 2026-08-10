import { createReducer, DeepPartial } from '@reduxjs/toolkit'
import _ from 'lodash'

import {
	LanguagesLoadedInfoAction,
	ErrorInLoadingLanguagesInfoAction,
	LoadingLanguagesInfoAction,
	changeLanguagesFiltersAction,
	NewLanguageCreatedAction,
	EditedLanguageInfoAction,
	DeletedLanguageAction
} from './actions'

import { ILanguage, LanguagesFilters, LanguagesState } from './languages.types'

const initialState: LanguagesState = {
	data: [],
	_data: [],
	filters: {
		title: ''
	},
	isLoading: false,
	isLoaded: false,
	isFailed: false,
	error: null
}

export const languagesReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(LoadingLanguagesInfoAction, (state) => {
			return {
				...state,
				data: [],
				_data: [],
				isLoading: true,
				isLoaded: false,
				isFailed: false,
				error: null
			}
		})

		.addCase(LanguagesLoadedInfoAction, (state, action) => {
			const { payload } = action

			const { data } = payload

			return {
				...state,
				data: applyLanguagesFilters(state.filters, data),
				_data: data,
				filters: state.filters,
				isLoading: false,
				isLoaded: true,
				isFailed: false,
				error: null
			}
		})

		.addCase(changeLanguagesFiltersAction, (state, action) => {
			const { payload } = action

			const filters = mergeLanguagesFilters(state.filters, payload.filters)

			return {
				...state,
				data: applyLanguagesFilters(filters, state._data),
				filters
			}
		})

		.addCase(ErrorInLoadingLanguagesInfoAction, (state, action) => {
			const {
				payload: { message }
			} = action

			return {
				...state,
				data: [],
				_data: [],
				isLoading: false,
				isLoaded: true,
				isFailed: true,
				error: message
			}
		})

		.addCase(EditedLanguageInfoAction, (state, action) => {
			const { payload } = action

			const { data, id } = payload

			const _data = [...state._data.filter((language) => language.id !== id), { ...data, id }]

			return {
				...state,
				_data: _data,
				data: applyLanguagesFilters(state.filters, _data)
			}
		})

		.addCase(DeletedLanguageAction, (state, action) => {
			const { payload } = action

			const { id } = payload

			const _data = state._data.filter((language) => language.id !== id)

			return {
				...state,
				_data: _data,
				data: applyLanguagesFilters(state.filters, _data)
			}
		})

		.addCase(NewLanguageCreatedAction, (state, action) => {
			const { payload } = action

			const { data } = payload

			const _data = [...state._data, data]

			return {
				...state,
				_data: _data,
				data: applyLanguagesFilters(state.filters, _data)
			}
		})
})

function mergeLanguagesFilters(prevFilters: LanguagesFilters, nextFilters: DeepPartial<LanguagesFilters>): LanguagesFilters {
	return {
		...prevFilters,
		...nextFilters
	}
}

function applyLanguagesFilters(filters: any, data: Array<ILanguage>): Array<ILanguage> {
	return data
}
