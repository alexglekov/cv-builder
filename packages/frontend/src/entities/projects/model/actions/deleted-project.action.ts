import { createAction } from '@reduxjs/toolkit'

import { IProject, ProjectsActionsTokens } from '../projects.types'

type DeletedProjectInfoActionPayload = {
	id: IProject['id']
}

export const DeletedProjectInfoAction = createAction<
	DeletedProjectInfoActionPayload,
	ProjectsActionsTokens.DELETED_PROJECT_INFO_ACTION
>(ProjectsActionsTokens.DELETED_PROJECT_INFO_ACTION)
