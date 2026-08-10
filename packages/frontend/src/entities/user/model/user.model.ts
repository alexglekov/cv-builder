import { createReducer } from '@reduxjs/toolkit'
import _ from 'lodash'

import { EntitiesClearStateAction } from '../../../shared/store'

import { UserLoadedInfoAction, ErrorInLoadingUserInfoAction, LoadingUserInfoAction, UpdateUserInfoAction } from './actions'

import { UserState } from './user.types'

const initialState: UserState = {
	data: null,
	isLoading: false,
	isLoaded: false,
	isFailed: false,
	error: null
}

export const userReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(LoadingUserInfoAction, () => {
			return {
				data: null,
				isLoading: true,
				isLoaded: false,
				isFailed: false,
				error: null
			}
		})

		.addCase(UserLoadedInfoAction, (state, action) => {
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

		.addCase(UpdateUserInfoAction, (state, action) => {
			const { payload } = action

			const { data } = payload

			return {
				data: _.assign({}, state.data, data),
				isLoading: false,
				isLoaded: true,
				isFailed: false,
				error: null
			}
		})

		.addCase(ErrorInLoadingUserInfoAction, (state, action) => {
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

		.addCase(EntitiesClearStateAction, () => {
			return { ...initialState }
		})
})
