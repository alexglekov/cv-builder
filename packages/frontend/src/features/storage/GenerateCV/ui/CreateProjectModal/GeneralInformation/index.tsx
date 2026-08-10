import React, { BaseSyntheticEvent } from 'react'

import { ICV } from '../../../../../../entities/storage'

import styles from './GeneralInformation.module.scss'

type TypeState = Pick<ICV, 'description' | 'title'>

interface GeneralInformationWidgetProps {
	state: TypeState
	setState: (state: TypeState) => void
	errors: Record<keyof TypeState, string | undefined> | null
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
				<fieldset className={errors?.title && styles.errorFieldSet}>
					<legend>Название проекта</legend>
					<input value={state.title} name="title" />
				</fieldset>
				<fieldset className={errors?.description && styles.errorFieldSet}>
					<legend>Описание</legend>
					<textarea value={state.description} name="description" />
				</fieldset>
				{errors && <div className={styles.errorMsg}>{errors.title ?? errors.description}</div>}
			</div>
		</div>
	)
}
