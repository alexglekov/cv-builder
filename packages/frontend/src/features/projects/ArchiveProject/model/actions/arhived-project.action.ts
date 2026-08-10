import { createAction } from '@reduxjs/toolkit'

import { ArchiveProjectActionsTokens } from '../archiveProject.types'

type ProjectArchivedComplitedActionPayload = undefined

export const ProjectArchivedComplitedAction = createAction<
	ProjectArchivedComplitedActionPayload,
	ArchiveProjectActionsTokens.ARCHIVED_PROJECT_ACTION
>(ArchiveProjectActionsTokens.ARCHIVED_PROJECT_ACTION)
