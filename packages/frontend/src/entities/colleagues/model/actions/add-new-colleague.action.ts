import { createAction, DeepPartial } from '@reduxjs/toolkit'

import { ColleaguesActionsTokens, IColleague } from '../colleagues.types'

interface AddNewColleagueActionPayload {
	data: IColleague
}

export const AddNewColleagueAction = createAction<
	AddNewColleagueActionPayload,
	ColleaguesActionsTokens.ADD_NEW_COLLEAGUE_ACTION
>(ColleaguesActionsTokens.ADD_NEW_COLLEAGUE_ACTION)
