/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from 'classnames'
import React, { useCallback, useState } from 'react'

import { Icon, TransparentButton } from '../../../../shared/ui'
import { GenerateCVModal } from './CreateProjectModal'

import styles from './GenerateCV.module.scss'

interface GenerateCVFeatureProps {
	className: string
	isIcon?: boolean
	userId: number
}

export const GenerateCVFeature: React.FC<GenerateCVFeatureProps> = (props: GenerateCVFeatureProps) => {
	const { className, isIcon, userId } = props

	const [isOpenedCreatePopUp, setOpenedCreatePopUp] = useState(false)

	const close = useCallback(() => setOpenedCreatePopUp(false), [])

	return (
		<>
			{!isIcon ? (
				<TransparentButton
					iconType="header.cv-build"
					className={className}
					onClick={() => setOpenedCreatePopUp(true)}
					title="Сгенерировать CV"
				/>
			) : (
				<div className={classNames(className, styles.icon)} onClick={() => setOpenedCreatePopUp(true)}>
					<Icon type="header.cv-build" />
				</div>
			)}
			{isOpenedCreatePopUp && <GenerateCVModal userId={userId} onClose={close} />}
		</>
	)
}
