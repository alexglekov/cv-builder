/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames'
import React from 'react'
import { Icon } from '../Icon'
import styles from './TransparentButton.module.scss'

interface TransparentButtonProps {
	className?: string
	onClick: () => void
	title: string
	iconType?: string
}

export const TransparentButton: React.FC<TransparentButtonProps> = (props) => {
	const { className, onClick, title, iconType } = props

	return (
		<div onClick={onClick} className={classNames(className, styles.wrapper)}>
			<Icon type={iconType || 'global.plus'} />
			{title}
		</div>
	)
}
