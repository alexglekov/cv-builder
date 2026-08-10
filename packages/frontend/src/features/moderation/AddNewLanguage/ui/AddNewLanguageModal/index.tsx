import React from 'react'

import { Modal } from '../../../../../shared/ui'

import styles from './AddNewLanguageModal.module.scss'

import { InfoState, addNewLanguageValidationSchema, initialState, actionHandler } from '../../model'
import { GeneralInformationWidget } from './modal'

export interface AddNewColleagueModalProps {
	onClose: () => void
}

export const AddNewLanguageModal: React.FC<AddNewColleagueModalProps> = React.memo((props: AddNewColleagueModalProps) => {
	const { onClose } = props

	return (
		<Modal<InfoState, unknown>
			handler={actionHandler}
			validationSchema={addNewLanguageValidationSchema}
			close={onClose}
			submitButtonTitle="Добавить"
			initialState={{ ...initialState }}
			className={styles.modalWrapper}
		>
			{({ errors, changeState, state }) => <GeneralInformationWidget errors={errors} setState={changeState} state={state} />}
		</Modal>
	)
})
