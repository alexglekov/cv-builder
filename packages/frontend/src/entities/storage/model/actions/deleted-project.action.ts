import { createAction } from '@reduxjs/toolkit'

import { ICV, StorageActionsTokens } from '../storage.types'

type DeletedCvInfoActionPayload = {
	key: ICV['key']
}

export const DeletedCvInfoAction = createAction<DeletedCvInfoActionPayload, StorageActionsTokens.DELETED_CV_INFO_ACTION>(
	StorageActionsTokens.DELETED_CV_INFO_ACTION
)
