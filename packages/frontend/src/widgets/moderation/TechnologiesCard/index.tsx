import classNames from 'classnames'
import React, { useState } from 'react'

import { ITechnologieType } from '../../../entities/utility'
import {
	DeleteTechnologieFeature,
	CreateTechnologieFeature,
	DeleteTechnologiesGroupFeature,
	EditTechnologieFeature,
	EditTechnologiesGroupFeature
} from '../../../features/moderation'
import { RoundButton } from '../../../shared/ui'

import styles from './TechnologiesCard.module.scss'

interface TechnologiesCardWidgetProps {
	state: ITechnologieType
}

export const TechnologiesCardWidget: React.FC<TechnologiesCardWidgetProps> = (props: TechnologiesCardWidgetProps) => {
	const { state } = props

	const [isOpend, setIsOpend] = useState(false)

	return (
		<div className={classNames(styles.wrapper, isOpend ? styles.isOpend : styles.isNotOpend)}>
			<div className={styles.cardWrapper}>
				{isOpend ? (
					<div className={styles.fullCard}>
						<div className={styles.title}>{state.name}</div>
						<div className={styles.techns}>
							{state.technologies.map((tech) => (
								<div className={styles.item} key={tech.id}>
									<div className={styles.title}>{tech.name}</div>
									<div className={styles.features}>
										<EditTechnologieFeature technologie={tech} className={styles.icon} />
										<DeleteTechnologieFeature id={tech.id} className={styles.icon} />
									</div>
								</div>
							))}
						</div>
						<CreateTechnologieFeature techtype={state.name} className={styles.addTech} />
					</div>
				) : (
					<div className={styles.smallCard}>
						<div className={styles.title}>{state.name}</div>
					</div>
				)}
				<div className={styles.features}>
					<EditTechnologiesGroupFeature techtype={state} className={styles.icon} />
					<DeleteTechnologiesGroupFeature id={state.id} className={styles.icon} />
				</div>
			</div>
			<RoundButton className={styles.circleBtn} onClick={() => setIsOpend((value) => !value)} />
		</div>
	)
}
