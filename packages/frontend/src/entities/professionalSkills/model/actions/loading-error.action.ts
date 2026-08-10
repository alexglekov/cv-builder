import { createAction } from '@reduxjs/toolkit'

import { ProfessionalSkillsActionsTokens } from '../professionalSkills.types'

type ErrorInLoadingProfessionalSkillsInfoActionPayload = {
	message: string
}

export const ErrorInLoadingProfessionalSkillsInfoAction = createAction<
	ErrorInLoadingProfessionalSkillsInfoActionPayload,
	ProfessionalSkillsActionsTokens.ERROR_IN_LOADING_PROFESSIONAL_SKILL_INFO_ACTION
>(ProfessionalSkillsActionsTokens.ERROR_IN_LOADING_PROFESSIONAL_SKILL_INFO_ACTION)
