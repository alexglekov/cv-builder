import { createAction } from '@reduxjs/toolkit'

import { IProfessionalSkill, ProfessionalSkillsActionsTokens } from '../professionalSkills.types'

interface ProfessionalSkillsLoadedInfoActionPayload {
	data: Array<IProfessionalSkill>
}

export const ProfessionalSkillsLoadedInfoAction = createAction<
	ProfessionalSkillsLoadedInfoActionPayload,
	ProfessionalSkillsActionsTokens.LOADED_PROFESSIONAL_SKILL_INFO_ACTION
>(ProfessionalSkillsActionsTokens.LOADED_PROFESSIONAL_SKILL_INFO_ACTION)
