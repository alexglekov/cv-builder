import { createAction } from '@reduxjs/toolkit'

import { BotActionsTokens, IMessage } from '../bot.types'

type AddMessageActionPayload = IMessage

export const AddMessageAction = createAction<AddMessageActionPayload, BotActionsTokens.ADD_MESSAGE_ACTION>(
	BotActionsTokens.ADD_MESSAGE_ACTION
)
