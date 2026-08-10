import { createReducer } from '@reduxjs/toolkit'
import { EntitiesClearStateAction } from '../../../shared/store'

import {
	ErrorInLoadingProfessionalSkillsInfoAction,
	LoadingProfessionalSkillsInfoAction,
	ProfessionalSkillsLoadedInfoAction
} from './actions'

import { ProfessionalSkillsState } from './professionalSkills.types'

const initialState: ProfessionalSkillsState = {
	data: [],
	isLoading: false,
	isLoaded: false,
	isFailed: false,
	error: null
}

export const professionalSkillsReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(LoadingProfessionalSkillsInfoAction, (state) => {
			return {
				data: [],
				isLoading: true,
				isLoaded: false,
				isFailed: false,
				error: null
			}
		})

		.addCase(ProfessionalSkillsLoadedInfoAction, (state, action) => {
			const { payload } = action

			const { data } = payload

			return {
				data,
				isLoading: false,
				isLoaded: true,
				isFailed: false,
				error: null
			}
		})

		.addCase(ErrorInLoadingProfessionalSkillsInfoAction, (state, action) => {
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

		.addCase(EntitiesClearStateAction, () => {
			return initialState
		})
})
