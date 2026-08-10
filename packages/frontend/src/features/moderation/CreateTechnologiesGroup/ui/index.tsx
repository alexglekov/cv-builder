/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { TransparentButton } from '../../../../shared/ui'
import { CreateTechnologiesGroupModal } from './CreateTechnologiesGroupModal'

interface CreateTechnologiesGroupsFeatureProps {
	className: string
}

export const CreateTechnologiesGroupFeature: React.FC<CreateTechnologiesGroupsFeatureProps> = (
	props: CreateTechnologiesGroupsFeatureProps
) => {
	const { className } = props

	const [isOpenedCreatePopUp, setOpenedCreatePopUp] = useState(false)

	return (
		<>
			<TransparentButton className={className} onClick={() => setOpenedCreatePopUp(true)} title="Новая группа технологий" />
			{isOpenedCreatePopUp && <CreateTechnologiesGroupModal onClose={() => setOpenedCreatePopUp(false)} />}
		</>
	)
}
