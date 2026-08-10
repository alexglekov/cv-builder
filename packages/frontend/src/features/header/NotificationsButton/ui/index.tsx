import React from 'react'
import classNames from 'classnames'

import { Icon } from '../../../../shared/ui'

import styles from './NotificationsButton.module.scss'

interface NotificationsButtonProps {
	className: string
}

export const NotificationsButton: React.FC<NotificationsButtonProps> = (props: NotificationsButtonProps) => {
	const { className } = props

	return (
		<div className={classNames(styles.wrapper, className)}>
			<div className={styles.iconBell}>
				<Icon type="header.bell" />
			</div>
		</div>
	)
}
