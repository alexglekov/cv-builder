import { createAction } from '@reduxjs/toolkit'

import { IProject, ProjectsActionsTokens } from '../projects.types'

type EditedProjectInfoActionPayload = {
	id: IProject['id']
	data: Partial<IProject>
}

export const EditedProjectInfoAction = createAction<
	EditedProjectInfoActionPayload,
	ProjectsActionsTokens.EDITED_PROJECT_INFO_ACTION
>(ProjectsActionsTokens.EDITED_PROJECT_INFO_ACTION)
