import { createAction } from '@reduxjs/toolkit'

import { DeleteCvActionsTokens } from '../deleteCv.types'

type ErrorInDeleteCvActionPayload = {
	message: string
}

export const ErrorInDeleteCvAction = createAction<
	ErrorInDeleteCvActionPayload,
	DeleteCvActionsTokens.ERROR_IN_DELETE_CV_ACTION
>(DeleteCvActionsTokens.ERROR_IN_DELETE_CV_ACTION)
