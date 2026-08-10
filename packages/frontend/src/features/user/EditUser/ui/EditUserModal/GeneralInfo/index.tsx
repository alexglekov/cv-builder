import React, { BaseSyntheticEvent } from 'react'

import { InfoState } from '../../../model'

import styles from './GeneralInfo.module.scss'
import NoAvatarImage from '../../../../../../../public/images/no_avatar.png'

interface GeneralInfoEditWidgetProps {
	state: InfoState
	setState: (state: InfoState) => void
	errors: Record<keyof InfoState, string | undefined> | null
}

export const GeneralInfoEditWidget: React.FC<GeneralInfoEditWidgetProps> = (props: GeneralInfoEditWidgetProps) => {
	const { state, setState, errors } = props

	return (
		<div className={styles.wrapper}>
			<div className={styles.userConstantInfo}>
				<div className={styles.avatar}>
					<img src={state.profileUri || NoAvatarImage} alt="" />
				</div>
				<div className={styles.fio}>{`${state.name} ${state.surname}`}</div>
			</div>
			<form
				className={styles.content}
				onSubmit={(e) => e.preventDefault()}
				onChange={(e: BaseSyntheticEvent) => {
					const newState: any = { ...state }
					newState[e.target.name] = e.target.value
					setState(newState)
				}}
			>
				<fieldset className={errors?.education && styles.errorFieldSet}>
					<legend>Образование</legend>
					<input value={state.education} name="education" />
				</fieldset>
				<fieldset className={errors?.specialty && styles.errorFieldSet}>
					<legend>Направление</legend>
					<input value={state.specialty} name="specialty" />
				</fieldset>
				<fieldset className={errors?.biography && styles.errorFieldSet}>
					<legend>Биография</legend>
					<textarea value={state.biography} name="biography" />
				</fieldset>
				{errors && <div className={styles.errorMsg}>{errors.biography ?? errors.education ?? errors.specialty}</div>}
			</form>
		</div>
	)
}
