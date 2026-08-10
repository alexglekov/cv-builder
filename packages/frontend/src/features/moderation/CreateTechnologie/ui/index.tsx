/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { TransparentButton } from '../../../../shared/ui'
import { CreateTechnologieModal } from './CreateTechnologieModal'

interface CreateTechnologiesFeatureProps {
	className: string
	techtype: string
}

export const CreateTechnologieFeature: React.FC<CreateTechnologiesFeatureProps> = (props: CreateTechnologiesFeatureProps) => {
	const { className, techtype } = props

	const [isOpenedCreatePopUp, setOpenedCreatePopUp] = useState(false)

	return (
		<>
			<TransparentButton className={className} onClick={() => setOpenedCreatePopUp(true)} title="Добавить технологию" />
			{isOpenedCreatePopUp && <CreateTechnologieModal techtype={techtype} onClose={() => setOpenedCreatePopUp(false)} />}
		</>
	)
}
