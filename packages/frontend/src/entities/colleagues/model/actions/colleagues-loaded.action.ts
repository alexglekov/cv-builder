import { createAction } from '@reduxjs/toolkit'

import { IColleague, ColleaguesActionsTokens } from '../colleagues.types'

interface ColleaguesLoadedInfoActionPayload {
	data: Array<IColleague>
}

export const ColleaguesLoadedInfoAction = createAction<
	ColleaguesLoadedInfoActionPayload,
	ColleaguesActionsTokens.LOADED_COLLEAGUES_INFO_ACTION
>(ColleaguesActionsTokens.LOADED_COLLEAGUES_INFO_ACTION)
