import classNames from 'classnames'
import React from 'react'

import styles from './Button.module.scss'

interface ButtonProps {
	onClick: () => void
	className?: string
	title?: string
	disabled?: boolean
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
	const { onClick, className, title, disabled } = props

	return (
		<button
			onClick={onClick}
			className={classNames(styles.wrapper, className, disabled ? styles.disabled : '')}
			disabled={disabled}
		>
			{title}
		</button>
	)
}
