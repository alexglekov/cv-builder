import classNames from 'classnames'
import React, { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useProjectsActions } from '../../../entities/projects'

import { routes } from '../../../shared/routes'

import styles from './ProjectFilters.module.scss'

const navigations = [
	{
		path: routes.projects.active.path,
		label: 'Проекты'
	},
	{
		path: routes.projects.archive.path,
		label: 'Архив'
	}
]

export const ProjectFiltersFeature = () => {
	const location = useLocation()

	const { changeProjectsFiltersAction } = useProjectsActions()

	useEffect(() => {
		const newFilters = {
			isArchive: location.pathname.includes(routes.projects.archive.path)
		}

		changeProjectsFiltersAction({ filters: newFilters })
	}, [location])

	return (
		<nav className={styles.navigations}>
			{navigations.map((navigation, indx) => (
				<NavLink
					key={indx}
					className={({ isActive }) => classNames(styles.navLink, isActive ? styles.active : '')}
					to={navigation.path}
					end
				>
					{navigation.label}
				</NavLink>
			))}
		</nav>
	)
}
