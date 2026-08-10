import React from 'react'

import { ProjectsCardsWidget } from '../../widgets/projects'
import { ProjectFiltersFeature, CreateProjectFeature } from '../../features/projects'

import styles from './Projects.module.scss'
import { useAppSelector } from '../../shared/libs'
import { authSelectors } from '../../entities/auth'

export const ProjectsPage = () => {
	const userId = useAppSelector(authSelectors.userId)

	return (
		<article className={styles.wrapper}>
			<header className={styles.filters}>
				<ProjectFiltersFeature />
				<CreateProjectFeature userId={userId!} className={styles.whiteButton} />
			</header>
			<section className={styles.content}>
				<ProjectsCardsWidget userId={userId!} />
			</section>
		</article>
	)
}
