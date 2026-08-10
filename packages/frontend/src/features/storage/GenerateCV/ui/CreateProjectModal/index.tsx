import React from 'react'

import { Modal } from '../../../../../shared/ui'

import { InfoState, generateCvValidationSchema, initialState, actionHandler } from '../../model'
import { GeneralInformationWidget } from './GeneralInformation'

export interface GenerateCVModalProps {
	onClose: () => void
	userId: number
}

export const GenerateCVModal: React.FC<GenerateCVModalProps> = React.memo((props: GenerateCVModalProps) => {
	const { onClose, userId } = props

	return (
		<Modal<InfoState, undefined>
			handler={actionHandler}
			userId={userId}
			validationSchema={generateCvValidationSchema}
			close={onClose}
			submitButtonTitle="Сгенерировать"
			initialState={initialState}
		>
			{({ errors, changeState, state }) => <GeneralInformationWidget errors={errors} setState={changeState} state={state} />}
		</Modal>
	)
})

export { GeneralInformationWidget } from './GeneralInformation'
