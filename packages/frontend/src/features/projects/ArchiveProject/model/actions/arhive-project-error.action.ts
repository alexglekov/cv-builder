import { createAction } from '@reduxjs/toolkit'

import { ArchiveProjectActionsTokens } from '../archiveProject.types'

type ErrorInArchiveProjectActionPayload = {
	message: string
}

export const ErrorInArchiveProjectAction = createAction<
	ErrorInArchiveProjectActionPayload,
	ArchiveProjectActionsTokens.ERROR_IN_ARCHIVE_PROJECT_ACTION
>(ArchiveProjectActionsTokens.ERROR_IN_ARCHIVE_PROJECT_ACTION)
