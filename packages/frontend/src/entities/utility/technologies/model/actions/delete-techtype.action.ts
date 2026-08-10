import { createAction } from '@reduxjs/toolkit'

import { ITechnologieType, TechnologiesActionsTokens } from '../technologies.types'

type DeletedTechtypeActionPayload = {
	id: ITechnologieType['id']
}

export const DeletedTechtypeAction = createAction<
	DeletedTechtypeActionPayload,
	TechnologiesActionsTokens.DELETED_TECHTYPE_INFO_ACTION
>(TechnologiesActionsTokens.DELETED_TECHTYPE_INFO_ACTION)
