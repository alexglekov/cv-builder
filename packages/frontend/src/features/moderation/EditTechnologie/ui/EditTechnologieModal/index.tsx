import React from 'react'

import { Modal } from '../../../../../shared/ui'
import { ITechnologie } from '../../../../../entities/utility'
import { InfoState, addNewColleagueValidationSchema, actionHandler } from '../../model'

import { GeneralInformationWidget } from './modal'
import styles from './EditTechnologieModal.module.scss'

export interface AddNewColleagueModalProps {
	onClose: () => void
	technologie: ITechnologie
}

export const EditTechnologieModal: React.FC<AddNewColleagueModalProps> = React.memo((props: AddNewColleagueModalProps) => {
	const { onClose, technologie } = props

	return (
		<Modal<InfoState, unknown>
			handler={actionHandler}
			validationSchema={addNewColleagueValidationSchema}
			close={onClose}
			submitButtonTitle="Редактировать"
			initialState={{ ...technologie }}
			className={styles.modalWrapper}
		>
			{({ errors, changeState, state }) => <GeneralInformationWidget errors={errors} setState={changeState} state={state} />}
		</Modal>
	)
})
