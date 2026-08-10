import React, { useState } from 'react'

import classNames from 'classnames'

import { FullProjectCard, IProject, SchortProjectCard } from '../../../entities/projects'

import styles from './ProjectCard.module.scss'
import { RoundButton } from '../../../shared/ui'
import { ArchiveProjectFeature, DeleteProjectFeature, EditProjectFeature } from '../../../features/projects'

interface ProjectCardProps {
	state: IProject
	className?: string
}

export const ProjectCardWidget: React.FC<ProjectCardProps> = (props: ProjectCardProps) => {
	const { state } = props

	const [isOpend, setIsOpend] = useState(false)

	return (
		<div className={classNames(styles.wrapper, isOpend ? styles.isOpend : styles.isNotOpend)}>
			<div className={styles.cardWrapper}>
				{isOpend ? <FullProjectCard state={state} /> : <SchortProjectCard state={state} />}
				<div className={styles.features}>
					<EditProjectFeature className={styles.btn} project={state} />
					<div className={styles.other}>
						<ArchiveProjectFeature projectId={state.id} currentStatus={state.actual} />
						<DeleteProjectFeature projectId={state.id} />
					</div>
				</div>
			</div>
			<RoundButton className={styles.circleBtn} onClick={() => setIsOpend((value) => !value)} />
		</div>
	)
}
