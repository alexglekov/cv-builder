import { createAction } from '@reduxjs/toolkit'

import { ArchiveProjectActionsTokens } from '../archiveProject.types'

type ArchivingProjectActionPayload = undefined

export const ArchivingProjectAction = createAction<
	ArchivingProjectActionPayload,
	ArchiveProjectActionsTokens.ARCHIVING_PROJECT_ACTION
>(ArchiveProjectActionsTokens.ARCHIVING_PROJECT_ACTION)
