import { Outlet } from 'react-router-dom'

import styles from '../Pages.module.scss'

export const ColleaguesLayout = () => {
	return (
		<section className={styles.privatePages}>
			<Outlet />
		</section>
	)
}
