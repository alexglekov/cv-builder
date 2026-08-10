import { createAction } from '@reduxjs/toolkit'

import { GlobalActionsTokens } from '../types'

type EntitiesClearStateActionPayload =
	| {
			except: Array<'projects' | 'users' | 'skills' | 'storage'>
	  }
	| undefined

export const EntitiesClearStateAction = createAction<
	EntitiesClearStateActionPayload,
	GlobalActionsTokens.CLEAR_STATE_ENTITIES
>(GlobalActionsTokens.CLEAR_STATE_ENTITIES)
