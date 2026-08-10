import React from 'react'

import { Modal } from '../../../../shared/ui'

import { InfoState, PageType, editProjectValidationSchema, navbar, actionHandler } from '../model'
import {
	GeneralInformationWidget,
	EnvironmentWidget,
	ResponsibilitiesEditWidget
} from '../../CreateProject/ui/CreateProjectModal'
import { IProject } from '../../../../entities/projects'

export interface EditProjectModalProps {
	onClose: () => void
	project: IProject
}

export const EditProjectModal: React.FC<EditProjectModalProps> = React.memo((props: EditProjectModalProps) => {
	const { onClose, project } = props

	return (
		<Modal<InfoState, PageType>
			handler={actionHandler(project.id)}
			validationSchema={editProjectValidationSchema}
			close={onClose}
			navTypes={navbar}
			submitButtonTitle="Редактировать"
			initialState={project}
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
