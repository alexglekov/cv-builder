import classNames from 'classnames'
import React from 'react'
import { NavLink } from 'react-router-dom'

import { routes } from '../../../shared/routes'

import styles from './ModerationNavigation.module.scss'

const navigations = [
	{
		path: routes.moderation.technologies.goto(),
		label: 'Технологии'
	},
	{
		path: routes.moderation.languages.goto(),
		label: 'Языки'
	}
]

export const ModerationNavigationFeature = () => {
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
