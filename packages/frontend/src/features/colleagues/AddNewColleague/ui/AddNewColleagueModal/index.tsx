import React from 'react'

import { Modal } from '../../../../../shared/ui'

import { InfoState, addNewColleagueValidationSchema, initialState, actionHandler } from '../../model'
import { GeneralInformationWidget } from './modal'

export interface AddNewColleagueModalProps {
	onClose: () => void
}

export const AddNewColleagueModal: React.FC<AddNewColleagueModalProps> = React.memo((props: AddNewColleagueModalProps) => {
	const { onClose } = props

	return (
		<Modal<InfoState, unknown>
			handler={actionHandler}
			validationSchema={addNewColleagueValidationSchema}
			close={onClose}
			submitButtonTitle="Добавить"
			initialState={initialState}
		>
			{({ errors, changeState, state }) => <GeneralInformationWidget errors={errors} setState={changeState} state={state} />}
		</Modal>
	)
})
