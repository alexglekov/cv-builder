import { createAction } from '@reduxjs/toolkit'

import { ColleaguesActionsTokens } from '../../colleagues.types'

type LoadColleaguesInfoActionPayload = undefined

export const loadColleaguesInfo = createAction<
	LoadColleaguesInfoActionPayload,
	ColleaguesActionsTokens.ASYNC_LOAD_COLLEAGUES_INFO_ACTION
>(ColleaguesActionsTokens.ASYNC_LOAD_COLLEAGUES_INFO_ACTION)
