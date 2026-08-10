import { createAction, DeepPartial } from '@reduxjs/toolkit'

import { ColleaguesActionsTokens, IColleague } from '../colleagues.types'

interface ColleaguesChangeRoleActionPayload {
	data: DeepPartial<IColleague>
	colleagueId: IColleague['id']
}

export const ChangeColleaguesRoleAction = createAction<
	ColleaguesChangeRoleActionPayload,
	ColleaguesActionsTokens.CHANGE_COLLEAGUES_ROLE_ACTION
>(ColleaguesActionsTokens.CHANGE_COLLEAGUES_ROLE_ACTION)
