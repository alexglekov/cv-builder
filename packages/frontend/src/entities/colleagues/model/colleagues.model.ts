import { createReducer, DeepPartial } from '@reduxjs/toolkit'
import _ from 'lodash'
import { Roles } from '../../auth'

import {
	ColleaguesLoadedInfoAction,
	ErrorInLoadingColleaguesInfoAction,
	LoadingColleaguesInfoAction,
	changeColleaguesFiltersAction,
	ChangeColleaguesRoleAction,
	AddNewColleagueAction,
	ColleagueRemovedAction
} from './actions'

import { ColleaguesFilters, ColleaguesState, IColleague, WhosEnum } from './colleagues.types'

const initialState: ColleaguesState = {
	data: [],
	_data: [],
	filters: {
		whos: WhosEnum.ALL
	},
	isLoading: false,
	isLoaded: false,
	isFailed: false,
	error: null
}

export const colleaguesReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(LoadingColleaguesInfoAction, (state) => {
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

		.addCase(ColleaguesLoadedInfoAction, (state, action) => {
			const { payload } = action

			const { data } = payload

			return {
				...state,
				data: applyColleaguesFilters(state.filters, data),
				_data: data,
				filters: state.filters,
				isLoading: false,
				isLoaded: true,
				isFailed: false,
				error: null
			}
		})

		.addCase(changeColleaguesFiltersAction, (state, action) => {
			const { payload } = action

			const filters = mergeColleaguesFilters(state.filters, payload.filters)

			return {
				...state,
				data: applyColleaguesFilters(filters, state._data),
				filters
			}
		})

		.addCase(ErrorInLoadingColleaguesInfoAction, (state, action) => {
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

		.addCase(ChangeColleaguesRoleAction, (state, action) => {
			const { payload } = action

			const { colleagueId, data } = payload

			const colleague = state._data.find((colleg) => colleg.id === colleagueId)

			if (colleague) {
				const _data: Array<IColleague> = [
					...state._data.filter((colleg) => colleg.id !== colleagueId),
					{ ...colleague, ...data }
				]

				return {
					...state,
					data: applyColleaguesFilters(state.filters, _data),
					_data: _data,
					filters: state.filters,
					isLoading: false,
					isLoaded: true,
					isFailed: false,
					error: null
				}
			}

			return state
		})

		.addCase(AddNewColleagueAction, (state, action) => {
			const { payload } = action

			const { data } = payload

			const _data = [...state._data, data]

			return {
				...state,
				data: applyColleaguesFilters(state.filters, _data),
				_data: _data,
				filters: state.filters,
				isLoading: false,
				isLoaded: true,
				isFailed: false,
				error: null
			}
		})

		.addCase(ColleagueRemovedAction, (state, action) => {
			const { payload } = action

			const { colleagueId } = payload

			const _data = state._data.filter((colleague) => colleague.id !== colleagueId)

			return {
				...state,
				data: applyColleaguesFilters(state.filters, _data),
				_data: _data,
				filters: state.filters,
				isLoading: false,
				isLoaded: true,
				isFailed: false,
				error: null
			}
		})
})

function mergeColleaguesFilters(
	prevFilters: ColleaguesFilters,
	nextFilters: DeepPartial<ColleaguesFilters>
): ColleaguesFilters {
	return {
		...prevFilters,
		...nextFilters
	}
}

function applyColleaguesFilters(filters: any, data: Array<IColleague>): Array<IColleague> {
	const filtersPipes: { [key: string]: (filter: any, data: Array<IColleague>) => Array<IColleague> } = {
		whos: (filter: WhosEnum, previous: Array<IColleague>) => {
			if (filter === WhosEnum.ADMIN) {
				return previous.filter((colleague) => colleague.role === Roles.ADMIN)
			}
			if (filter === WhosEnum.BUILDERS) {
				return previous.filter((colleague) => colleague.role === Roles.MANAGER)
			}
			return previous
		}
	}

	return _.keys(filtersPipes).reduce((prev, key) => filtersPipes[key](filters[key], prev), data)
}
