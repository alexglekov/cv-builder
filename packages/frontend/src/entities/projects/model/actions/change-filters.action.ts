import { createAction, DeepPartial } from '@reduxjs/toolkit'

import { ProjectsActionsTokens, ProjectsFilters } from '../projects.types'

interface ProjectsChangeFiltersActionPayload {
	filters: DeepPartial<ProjectsFilters>
}

export const changeProjectsFiltersAction = createAction<
	ProjectsChangeFiltersActionPayload,
	ProjectsActionsTokens.CHANGE_PROJECTS_FILTERS_ACTION
>(ProjectsActionsTokens.CHANGE_PROJECTS_FILTERS_ACTION)
