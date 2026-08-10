import { createAction } from '@reduxjs/toolkit'

import { IMe, MeActionsTokens } from '../me.types'

interface MeLoadedInfoActionPayload {
	data: IMe
}

export const MeLoadedInfoAction = createAction<MeLoadedInfoActionPayload, MeActionsTokens.LOADED_ME_INFO_ACTION>(
	MeActionsTokens.LOADED_ME_INFO_ACTION
)
