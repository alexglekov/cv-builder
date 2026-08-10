import { createReducer } from '@reduxjs/toolkit'
import { DeletingCvAction, ErrorInDeleteCvAction, CvDeletedComplitedAction } from './actions'

import { DeleteCvState } from './deleteCv.types'

const initialState: DeleteCvState = {
	isLoading: false,
	isLoaded: false,
	isFailed: false,
	error: null
}

export const deleteCvReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(DeletingCvAction, () => {
			return {
				isLoading: true,
				isLoaded: false,
				isFailed: false,
				error: null
			}
		})

		.addCase(CvDeletedComplitedAction, () => {
			return {
				isLoading: false,
				isLoaded: true,
				isFailed: false,
				error: null
			}
		})

		.addCase(ErrorInDeleteCvAction, (state, action) => {
			const {
				payload: { message }
			} = action

			return {
				isLoading: false,
				isLoaded: true,
				isFailed: true,
				error: message
			}
		})
})
