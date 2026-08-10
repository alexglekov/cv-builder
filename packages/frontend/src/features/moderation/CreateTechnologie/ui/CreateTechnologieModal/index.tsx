import React from 'react'

import { Modal } from '../../../../../shared/ui'

import styles from './CreateTechnologieModal.module.scss'

import { InfoState, addNewColleagueValidationSchema, initialState, actionHandler } from '../../model'
import { GeneralInformationWidget } from './modal'

export interface AddNewColleagueModalProps {
	onClose: () => void
	techtype: string
}

export const CreateTechnologieModal: React.FC<AddNewColleagueModalProps> = React.memo((props: AddNewColleagueModalProps) => {
	const { onClose, techtype } = props

	return (
		<Modal<InfoState, unknown>
			handler={actionHandler}
			validationSchema={addNewColleagueValidationSchema}
			close={onClose}
			submitButtonTitle="Добавить"
			initialState={{ ...initialState, techtype }}
			className={styles.modalWrapper}
		>
			{({ errors, changeState, state }) => <GeneralInformationWidget errors={errors} setState={changeState} state={state} />}
		</Modal>
	)
})
