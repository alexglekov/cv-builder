import React, { ReactElement, useCallback, useState } from 'react'

import { IUser } from '../../../../entities/user'

import { Button } from '../../../../shared/ui'

import { EditUserModal } from './EditUserModal'

interface EditUserFeatureProps {
	className?: string
	state: IUser
	userId: number
}

export const EditUserFeature: React.FC<EditUserFeatureProps> = (props: EditUserFeatureProps): ReactElement | null => {
	const { className, state, userId } = props

	const [isOpenedPopUp, setOpenedPopUp] = useState(false)

	const close = useCallback(() => setOpenedPopUp(false), [])

	return (
		<>
			<Button className={className} onClick={() => setOpenedPopUp(true)} title="Редактировать" />
			{isOpenedPopUp && <EditUserModal userId={userId} state={state} onClose={close} />}
		</>
	)
}
