/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { ILanguage } from '../../../../entities/utility'
import { Icon } from '../../../../shared/ui'
import { EditLanguageModal } from './EditLanguageModal'

interface EditLanguagesFeatureProps {
	className: string
	language: ILanguage
}

export const EditLanguageFeature: React.FC<EditLanguagesFeatureProps> = (props: EditLanguagesFeatureProps) => {
	const { className, language } = props

	const [isOpenedCreatePopUp, setOpenedCreatePopUp] = useState(false)

	return (
		<>
			<div className={className} onClick={() => setOpenedCreatePopUp(true)}>
				<Icon type="moderation.edit" />
			</div>
			{isOpenedCreatePopUp && <EditLanguageModal language={language} onClose={() => setOpenedCreatePopUp(false)} />}
		</>
	)
}
