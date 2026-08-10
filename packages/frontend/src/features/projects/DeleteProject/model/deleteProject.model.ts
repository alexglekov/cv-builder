import { createReducer } from '@reduxjs/toolkit'
import { DeletingProjectAction, ErrorInDeleteProjectAction, ProjectDeletedComplitedAction } from './actions'

import { DeleteProjectState } from './deleteProject.types'

const initialState: DeleteProjectState = {
	isLoading: false,
	isLoaded: false,
	isFailed: false,
	error: null
}

export const deleteProjectReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(DeletingProjectAction, () => {
			return {
				isLoading: true,
				isLoaded: false,
				isFailed: false,
				error: null
			}
		})

		.addCase(ProjectDeletedComplitedAction, () => {
			return {
				isLoading: false,
				isLoaded: true,
				isFailed: false,
				error: null
			}
		})

		.addCase(ErrorInDeleteProjectAction, (state, action) => {
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
