import { createReducer, DeepPartial } from '@reduxjs/toolkit'
import _ from 'lodash'
import { EntitiesClearStateAction } from '../../../shared/store'
import { getFormattedDate } from '../lib'

import {
	ProjectsLoadedInfoAction,
	ErrorInLoadingProjectsInfoAction,
	LoadingProjectsInfoAction,
	changeProjectsFiltersAction,
	EditedProjectInfoAction,
	DeletedProjectInfoAction,
	NewProjectCreatedAction
} from './actions'

import { IProject, ProjectsFilters, ProjectsState } from './projects.types'

const initialState: ProjectsState = {
	data: [],
	_data: [],
	filters: {
		isArchive: false,
		title: ''
	},
	isLoading: false,
	isLoaded: false,
	isFailed: false,
	error: null
}

export const projectsReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(LoadingProjectsInfoAction, (state) => {
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

		.addCase(ProjectsLoadedInfoAction, (state, action) => {
			const { payload } = action

			const { data } = payload

			return {
				...state,
				data: applyProjectsFilters(
					state.filters,
					data.map((project) => ({
						...project,
						start: getFormattedDate(new Date(project.start)),
						end: getFormattedDate(new Date(project.end))
					}))
				),
				_data: data,
				filters: state.filters,
				isLoading: false,
				isLoaded: true,
				isFailed: false,
				error: null
			}
		})

		.addCase(changeProjectsFiltersAction, (state, action) => {
			const { payload } = action

			const filters = mergeProjectsFilters(state.filters, payload.filters)

			return {
				...state,
				data: applyProjectsFilters(filters, state._data),
				filters
			}
		})

		.addCase(ErrorInLoadingProjectsInfoAction, (state, action) => {
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

		.addCase(EditedProjectInfoAction, (state, action) => {
			const { payload } = action

			const { data, id } = payload

			const projectIndex = state._data.findIndex((proj) => proj.id == id)

			if (projectIndex !== -1) {
				const project = state._data[projectIndex]

				const _data = [...state._data.filter((proj) => proj.id != project.id), { ...project, ...data }]

				return {
					...state,
					_data,
					data: applyProjectsFilters(state.filters, _data)
				}
			}

			return state
		})

		.addCase(DeletedProjectInfoAction, (state, action) => {
			const { payload } = action

			const { id } = payload

			const _data = state._data.filter((proj) => proj.id != id)

			return {
				...state,
				_data,
				data: applyProjectsFilters(state.filters, _data)
			}
		})

		.addCase(NewProjectCreatedAction, (state, action) => {
			const { payload } = action

			const { data } = payload

			const _data = [...state._data, data]

			return {
				...state,
				_data,
				data: applyProjectsFilters(state.filters, _data)
			}
		})

		.addCase(EntitiesClearStateAction, (state, action) => {
			const { payload } = action

			if (payload) {
				const { except } = payload

				if (except.includes('projects')) {
					return state
				}
			}

			return initialState
		})
})

function mergeProjectsFilters(prevFilters: ProjectsFilters, nextFilters: DeepPartial<ProjectsFilters>): ProjectsFilters {
	return {
		...prevFilters,
		...nextFilters
	}
}

function applyProjectsFilters(filters: any, data: Array<IProject>): Array<IProject> {
	const filtersPipes: { [key: string]: (filter: any, data: Array<IProject>) => Array<IProject> } = {
		isArchive: (filter: boolean, data) => {
			return data.filter((proj) => Boolean(proj.actual) !== filter)
		},
		title: (filter: string, data) => {
			return data.filter((proj) => proj.title.toLowerCase().includes(filter.toLowerCase()))
		}
	}

	return _.keys(filtersPipes).reduce((prev, key) => filtersPipes[key](filters[key], prev), data)
}
