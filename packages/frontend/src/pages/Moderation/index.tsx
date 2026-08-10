import React from 'react'
import { Outlet } from 'react-router-dom'
import { ModerationNavigationFeature } from '../../features/moderation'

import styles from './Moderation.module.scss'

export const ModerationPage = () => {
	return (
		<article className={styles.wrapper}>
			<header className={styles.filters}>
				<ModerationNavigationFeature />
			</header>
			<Outlet />
		</article>
	)
}
