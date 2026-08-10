import React from 'react'

import { Button } from '../../../shared/ui'

import styles from './GotoOriginalVacancy.module.scss'

interface GotoOriginalVacancyFeatureProps {
	url: string
}

export const GotoOriginalVacancyFeature: React.FC<GotoOriginalVacancyFeatureProps> = (
	props: GotoOriginalVacancyFeatureProps
) => {
	const { url } = props

	return (
		<a target="_blank" href={url} className={styles.wrapper} rel="noreferrer">
			<Button onClick={() => true} title="Перейти" />
		</a>
	)
}
