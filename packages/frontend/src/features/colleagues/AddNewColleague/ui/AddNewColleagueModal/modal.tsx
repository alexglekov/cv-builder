import classNames from 'classnames'
import React, { BaseSyntheticEvent } from 'react'
import { InfoState } from '../../model'

import styles from './AddNewColleagueModal.module.scss'

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
				<fieldset className={errors?.name && styles.errorFieldSet}>
					<legend>Имя сотрудника</legend>
					<input value={state.name} name="name" />
				</fieldset>
				<fieldset className={errors?.surname && styles.errorFieldSet}>
					<legend>Фамилия сотрудника</legend>
					<input value={state.surname} name="surname" />
				</fieldset>
				<fieldset className={errors?.email && styles.errorFieldSet}>
					<legend>Почта сотрудника</legend>
					<input value={state.email} name="email" />
				</fieldset>
				{errors && <div className={styles.errorMsg}>{errors.name ?? errors.surname ?? errors.email}</div>}
			</div>
		</div>
	)
}
