import { createReducer } from '@reduxjs/toolkit'
import _ from 'lodash'

import { BotState } from './bot.types'
import { AddMessageAction, CloseDialogWithBotAction, OpenDialogWithBotAction } from './actions'

const initialState: BotState = {
	dialogOpened: false,
	messages: []
}

export const botReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(OpenDialogWithBotAction, (state) => {
			return {
				...state,
				dialogOpened: true
			}
		})

		.addCase(AddMessageAction, (state, { payload }) => {
			const newMessages = [...state.messages, payload]

			return {
				...state,
				messages: newMessages,
				dialogOpened: true
			}
		})

		.addCase(CloseDialogWithBotAction, (state) => {
			return {
				...state,
				dialogOpened: false
			}
		})
})
