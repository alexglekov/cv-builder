import classNames from 'classnames'
import React from 'react'
import { NavLink } from 'react-router-dom'

import { Icon } from '../../../shared/ui'

import styles from './MenuNavElement.module.scss'

interface MenuElementProps {
	iconType: string
	label: string
	link: string
	isOpen: boolean
}

export const MenuNavElement: React.FC<MenuElementProps> = (props: MenuElementProps) => {
	const { iconType, label, link, isOpen } = props

	return (
		<NavLink className={({ isActive }) => classNames(styles.wrapper, isActive ? styles.isActiveLink : '')} to={link}>
			<Icon type={iconType} />
			{isOpen && <div className={styles.linkText}>{label}</div>}
		</NavLink>
	)
}
