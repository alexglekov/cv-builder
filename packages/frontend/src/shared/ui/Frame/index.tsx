import classNames from 'classnames'
import React from 'react'

import styles from './Frame.module.scss'

interface FrameProps {
	title?: string
	children?: any
	className?: string
}

export const Frame: React.FC<FrameProps> = (props: FrameProps) => {
	const { title, children, className } = props

	return (
		<fieldset className={classNames(styles.wrapper, className)}>
			{title && <legend>{title}</legend>}
			{children}
		</fieldset>
	)
}
