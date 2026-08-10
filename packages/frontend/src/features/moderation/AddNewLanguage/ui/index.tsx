/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { TransparentButton } from '../../../../shared/ui'
import { AddNewLanguageModal } from './AddNewLanguageModal'

interface AddNewLanguagesFeatureProps {
	className: string
}

export const AddNewLanguageFeature: React.FC<AddNewLanguagesFeatureProps> = (props: AddNewLanguagesFeatureProps) => {
	const { className } = props

	const [isOpenedCreatePopUp, setOpenedCreatePopUp] = useState(false)

	return (
		<>
			<TransparentButton className={className} onClick={() => setOpenedCreatePopUp(true)} title="Добавить новый язык" />
			{isOpenedCreatePopUp && <AddNewLanguageModal onClose={() => setOpenedCreatePopUp(false)} />}
		</>
	)
}
