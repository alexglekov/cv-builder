import React, { BaseSyntheticEvent } from 'react'
import { InfoState } from '../../model'

import styles from './DeleteTechnologiesGroupModal.module.scss'

interface GeneralInformationWidgetProps {
	state: InfoState
	setState: (state: InfoState) => void
	errors: Record<keyof InfoState, string | undefined> | null
}

export const GeneralInformationWidget: React.FC<GeneralInformationWidgetProps> = (props: GeneralInformationWidgetProps) => {
	const { setState, state, errors } = props

	return (
		<div className={styles.wrapper}>
			<div
				className={styles.content}
				onChange={(e: BaseSyntheticEvent) => {
					const newState: any = { ...state }
					newState[e.target.name] = e.target.value
					setState(newState)
				}}
			>
				Вы уверены, что хотите удалить?
			</div>
		</div>
	)
}
