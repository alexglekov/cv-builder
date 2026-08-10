/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { ITechnologieType } from '../../../../entities/utility'
import { Icon } from '../../../../shared/ui'
import { EditTechnologiesGroupModal } from './EditTechnologiesGroupModal'

interface EditTechnologiesGroupFeatureProps {
	className: string
	techtype: ITechnologieType
}

export const EditTechnologiesGroupFeature: React.FC<EditTechnologiesGroupFeatureProps> = (
	props: EditTechnologiesGroupFeatureProps
) => {
	const { className, techtype } = props

	const [isOpenedCreatePopUp, setOpenedCreatePopUp] = useState(false)

	return (
		<>
			<div className={className} onClick={() => setOpenedCreatePopUp(true)}>
				<Icon type="moderation.edit" />
			</div>
			{isOpenedCreatePopUp && <EditTechnologiesGroupModal techtype={techtype} onClose={() => setOpenedCreatePopUp(false)} />}
		</>
	)
}
