import React from 'react'

import { Modal } from '../../../../../shared/ui'

import { InfoState, PageType, createProjectValidationSchema, initialState, navbar, actionHandler } from '../../model'
import { GeneralInformationWidget } from './GeneralInformation'
import { EnvironmentWidget } from './Environment'
import { ResponsibilitiesEditWidget } from './Responsibilities'

export interface CreateProjectModalProps {
	onClose: () => void
	userId: number
}

export const CreateProjectModal: React.FC<CreateProjectModalProps> = React.memo((props: CreateProjectModalProps) => {
	const { onClose, userId } = props

	return (
		<Modal<InfoState, PageType>
			handler={actionHandler}
			userId={userId}
			validationSchema={createProjectValidationSchema}
			close={onClose}
			navTypes={navbar}
			submitButtonTitle="Создать"
			initialState={initialState}
		>
			{({ type, errors, changeState, state }) => (
				<>
					{type === 'general' && <GeneralInformationWidget errors={errors} setState={changeState} state={state} />}
					{type === 'env' && <EnvironmentWidget errors={errors} setState={changeState} state={state} />}
					{type == 'req' && <ResponsibilitiesEditWidget errors={errors} setState={changeState} state={state} />}
				</>
			)}
		</Modal>
	)
})

export { EnvironmentWidget } from './Environment'
export { GeneralInformationWidget } from './GeneralInformation'
export { ResponsibilitiesEditWidget } from './Responsibilities'
