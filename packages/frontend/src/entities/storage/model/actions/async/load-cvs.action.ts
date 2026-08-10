import { createAction } from '@reduxjs/toolkit'

import { StorageActionsTokens } from '../../storage.types'

type LoadAllCvInfoActionPayload = {
	userId: number
}

export const loadAllCvInfo = createAction<LoadAllCvInfoActionPayload, StorageActionsTokens.ASYNC_LOAD_STORAGE_INFO_ACTION>(
	StorageActionsTokens.ASYNC_LOAD_STORAGE_INFO_ACTION
)
