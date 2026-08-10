import React from 'react'
import { useParams } from 'react-router-dom'
import { routes } from '../../../shared/routes'
import { MenuNavElement } from '../../../shared/ui'

import styles from './ColleagueNavMenu.module.scss'

const menuElements = [
	{
		iconType: 'menu.profile',
		link: routes.colleagues.colleague.profile.goto
	},
	{
		iconType: 'menu.projects',
		link: routes.colleagues.colleague.projects.goto
	},
	{
		iconType: 'menu.skills',
		link: routes.colleagues.colleague.skills.goto
	},
	{
		iconType: 'menu.storage',
		link: routes.colleagues.colleague.storage.goto
	}
]

export const ColleagueNavMenu: React.FC = () => {
	const params = useParams()

	return (
		<nav className={styles.wrapper}>
			{menuElements.map((el, indx) => (
				<MenuNavElement
					className={styles.navLink}
					key={indx}
					iconType={el.iconType}
					label={''}
					link={el.link(Number(params.id))}
					isOpen={false}
				/>
			))}
		</nav>
	)
}
