import { createReducer, DeepPartial } from '@reduxjs/toolkit'
import _ from 'lodash'

import {
	TechnologiesLoadedInfoAction,
	ErrorInLoadingTechnologiesInfoAction,
	LoadingTechnologiesInfoAction,
	changeTechnologiesFiltersAction,
	NewTechnologieCreatedAction,
	NewTechnologieGroupCreatedAction,
	EditedTechnologieInfoAction,
	EditTechnologieGroupCreatedAction,
	DeletedTechnologieAction,
	DeletedTechtypeAction
	// DeletedTechnologieInfoAction,
	// NewTechnologieCreatedAction
} from './actions'

import { ITechnologieType, TechnologiesFilters, TechnologiesState } from './technologies.types'

const initialState: TechnologiesState = {
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

export const technologiesReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(LoadingTechnologiesInfoAction, (state) => {
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

		.addCase(TechnologiesLoadedInfoAction, (state, action) => {
			const { payload } = action

			const { data } = payload

			return {
				...state,
				data: applyTechnologiesFilters(state.filters, data),
				_data: data,
				filters: state.filters,
				isLoading: false,
				isLoaded: true,
				isFailed: false,
				error: null
			}
		})

		.addCase(changeTechnologiesFiltersAction, (state, action) => {
			const { payload } = action

			const filters = mergeTechnologiesFilters(state.filters, payload.filters)

			return {
				...state,
				data: applyTechnologiesFilters(filters, state._data),
				filters
			}
		})

		.addCase(ErrorInLoadingTechnologiesInfoAction, (state, action) => {
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

		.addCase(EditedTechnologieInfoAction, (state, action) => {
			const { payload } = action

			const { data } = payload

			const techTypeIndex = state._data.findIndex((tech) => tech.name == data.type)

			if (techTypeIndex !== -1) {
				const techtype = state._data[techTypeIndex]

				const _data: Array<ITechnologieType> = [
					...state._data.filter((techt) => techt.name != data.type),
					{
						...techtype,
						technologies: [...techtype.technologies.filter((tech) => tech.id !== data.id), { ...data }]
					}
				]

				return {
					...state,
					_data,
					data: applyTechnologiesFilters(state.filters, _data)
				}
			}

			return state
		})

		.addCase(EditTechnologieGroupCreatedAction, (state, action) => {
			const { payload } = action

			const { data } = payload

			const techTypeIndex = state._data.findIndex((tech) => tech.id == data.id)

			if (techTypeIndex !== -1) {
				const techtype = state._data[techTypeIndex]

				const _data: Array<ITechnologieType> = [
					...state._data.filter((techt) => techt.id != data.id),
					{ ...techtype, name: data.name }
				]

				return {
					...state,
					_data,
					data: applyTechnologiesFilters(state.filters, _data)
				}
			}

			return state
		})

		.addCase(DeletedTechnologieAction, (state, action) => {
			const { payload } = action

			const { id } = payload

			const techTypeIndex = state._data.findIndex((techt) => !!techt.technologies.find((tech) => tech.id === id))

			if (techTypeIndex !== -1) {
				const techtype = state._data[techTypeIndex]

				const _data: Array<ITechnologieType> = [
					...state._data.filter((techt, index) => index !== techTypeIndex),
					{
						...techtype,
						technologies: [...techtype.technologies.filter((tech) => tech.id !== id)]
					}
				]

				return {
					...state,
					_data,
					data: applyTechnologiesFilters(state.filters, _data)
				}
			}

			return state
		})

		.addCase(DeletedTechtypeAction, (state, action) => {
			const { payload } = action

			const { id } = payload

			const _data: Array<ITechnologieType> = [...state._data.filter((techt) => techt.id !== id)]

			return {
				...state,
				_data,
				data: applyTechnologiesFilters(state.filters, _data)
			}
		})

		// .addCase(DeletedTechnologieInfoAction, (state, action) => {
		// 	const { payload } = action

		// 	const { id } = payload

		// 	const _data = state._data.filter((proj) => proj.id != id)

		// 	return {
		// 		...state,
		// 		_data,
		// 		data: applyTechnologiesFilters(state.filters, _data)
		// 	}
		// })

		.addCase(NewTechnologieCreatedAction, (state, action) => {
			const { payload } = action

			const { data } = payload

			const techtypeIndex = state._data.findIndex((techt) => techt.name === data.techtype)

			if (techtypeIndex !== -1) {
				const _techtypes = state._data.filter((techt) => techt.name !== data.techtype)

				const techtype = state._data[techtypeIndex]
				const _data = [..._techtypes, { ...techtype, technologies: [...techtype.technologies, data.technologie] }]

				return {
					...state,
					_data: _data,
					data: applyTechnologiesFilters(state.filters, _data)
				}
			}

			return {
				...state
				// _data,
				// data: applyTechnologiesFilters(state.filters, _data)
			}
		})

		.addCase(NewTechnologieGroupCreatedAction, (state, action) => {
			const { payload } = action

			const { data } = payload

			const _data = [...state._data, { ...data, technologies: [] }]

			return {
				...state,
				_data,
				data: applyTechnologiesFilters(state.filters, _data)
			}
		})
})

function mergeTechnologiesFilters(
	prevFilters: TechnologiesFilters,
	nextFilters: DeepPartial<TechnologiesFilters>
): TechnologiesFilters {
	return {
		...prevFilters,
		...nextFilters
	}
}

function applyTechnologiesFilters(filters: any, data: Array<ITechnologieType>): Array<ITechnologieType> {
	const filtersPipes: { [key: string]: (filter: any, data: Array<ITechnologieType>) => Array<ITechnologieType> } = {
		title: (filter: string, data) => {
			return data
				.map((techsTypes) => ({
					...techsTypes,
					technologies: techsTypes.name.toLowerCase().includes(filter.toLowerCase())
						? techsTypes.technologies
						: techsTypes.technologies.filter((tech) => tech.name.toLowerCase().includes(filter.toLowerCase()))
				}))
				.filter(
					(techsTypes) => techsTypes.technologies.length > 0 || techsTypes.name.toLowerCase().includes(filter.toLowerCase())
				)
		}
	}

	return _.keys(filtersPipes)
		.reduce((prev, key) => filtersPipes[key](filters[key], prev), data)
		.sort((a, b) => a.name.localeCompare(b.name))
}
