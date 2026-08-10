import { createAction } from '@reduxjs/toolkit'

import { ColleaguesActionsTokens, IColleague } from '../colleagues.types'

interface ColleagueRemovedActionPayload {
	colleagueId: IColleague['id']
}

export const ColleagueRemovedAction = createAction<
	ColleagueRemovedActionPayload,
	ColleaguesActionsTokens.COLLEAGUE_REMOVED_ACTION
>(ColleaguesActionsTokens.COLLEAGUE_REMOVED_ACTION)
