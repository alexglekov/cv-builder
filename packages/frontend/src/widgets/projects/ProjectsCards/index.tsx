import React, { useEffect } from 'react'

import { useAppSelector } from '../../../shared/libs'
import { Loader } from '../../../shared/ui'
import { projectsSelectors, useProjectsActions } from '../../../entities/projects'
import { ProjectCardWidget } from '../ProjectCard'

import styles from './ProjectsCards.module.scss'
import { TechnologieDependency } from '../../../entities/utility'

interface ProjectsCardsWidgetProps {
	userId: number
}

export const ProjectsCardsWidget: React.FC<ProjectsCardsWidgetProps> = (props: ProjectsCardsWidgetProps) => {
	const { userId } = props

	const projects = useAppSelector(projectsSelectors.projectsState)
	const { title } = useAppSelector(projectsSelectors.filtersState)
	const isLoading = useAppSelector(projectsSelectors.isLoading)
	const isFailed = useAppSelector(projectsSelectors.isFailed)
	const isLoaded = useAppSelector(projectsSelectors.isLoaded)

	const { loadProjectsInfo } = useProjectsActions()

	useEffect(() => {
		if (!isLoaded) {
			loadProjectsInfo({ userId })
		}
	}, [isLoaded])

	if (isLoading) {
		return (
			<div className={styles.loaderWrapper}>
				<Loader />
			</div>
		)
	}

	if (isFailed) {
		return <div> Ошибка !!! </div>
	}

	return (
		<div className={styles.wrapper}>
			<TechnologieDependency>
				{projects.map((project) => (
					<ProjectCardWidget state={project} key={project.id} />
				))}

				{projects.length === 0 && (
					<div className={styles.notProjects}>{title ? 'Проекты не найдены...' : 'Проектов нет...'}</div>
				)}
			</TechnologieDependency>
		</div>
	)
}
