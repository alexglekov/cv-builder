import React from 'react'

import { ICV } from '../../model'

import styles from './SchortCard.module.scss'

interface SchortCvCardProps {
	state: ICV
}

export const SchortCvCard: React.FC<SchortCvCardProps> = (props: SchortCvCardProps) => {
	const { state } = props

	return (
		<div className={styles.content}>
			<div className={styles.headD}>
				<div className={styles.title}>{state.title}</div>
				<div className={styles.title}>
					{state.created && new Date(state.created).toISOString().slice(0, 10).split('-').reverse().join('.')}
				</div>
			</div>
			<div className={styles.description}>{state.description}</div>
		</div>
	)
}
