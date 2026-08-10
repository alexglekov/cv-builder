import React, { BaseSyntheticEvent } from 'react'
import { Roles } from '../../../../../../entities/auth'

import { IColleague } from '../../../../../../entities/colleagues'
import { convertRoleToString } from '../../../../../../entities/colleagues/libs'

import styles from './GeneralInformation.module.scss'
import NoAvatarImage from '../../../../../../../public/images/no_avatar.png'

type TypeState = Pick<IColleague, 'role' | 'profileUri' | 'name' | 'surname'>

interface GeneralInformationWidgetProps {
	state: TypeState
	setState: (state: TypeState) => void
	errors: Record<keyof TypeState, string | undefined> | null
}

export const GeneralInformationWidget: React.FC<GeneralInformationWidgetProps> = (props: GeneralInformationWidgetProps) => {
	const { setState, state, errors } = props

	return (
		<div className={styles.wrapper}>
			<div className={styles.userConstantInfo}>
				<div className={styles.avatar}>
					<img src={state.profileUri || NoAvatarImage} alt="" />
				</div>
				<div className={styles.fio}>{`${state.name} ${state.surname}`}</div>
			</div>

			<div
				className={styles.content}
				onChange={(e: BaseSyntheticEvent) => {
					const newState: any = { ...state }
					newState[e.target.name] = e.target.value
					setState(newState)
				}}
			>
				<fieldset className={errors?.role && styles.errorFieldSet}>
					<legend>Роль</legend>
					<select value={state.role} name="role">
						<option defaultValue={state.role} disabled>
							Выберете роль
						</option>
						{[Roles.ADMIN, Roles.MANAGER, Roles.USER].map((role) => (
							<option key={role} value={role}>
								{convertRoleToString(role)}
							</option>
						))}
					</select>
				</fieldset>
				{errors && <div className={styles.errorMsg}>{errors.role}</div>}
			</div>
		</div>
	)
}
