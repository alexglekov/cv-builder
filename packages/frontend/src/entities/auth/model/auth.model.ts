import { createReducer } from '@reduxjs/toolkit'

import { LogoutAction, SetAccessTokenAction } from './actions'

import { AuthState } from './auth.types'

const initialState: AuthState = {
	data: null,
	error: null,
	isLoading: false,
	isFailed: false,
	isLoaded: false
}

export const authReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(SetAccessTokenAction, (state, { payload }) => {
			const { accessToken, role, userId } = payload

			return {
				data: { accessToken, isAuth: true, myUserId: userId, role, currentUserId: undefined },
				error: null,
				isLoading: false,
				isLoaded: true,
				isFailed: false
			}
		})

		.addCase(LogoutAction, () => {
			return {
				data: null,
				error: null,
				isLoading: false,
				isLoaded: true,
				isFailed: false
			}
		})
})
