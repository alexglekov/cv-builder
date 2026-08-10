import { createReducer } from '@reduxjs/toolkit'

import { EntitiesClearStateAction } from '../../../shared/store'

import {
	DeletedCvInfoAction,
	ErrorInLoadingStorageInfoAction,
	LoadingStorageInfoAction,
	NewCvCreatedAction,
	StorageLoadedInfoAction
} from './actions'

import { StorageState } from './storage.types'

const initialState: StorageState = {
	data: [],
	isLoading: false,
	isLoaded: false,
	isFailed: false,
	error: null
}

export const storageReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(LoadingStorageInfoAction, (state) => {
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

		.addCase(StorageLoadedInfoAction, (state, action) => {
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

		.addCase(ErrorInLoadingStorageInfoAction, (state, action) => {
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

		.addCase(DeletedCvInfoAction, (state, action) => {
			const { payload } = action

			const { key } = payload

			return {
				...state,
				data: state.data.filter((cv) => cv.key !== key)
			}
		})

		.addCase(NewCvCreatedAction, (state, action) => {
			const { payload } = action

			const { data } = payload

			const _data = [...state.data, data]

			return {
				...state,
				data: _data
			}
		})

		.addCase(EntitiesClearStateAction, (state, action) => {
			const { payload } = action

			if (payload) {
				const { except } = payload

				if (except.includes('storage')) {
					return state
				}
			}

			return initialState
		})
})
