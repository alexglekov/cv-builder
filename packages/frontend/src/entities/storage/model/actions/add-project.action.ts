import { createAction } from '@reduxjs/toolkit'

import { ICV, StorageActionsTokens } from '../storage.types'

interface NewCvCreatedActionPayload {
	data: ICV
}

export const NewCvCreatedAction = createAction<NewCvCreatedActionPayload, StorageActionsTokens.NEW_CV_CREATED_ACTION>(
	StorageActionsTokens.NEW_CV_CREATED_ACTION
)
