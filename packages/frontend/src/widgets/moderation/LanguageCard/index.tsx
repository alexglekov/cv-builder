import React from 'react'

import { ILanguage } from '../../../entities/utility'
import { RemoveLanguageFeature, EditLanguageFeature } from '../../../features/moderation'

import styles from './LanguageCard.module.scss'

interface LanguageCardWidgetProps {
	state: ILanguage
}

export const LanguageCardWidget: React.FC<LanguageCardWidgetProps> = (props: LanguageCardWidgetProps) => {
	const { state } = props

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>{state.name}</div>
			<div className={styles.features}>
				<EditLanguageFeature language={state} className={styles.icon} />
				<RemoveLanguageFeature id={state.id} className={styles.icon} />
			</div>
		</div>
	)
}
