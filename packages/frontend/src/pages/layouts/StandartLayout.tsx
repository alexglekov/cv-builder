import React from 'react'
import { Outlet } from 'react-router-dom'

import styles from '../Pages.module.scss'

export const StandartLayout = React.memo(() => {
	return (
		<section className={styles.privatePages}>
			<Outlet />
		</section>
	)
})
