import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { useGlobalActions } from '../../shared/store'
import { ColleagueNavMenu } from '../../widgets/colleagues'

import styles from '../Colleagues/Colleague/Colleague.module.scss'

export const ColleagueLayout = () => {
	const { clearEntitiesStates } = useGlobalActions()

	useEffect((): any => {
		clearEntitiesStates()

		return () => clearEntitiesStates()
	}, [])

	return (
		<section className={styles.wrapper}>
			<Outlet />
			<ColleagueNavMenu />
		</section>
	)
}
