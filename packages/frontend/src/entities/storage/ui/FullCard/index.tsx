import classNames from 'classnames'
import React from 'react'

import { InfoBlock } from '../../../../shared/ui'
import { ICV } from '../../model'

import styles from './FullCard.module.scss'

interface FullCvCardProps {
	state: ICV
}

export const FullCvCard: React.FC<FullCvCardProps> = (props: FullCvCardProps) => {
	const { state } = props

	return (
		<div className={styles.content}>
			<div className={styles.title}>{state.title}</div>
			<div className={styles.mainInfo}>
				{state.description && (
					<InfoBlock className={styles.description} iconType="projects.description" title="Описание">
						{state.description}
					</InfoBlock>
				)}
				<div className={styles.times}>
					{state.created && (
						<InfoBlock className={classNames(styles.objInfo)} iconType="projects.time" title="Дата создания">
							{new Date(state.created).toISOString().slice(0, 10).split('-').reverse().join('.')}
						</InfoBlock>
					)}
					{state.updated && (
						<InfoBlock className={classNames(styles.objInfo)} iconType="projects.time" title="Дата обновления">
							{new Date(state.updated).toISOString().slice(0, 10).split('-').reverse().join('.')}
						</InfoBlock>
					)}
				</div>
			</div>
		</div>
	)
}
