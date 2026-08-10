import React from 'react'

import { Modal } from '../../../../../shared/ui'

import styles from './RemoveLanguageModal.module.scss'

import { InfoState, RemoveLanguageValidationSchema, actionHandler } from '../../model'
import { GeneralInformationWidget } from './modal'

export interface AddNewColleagueModalProps {
	onClose: () => void
	id: number
}

export const RemoveLanguageModal: React.FC<AddNewColleagueModalProps> = React.memo((props: AddNewColleagueModalProps) => {
	const { onClose, id } = props

	return (
		<Modal<InfoState, unknown>
			handler={actionHandler}
			validationSchema={RemoveLanguageValidationSchema}
			close={onClose}
			submitButtonTitle="Удалить"
			initialState={{ id }}
			className={styles.modalWrapper}
		>
			{({ errors, changeState, state }) => <GeneralInformationWidget errors={errors} setState={changeState} state={state} />}
		</Modal>
	)
})
