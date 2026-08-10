/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { Icon } from '../../../../shared/ui'
import { RemoveLanguageModal } from './RemoveLanguageModal'

interface RemoveLanguageFeatureProps {
	className: string
	id: number
}

export const RemoveLanguageFeature: React.FC<RemoveLanguageFeatureProps> = (props: RemoveLanguageFeatureProps) => {
	const { className, id } = props

	const [isOpenedCreatePopUp, setOpenedCreatePopUp] = useState(false)

	return (
		<>
			<div className={className} onClick={() => setOpenedCreatePopUp(true)}>
				<Icon type="moderation.delete" />
			</div>
			{isOpenedCreatePopUp && <RemoveLanguageModal id={id} onClose={() => setOpenedCreatePopUp(false)} />}
		</>
	)
}
