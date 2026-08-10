import { createAction } from '@reduxjs/toolkit'

import { ProfessionalSkillsActionsTokens } from '../../professionalSkills.types'

type LoadAllCvInfoActionPayload = {
	userId: number
}

export const loadProfessionalSkills = createAction<
	LoadAllCvInfoActionPayload,
	ProfessionalSkillsActionsTokens.ASYNC_LOAD_PROFESSIONAL_SKILL_INFO_ACTION
>(ProfessionalSkillsActionsTokens.ASYNC_LOAD_PROFESSIONAL_SKILL_INFO_ACTION)
