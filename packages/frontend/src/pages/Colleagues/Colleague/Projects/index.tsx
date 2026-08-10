import React from 'react'

import { ProjectsCardsWidget } from '../../../../widgets/projects'
import { ProjectFiltersFeature, CreateProjectFeature } from '../../../../features/projects'

import styles from './ColleagueProjects.module.scss'
import { useParams } from 'react-router-dom'

export const ColleagueProjectsPage = () => {
	const param = useParams()

	return (
		<article className={styles.wrapper}>
			<header className={styles.filters}>
				<ProjectFiltersFeature />
				<CreateProjectFeature userId={Number(param.id)} className={styles.whiteButton} />
			</header>
			<section className={styles.content}>
				<ProjectsCardsWidget userId={Number(param.id)} />
			</section>
		</article>
	)
}
