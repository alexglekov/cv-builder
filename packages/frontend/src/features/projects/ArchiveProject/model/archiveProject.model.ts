import { createReducer } from '@reduxjs/toolkit'
import { ArchivingProjectAction, ErrorInArchiveProjectAction, ProjectArchivedComplitedAction } from './actions'

import { ArchiveProjectState } from './archiveProject.types'

const initialState: ArchiveProjectState = {
	isLoading: false,
	isLoaded: false,
	isFailed: false,
	error: null
}

export const archiveProjectReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(ArchivingProjectAction, () => {
			return {
				isLoading: true,
				isLoaded: false,
				isFailed: false,
				error: null
			}
		})

		.addCase(ProjectArchivedComplitedAction, () => {
			return {
				isLoading: false,
				isLoaded: true,
				isFailed: false,
				error: null
			}
		})

		.addCase(ErrorInArchiveProjectAction, (state, action) => {
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
