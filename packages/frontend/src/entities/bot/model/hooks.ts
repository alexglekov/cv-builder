import { bindActionCreators } from 'redux'

import { useAppDispatch } from '../../../shared/libs'

import * as closeDialogWithBot from './actions/close-bot-dialog.action'
import * as openDialogWithBot from './actions/open-bot-dialog.action'
import * as addMessage from './actions/add-message.action'

export const useBotActions = () => {
	const dispatch = useAppDispatch()

	return bindActionCreators(
		{
			...closeDialogWithBot,
			...openDialogWithBot,
			...addMessage
		},
		dispatch
	)
}
