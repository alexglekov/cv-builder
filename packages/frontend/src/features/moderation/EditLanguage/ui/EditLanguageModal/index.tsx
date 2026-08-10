import React from 'react'

import { Modal } from '../../../../../shared/ui'
import { ILanguage } from '../../../../../entities/utility'
import { InfoState, EditLangugageValidationSchema, actionHandler } from '../../model'

import { GeneralInformationWidget } from './modal'
import styles from './EditLanguageModal.module.scss'

export interface EditLanguageModalProps {
	onClose: () => void
	language: ILanguage
}

export const EditLanguageModal: React.FC<EditLanguageModalProps> = React.memo((props: EditLanguageModalProps) => {
	const { onClose, language } = props

	return (
		<Modal<InfoState, unknown>
			handler={actionHandler}
			validationSchema={EditLangugageValidationSchema}
			close={onClose}
			submitButtonTitle="Редактировать"
			initialState={{ ...language }}
			className={styles.modalWrapper}
		>
			{({ errors, changeState, state }) => <GeneralInformationWidget errors={errors} setState={changeState} state={state} />}
		</Modal>
	)
})
