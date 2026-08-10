import { createAction, PrepareAction } from '@reduxjs/toolkit'
import jwt from 'jwt-decode'

import { AuthActionsTokens, Roles } from '../auth.types'

type JwtPayload = {
	role: Roles
	userId: number
}

interface SetAccessTokenActionPayload extends JwtPayload {
	accessToken: string
}

export const SetAccessTokenAction = createAction<
	PrepareAction<SetAccessTokenActionPayload>,
	AuthActionsTokens.SET_ACCESS_TOKEN_ACTION
>(AuthActionsTokens.SET_ACCESS_TOKEN_ACTION, ({ accessToken }: SetAccessTokenActionPayload) => {
	const payload = jwt<JwtPayload>(accessToken)

	return {
		payload: {
			accessToken,
			role: payload.role,
			userId: payload.userId
		}
	}
})
