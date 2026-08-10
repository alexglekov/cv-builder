import React from 'react'

import { Modal } from '../../../../shared/ui'

import { InfoState, editColleagueValidationSchema, actionHandler } from '../model'
import { IColleague } from '../../../../entities/colleagues'
import { GeneralInformationWidget } from './EditColleagueModal'

import styles from './EditColleague.module.scss'

export interface EditColleagueModalProps {
	onClose: () => void
	state: IColleague
}

export const EditColleagueModal: React.FC<EditColleagueModalProps> = React.memo((props: EditColleagueModalProps) => {
	const { onClose, state } = props

	return (
		<Modal<InfoState, unknown>
			handler={actionHandler(state.id)}
			validationSchema={editColleagueValidationSchema}
			close={onClose}
			submitButtonTitle="Редактировать"
			initialState={state}
			className={styles.modal}
		>
			{({ type, errors, changeState, state }) => (
				<GeneralInformationWidget state={state} errors={errors} setState={changeState} />
			)}
		</Modal>
	)
})
