import React, { useEffect, useState } from 'react'
import { Link, useLocation, matchPath } from 'react-router-dom'

import { HeaderNavBar } from './NavBar'

import logoImage from '../../../public/images/innowise-logo.svg'
import styles from './Header.module.scss'
import { routes } from '../../shared/routes'
import { SearchProjectsByNameFilterFeuature } from '../../features/projects'
import { SearchTechnologiesByNameFilterFeuature } from '../../features/moderation'

enum TypePath {
	none,
	projects,
	moderationTechnologies
}

export const Header = () => {
	const location = useLocation()

	const [typePath, setTypePath] = useState<TypePath>(TypePath.none)

	useEffect(() => {
		if (matchPath({ end: false, path: routes.projects.goto() }, location.pathname) != null) {
			setTypePath(TypePath.projects)
		} else if (matchPath({ end: false, path: routes.moderation.technologies.goto() }, location.pathname) != null) {
			setTypePath(TypePath.moderationTechnologies)
		} else setTypePath(TypePath.none)
	}, [location])

	return (
		<header className={styles.wrapper}>
			<Link to={routes.profile.goto()} className={styles.logo}>
				<img src={logoImage} alt="" />
			</Link>
			{typePath == TypePath.projects && <SearchProjectsByNameFilterFeuature />}
			{typePath == TypePath.moderationTechnologies && <SearchTechnologiesByNameFilterFeuature />}
			<HeaderNavBar />
		</header>
	)
}
