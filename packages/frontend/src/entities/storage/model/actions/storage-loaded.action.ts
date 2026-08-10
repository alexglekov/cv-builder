import { createAction } from '@reduxjs/toolkit'

import { ICV, StorageActionsTokens } from '../storage.types'

interface StorageLoadedInfoActionPayload {
	data: Array<ICV>
}

export const StorageLoadedInfoAction = createAction<
	StorageLoadedInfoActionPayload,
	StorageActionsTokens.LOADED_STORAGE_INFO_ACTION
>(StorageActionsTokens.LOADED_STORAGE_INFO_ACTION)
