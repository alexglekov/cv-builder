export interface IMessage {
	body: string
	date: Date
	isBot: boolean
}

export interface BotState {
	dialogOpened: boolean
	messages: IMessage[]
}

export enum BotActionsTokens {
	OPEN_DIALOG_WITH_BOT_ACTION = 'OPEN_DIALOG_WITH_BOT_ACTION',
	ADD_MESSAGE_ACTION = 'ADD_MESSAGE_ACTION',
	CLOSE_DIALOG_WITH_BOT_ACTION = 'CLOSE_DIALOG_WITH_BOT_ACTION'
}
