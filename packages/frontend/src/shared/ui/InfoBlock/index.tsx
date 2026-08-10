import React, { PropsWithChildren } from 'react'

import styles from './InfoBlock.module.scss'

import { Icon } from '../Icon'
import classNames from 'classnames'

interface InfoBlockProps extends PropsWithChildren {
	title: string
	iconType: string
	className?: string
	titleClassName?: string
	iconClassName?: string
	childrenClassName?: string
}

export const InfoBlock: React.FC<InfoBlockProps> = (props: InfoBlockProps) => {
	const { iconType, title, children, titleClassName, childrenClassName, iconClassName, className } = props
	return (
		<div className={classNames(styles.wrapper, className)}>
			<div className={classNames(styles.icon, iconClassName)}>
				<Icon type={iconType} />
			</div>
			<div className={styles.otherInfo}>
				<div className={classNames(styles.title, titleClassName)}>{title}</div>
				<div className={classNames(styles.default, childrenClassName)}>{children}</div>
			</div>
		</div>
	)
}
