/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback, useState } from 'react'

import { TechnologieDependency } from '../../../../entities/utility'
import { TransparentButton } from '../../../../shared/ui'

import { CreateProjectModal } from './CreateProjectModal'

interface CreateProjectFeatureProps {
	className: string
	userId: number
}

export const CreateProjectFeature: React.FC<CreateProjectFeatureProps> = (props: CreateProjectFeatureProps) => {
	const { className, userId } = props

	const [isOpenedCreatePopUp, setOpenedCreatePopUp] = useState(false)

	const close = useCallback(() => setOpenedCreatePopUp(false), [])

	return (
		<>
			<TransparentButton className={className} onClick={() => setOpenedCreatePopUp(true)} title="Добавить проект" />
			{isOpenedCreatePopUp && (
				<TechnologieDependency onClose={close}>
					<CreateProjectModal userId={userId} onClose={close} />
				</TechnologieDependency>
			)}
		</>
	)
}
