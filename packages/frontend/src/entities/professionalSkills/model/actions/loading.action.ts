import { createAction } from '@reduxjs/toolkit'

import { ProfessionalSkillsActionsTokens } from '../professionalSkills.types'

type LoadingProfessionalSkillsInfoActionPayload = undefined

export const LoadingProfessionalSkillsInfoAction = createAction<
	LoadingProfessionalSkillsInfoActionPayload,
	ProfessionalSkillsActionsTokens.LOADING_PROFESSIONAL_SKILL_INFO_ACTION
>(ProfessionalSkillsActionsTokens.LOADING_PROFESSIONAL_SKILL_INFO_ACTION)
