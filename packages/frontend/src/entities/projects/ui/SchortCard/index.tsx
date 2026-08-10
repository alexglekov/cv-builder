import React from 'react'

import { IProject } from '../../model'

import styles from './SchortCard.module.scss'

interface SchortProjectCardProps {
	state: IProject
}

export const SchortProjectCard: React.FC<SchortProjectCardProps> = (props: SchortProjectCardProps) => {
	const { state } = props

	return (
		<div className={styles.content}>
			<div className={styles.headD}>
				<div className={styles.title}>{state.title}</div>
				<div className={styles.date}>
					{`${new Date(state.start).toISOString().slice(0, 10).split('-').reverse().join('.')} - ${new Date(state.end)
						.toISOString()
						.slice(0, 10)
						.split('-')
						.reverse()
						.join('.')}`}
				</div>
			</div>
			<div className={styles.description}>{state.description}</div>
		</div>
	)
}
