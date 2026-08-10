import React from 'react'

import { IUser } from '../../../../../entities/user'
import { Modal } from '../../../../../shared/ui'

import { InfoState, PageType, editUserValidationSchema, navbar, actionHandler } from '../../model'
import { DomainsEditWidget } from './Domains'
import { GeneralInfoEditWidget } from './GeneralInfo'
import { LanguagesEditWidget } from './Languages'

export interface EditUserModalProps {
	onClose: () => void
	state: IUser
	userId: number
}

export const EditUserModal: React.FC<EditUserModalProps> = React.memo((props: EditUserModalProps) => {
	const { onClose, state, userId } = props

	return (
		<Modal<InfoState, PageType>
			handler={actionHandler}
			validationSchema={editUserValidationSchema}
			close={onClose}
			userId={userId}
			navTypes={navbar}
			submitButtonTitle="Редактировать"
			initialState={state}
		>
			{({ type, errors, changeState, state }) => (
				<>
					{type === 'general' && <GeneralInfoEditWidget errors={errors} setState={changeState} state={state} />}
					{type === 'domains' && <DomainsEditWidget errors={errors} setState={changeState} state={state} />}
					{type === 'languages' && <LanguagesEditWidget errors={errors} setState={changeState} state={state} />}
				</>
			)}
		</Modal>
	)
})
