/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback, useState } from 'react'

import { TransparentButton } from '../../../../shared/ui'

import { AddNewColleagueModal } from './AddNewColleagueModal'

interface AddNewColleagueFeatureProps {
	className?: string
}

export const AddNewColleagueFeature: React.FC<AddNewColleagueFeatureProps> = (props: AddNewColleagueFeatureProps) => {
	const { className } = props

	const [isOpenedCreatePopUp, setOpenedCreatePopUp] = useState(false)

	const close = useCallback(() => setOpenedCreatePopUp(false), [])

	return (
		<>
			<TransparentButton className={className} onClick={() => setOpenedCreatePopUp(true)} title="Добавить сотрудника" />
			{isOpenedCreatePopUp && <AddNewColleagueModal onClose={close} />}
		</>
	)
}
