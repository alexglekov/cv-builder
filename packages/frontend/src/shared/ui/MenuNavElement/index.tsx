import classNames from 'classnames'
import React from 'react'
import { NavLink } from 'react-router-dom'

import { Icon } from '../Icon'

import styles from './MenuNavElement.module.scss'

interface MenuElementProps {
	iconType: string
	label: string
	link: string
	isOpen: boolean
	withBackground?: boolean
	className?: string
}

export const MenuNavElement: React.FC<MenuElementProps> = (props: MenuElementProps) => {
	const { className, iconType, label, link, isOpen, withBackground } = props

	return (
		<NavLink
			className={({ isActive }) =>
				classNames(
					className,
					withBackground && styles.withBackground,
					styles.wrapper,
					isActive ? (withBackground ? styles.isActiveLinkWithBackground : styles.isActiveLink) : ''
				)
			}
			to={link}
		>
			<Icon type={iconType} />
			{isOpen && <div className={styles.linkText}>{label}</div>}
		</NavLink>
	)
}
