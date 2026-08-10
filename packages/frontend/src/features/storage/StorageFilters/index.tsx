import classNames from 'classnames'
import React from 'react'
import { NavLink } from 'react-router-dom'

import { routes } from '../../../shared/routes'

import styles from './StorageFilters.module.scss'

const navigations = [
	{
		path: routes.storage.goto(),
		label: 'Хранилише'
	}
]

export const StorageFiltersFeature = () => {
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
