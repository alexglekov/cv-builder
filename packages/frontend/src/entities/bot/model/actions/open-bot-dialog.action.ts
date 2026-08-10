import { createAction } from '@reduxjs/toolkit'

import { BotActionsTokens } from '../bot.types'

type OpenDialogWithBotActionPayload = void

export const OpenDialogWithBotAction = createAction<
	OpenDialogWithBotActionPayload,
	BotActionsTokens.OPEN_DIALOG_WITH_BOT_ACTION
>(BotActionsTokens.OPEN_DIALOG_WITH_BOT_ACTION)
