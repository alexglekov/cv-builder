/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useRef, useState } from 'react'

import styles from './BotDailogWindow.module.scss'
import { useAppSelector } from '../../../shared/libs'
import { botSelectors, useBotActions } from '../../../entities/bot'
import { MessageWidget } from '../Message'
import { Icon } from '../../../shared/ui'
import { MicrophoneInputFeature } from '../../../features/bot'
import { API_WS } from '../../../shared/config'
import { authSelectors } from '../../../entities/auth'

type BotDailogWindowWidgetProps = unknown

export const BotDailogWindowWidget: React.FC<BotDailogWindowWidgetProps> = () => {
	const [messageBody, setMessageBody] = useState('')
	const userId = useAppSelector(authSelectors.userId)

	const messages = useAppSelector(botSelectors.messages)
	const { CloseDialogWithBotAction, AddMessageAction } = useBotActions()

	const websocketRef = useRef<WebSocket | null>(null)

	useEffect(() => {
		const connectAndListen = () => {
			if (!websocketRef.current || (websocketRef.current && websocketRef.current.readyState !== WebSocket.OPEN)) {
				websocketRef.current = new WebSocket(`${API_WS}/${userId}`)

				websocketRef.current.onmessage = async (event: MessageEvent<any>) => {
					await new Promise((r) => setTimeout(r, 1000))

					let message: string = event.data

					if (message.startsWith('#')) {
						message = message.replace('#', '')
						const [filesLine, question] = message.split('*')
						const filesNames = filesLine.split(' ')

						console.log(filesLine, filesNames)

						message =
							'Вот, что я нашел:\n' +
							filesNames
								.map(
									(filename, index) =>
										`${index + 1}: http://localhost:3001/search/?filename=${filename}&question=${encodeURI(question)} `
								)
								.join('\n')
					}

					AddMessageAction({
						body: message,
						date: new Date(),
						isBot: true
					})
				}

				websocketRef.current.onopen = () => {
					console.log('connection opened')
				}
			}
		}

		const timeoutId = setInterval(connectAndListen, 500)

		return () => {
			clearInterval(timeoutId)
		}
	}, [])

	const onSendMessage = async (message: string) => {
		if (websocketRef.current && websocketRef.current.readyState === websocketRef.current.OPEN) {
			await websocketRef.current.send(message)
		}
		AddMessageAction({
			body: message,
			date: new Date(),
			isBot: false
		})
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.closeBotIcon} onClick={() => CloseDialogWithBotAction()}>
				<Icon type="edit-profile.close" />
			</div>
			<div className={styles.messages}>
				{messages.map((message, index) => (
					<MessageWidget {...message} key={index} />
				))}
			</div>
			<div className={styles.messageBox}>
				<div className={styles.messageInput}>
					<input value={messageBody} onChange={(e) => setMessageBody(e.target.value)} placeholder="Сообщение" />
					<MicrophoneInputFeature onChange={setMessageBody} />
				</div>
				<div className={styles.sendMessageIcon} onClick={() => onSendMessage(messageBody)}>
					<Icon type="botDialog.sendMessage" />
				</div>
			</div>
		</div>
	)
}
