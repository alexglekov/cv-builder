import { createAction } from '@reduxjs/toolkit'

import { ArchiveProjectActionsTokens } from '../../archiveProject.types'

type ArhiveProjectActionPayload = {
	id: number
	actual: boolean
}

export const ArhiveProjectAction = createAction<
	ArhiveProjectActionPayload,
	ArchiveProjectActionsTokens.ASYNC_ARCHIVE_PROJECT_ACTION
>(ArchiveProjectActionsTokens.ASYNC_ARCHIVE_PROJECT_ACTION)
