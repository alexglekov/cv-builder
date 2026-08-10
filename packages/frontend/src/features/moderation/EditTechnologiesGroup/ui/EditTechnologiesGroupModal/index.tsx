import React from 'react'

import { Modal } from '../../../../../shared/ui'

import styles from './EditTechnologiesGroupModal.module.scss'

import { InfoState, addNewColleagueValidationSchema, initialState, actionHandler } from '../../model'
import { GeneralInformationWidget } from './modal'
import { ITechnologieType } from '../../../../../entities/utility'

export interface AddNewColleagueModalProps {
	onClose: () => void
	techtype: ITechnologieType
}

export const EditTechnologiesGroupModal: React.FC<AddNewColleagueModalProps> = React.memo(
	(props: AddNewColleagueModalProps) => {
		const { onClose, techtype } = props

		return (
			<Modal<InfoState, unknown>
				handler={actionHandler}
				validationSchema={addNewColleagueValidationSchema}
				close={onClose}
				submitButtonTitle="Редактировать"
				initialState={{ ...techtype }}
				className={styles.modalWrapper}
			>
				{({ errors, changeState, state }) => (
					<GeneralInformationWidget errors={errors} setState={changeState} state={state} />
				)}
			</Modal>
		)
	}
)
