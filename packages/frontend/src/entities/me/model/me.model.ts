import { createReducer } from '@reduxjs/toolkit'
import _ from 'lodash'

import { EntitiesClearStateAction } from '../../../shared/store'

import { MeLoadedInfoAction, ErrorInLoadingMeInfoAction, LoadingMeInfoAction } from './actions'

import { MeState } from './me.types'

const initialState: MeState = {
	data: null,
	isLoading: false,
	isLoaded: false,
	isFailed: false,
	error: null
}

export const meReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(LoadingMeInfoAction, () => {
			return {
				data: null,
				isLoading: true,
				isLoaded: false,
				isFailed: false,
				error: null
			}
		})

		.addCase(MeLoadedInfoAction, (state, action) => {
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

		.addCase(ErrorInLoadingMeInfoAction, (state, action) => {
			const {
				payload: { message }
			} = action

			return {
				data: null,
				isLoading: false,
				isLoaded: true,
				isFailed: true,
				error: message
			}
		})
})
