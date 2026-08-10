import { createAction } from '@reduxjs/toolkit'

import { DeleteCvActionsTokens } from '../../deleteCv.types'

type DeleteCvActionPayload = {
	key: string
}

export const DeleteCvAction = createAction<DeleteCvActionPayload, DeleteCvActionsTokens.ASYNC_DELETE_CV_ACTION>(
	DeleteCvActionsTokens.ASYNC_DELETE_CV_ACTION
)
