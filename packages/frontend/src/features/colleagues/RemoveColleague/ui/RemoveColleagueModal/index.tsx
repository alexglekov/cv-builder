import React from 'react'

import { Modal } from '../../../../../shared/ui'

import styles from './RemoveColleagueModal.module.scss'

import { InfoState, removeColleagueValidationSchema, actionHandler } from '../../model'
import { GeneralInformationWidget } from './modal'

export interface RemoveColleagueModalProps {
	onClose: () => void
	id: number
}

export const RemoveColleagueModal: React.FC<RemoveColleagueModalProps> = React.memo((props: RemoveColleagueModalProps) => {
	const { onClose, id } = props

	return (
		<Modal<InfoState, unknown>
			handler={actionHandler}
			validationSchema={removeColleagueValidationSchema}
			close={onClose}
			submitButtonTitle="Удалить"
			initialState={{ id }}
			className={styles.modalWrapper}
		>
			{({ errors, changeState, state }) => <GeneralInformationWidget errors={errors} setState={changeState} state={state} />}
		</Modal>
	)
})
