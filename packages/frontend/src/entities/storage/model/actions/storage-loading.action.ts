import { createAction } from '@reduxjs/toolkit'

import { StorageActionsTokens } from '../storage.types'

type LoadingStorageInfoActionPayload = undefined

export const LoadingStorageInfoAction = createAction<
	LoadingStorageInfoActionPayload,
	StorageActionsTokens.LOADING_STORAGE_INFO_ACTION
>(StorageActionsTokens.LOADING_STORAGE_INFO_ACTION)
