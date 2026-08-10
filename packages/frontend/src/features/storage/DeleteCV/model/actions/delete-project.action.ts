import { createAction } from '@reduxjs/toolkit'

import { DeleteCvActionsTokens } from '../deleteCv.types'

type DeletingCvActionPayload = undefined

export const DeletingCvAction = createAction<DeletingCvActionPayload, DeleteCvActionsTokens.DELETE_CV_ACTION>(
	DeleteCvActionsTokens.DELETE_CV_ACTION
)
