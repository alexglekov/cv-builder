/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { Icon } from '../../../../shared/ui'
import { RemoveColleagueModal } from './RemoveColleagueModal'

interface RemoveColleagueFeatureProps {
	className: string
	id: number
}

export const RemoveColleagueFeature: React.FC<RemoveColleagueFeatureProps> = (props: RemoveColleagueFeatureProps) => {
	const { className, id } = props

	const [isOpenedCreatePopUp, setOpenedCreatePopUp] = useState(false)

	return (
		<>
			<div className={className} onClick={() => setOpenedCreatePopUp(true)}>
				<Icon type="moderation.delete" />
			</div>
			{isOpenedCreatePopUp && <RemoveColleagueModal id={id} onClose={() => setOpenedCreatePopUp(false)} />}
		</>
	)
}
