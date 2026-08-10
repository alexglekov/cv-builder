import { createAction } from '@reduxjs/toolkit'

import { StorageActionsTokens } from '../storage.types'

type ErrorInLoadingStorageInfoActionPayload = {
	message: string
}

export const ErrorInLoadingStorageInfoAction = createAction<
	ErrorInLoadingStorageInfoActionPayload,
	StorageActionsTokens.ERROR_IN_LOADING_STORAGE_INFO_ACTION
>(StorageActionsTokens.ERROR_IN_LOADING_STORAGE_INFO_ACTION)
