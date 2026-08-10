/* eslint-disable eslint-comments/disable-enable-pair */
import classNames from 'classnames'
import React, { useCallback, useState } from 'react'
import { Roles } from '../../entities/auth'

import { routes } from '../../shared/routes'
import { RoundButton, MenuNavElement } from '../../shared/ui'

// eslint-disable-next-line no-undef
const packageJson = require('../../../package.json')

import styles from './Menu.module.scss'

const menuElements = {
	[Roles.USER]: [
		{
			iconType: 'menu.profile',
			label: 'Профиль',
			link: routes.profile.goto()
		},
		{
			iconType: 'menu.projects',
			label: 'Проекты',
			link: routes.projects.goto()
		},
		{
			iconType: 'menu.skills',
			label: 'Навыки',
			link: routes.skills.goto()
		},
		{
			iconType: 'menu.storage',
			label: 'Хранилище',
			link: routes.storage.goto()
		},
		{
			iconType: 'menu.vacancies',
			label: 'Вакансии',
			link: routes.vacancies.goto()
		}
	],
	[Roles.ADMIN]: [
		{
			iconType: 'moderation.settings',
			label: 'Модерация',
			link: routes.moderation.goto()
		},
		{
			iconType: 'collegues.people',
			label: 'Сотрудники',
			link: routes.colleagues.goto()
		}
	],
	[Roles.MANAGER]: [
		{
			iconType: 'moderation.settings',
			label: 'Модерация',
			link: routes.moderation.goto()
		},
		{
			iconType: 'collegues.people',
			label: 'Сотрудники',
			link: routes.colleagues.goto()
		}
	],
	[Roles.NONE]: []
}

interface MenuProps {
	role: Roles
}

export const Menu: React.FC<MenuProps> = React.memo((props: MenuProps) => {
	const { role } = props

	const [isOpen, setOpen] = useState(true)

	const openClose = useCallback(() => {
		setOpen((curr) => !curr)
	}, [])

	return (
		<aside className={styles.wrapper}>
			<nav className={classNames(styles.mainMenu, isOpen ? '' : styles.menuNotOpen)}>
				<ul className={styles.menuBtns}>
					{(role === Roles.USER ? menuElements[role] : [...menuElements[Roles.USER], ...menuElements[role]]).map(
						(el, indx) => (
							<MenuNavElement
								className={styles.navLink}
								withBackground
								key={indx}
								iconType={el.iconType}
								label={el.label}
								link={el.link}
								isOpen={isOpen}
							/>
						)
					)}
				</ul>
				{isOpen && <footer style={{ cursor: 'default' }}>Версия {packageJson.version}</footer>}
				<RoundButton className={classNames(styles.btnOpen, isOpen ? '' : styles.btnNotOpen)} onClick={openClose} />
			</nav>
		</aside>
	)
})
