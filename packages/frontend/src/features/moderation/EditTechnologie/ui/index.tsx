/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { ITechnologie } from '../../../../entities/utility'
import { Icon } from '../../../../shared/ui'
import { EditTechnologieModal } from './EditTechnologieModal'

interface EditTechnologiesFeatureProps {
	className: string
	technologie: ITechnologie
}

export const EditTechnologieFeature: React.FC<EditTechnologiesFeatureProps> = (props: EditTechnologiesFeatureProps) => {
	const { className, technologie } = props

	const [isOpenedCreatePopUp, setOpenedCreatePopUp] = useState(false)

	return (
		<>
			<div className={className} onClick={() => setOpenedCreatePopUp(true)}>
				<Icon type="moderation.edit" />
			</div>
			{isOpenedCreatePopUp && <EditTechnologieModal technologie={technologie} onClose={() => setOpenedCreatePopUp(false)} />}
		</>
	)
}
