import React from 'react'

import styles from './Message.module.scss'
import { IMessage } from '../../../entities/bot'
import classNames from 'classnames'
import { isDate } from 'lodash'
import { Icon } from '../../../shared/ui'

type MessageWidgetProps = IMessage

export const MessageWidget: React.FC<MessageWidgetProps> = (props) => {
	return (
		<div className={classNames(styles.wrapper, props.isBot ? styles.isBotWrapper : '')}>
			{props.isBot && (
				<div className={styles.botIcon}>
					<Icon type="header.botIcon" />
				</div>
			)}
			<div className={classNames(styles.messageWrapper, props.isBot ? styles.isBotMessageWrapper : '')}>
				<div className={styles.messageBody}>{props.body}</div>
				<div className={styles.messageDate}>{(isDate(props.date) ? props.date : new Date()).toISOString().slice(14, 19)}</div>
			</div>
		</div>
	)
}
