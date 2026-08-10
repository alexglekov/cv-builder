import { createAction } from '@reduxjs/toolkit'

import { DeleteCvActionsTokens } from '../deleteCv.types'

type CvDeletedComplitedActionPayload = undefined

export const CvDeletedComplitedAction = createAction<
	CvDeletedComplitedActionPayload,
	DeleteCvActionsTokens.DELETED_CV_ACTION
>(DeleteCvActionsTokens.DELETED_CV_ACTION)
