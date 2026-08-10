import { createAction } from '@reduxjs/toolkit'

import { BotActionsTokens } from '../bot.types'

type CloseDialogWithBotActionPayload = void

export const CloseDialogWithBotAction = createAction<
	CloseDialogWithBotActionPayload,
	BotActionsTokens.CLOSE_DIALOG_WITH_BOT_ACTION
>(BotActionsTokens.CLOSE_DIALOG_WITH_BOT_ACTION)
