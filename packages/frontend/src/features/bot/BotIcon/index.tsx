/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames'
import React from 'react'

import styles from './BotIcon.module.scss'
import { Icon } from '../../../shared/ui'
import { botSelectors, useBotActions } from '../../../entities/bot'
import { useAppSelector } from '../../../shared/libs'

interface BotIconFeatureProps {
	className: string
}

export const BotIconFeature: React.FC<BotIconFeatureProps> = (props) => {
	const { className } = props

	const isBotDialogOpened = useAppSelector(botSelectors.isBotDialogOpen)
	const { OpenDialogWithBotAction, CloseDialogWithBotAction } = useBotActions()

	return (
		<div
			className={classNames(className, styles.wrapper)}
			onClick={() => (isBotDialogOpened ? CloseDialogWithBotAction() : OpenDialogWithBotAction())}
		>
			<Icon type="header.botIcon" />
		</div>
	)
}
