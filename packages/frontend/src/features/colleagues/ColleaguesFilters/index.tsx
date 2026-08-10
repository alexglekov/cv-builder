import classNames from 'classnames'
import React, { useEffect } from 'react'
import { matchPath, NavLink, useLocation } from 'react-router-dom'

import { useColleaguesActions, ColleaguesFilters, WhosEnum } from '../../../entities/colleagues'

import { routes } from '../../../shared/routes'

import styles from './ColleaguesFilters.module.scss'

const navigations = [
	{
		path: routes.colleagues.all.goto(),
		label: 'Все'
	},
	{
		path: routes.colleagues.builders.goto(),
		label: 'Конструкторы'
	},
	{
		path: routes.colleagues.admins.goto(),
		label: 'Админы'
	}
]

export const ColleaguesFiltersFeature = () => {
	const location = useLocation()

	const { changeColleaguesFiltersAction } = useColleaguesActions()

	useEffect(() => {
		const newFilters: ColleaguesFilters = {
			whos: WhosEnum.ALL
		}

		if (matchPath(location.pathname, routes.colleagues.builders.goto())) {
			newFilters.whos = WhosEnum.BUILDERS
		} else if (matchPath(location.pathname, routes.colleagues.admins.goto())) {
			newFilters.whos = WhosEnum.ADMIN
		}

		changeColleaguesFiltersAction({ filters: newFilters })
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
