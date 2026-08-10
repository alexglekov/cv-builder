import React from 'react'

import { ColleaguesFiltersFeature, AddNewColleagueFeature } from '../../features/colleagues'
import { ColleaguesCardsWidget } from '../../widgets/colleagues'

import styles from './Colleagues.module.scss'

export const ColleaguesPage = () => {
	return (
		<article className={styles.wrapper}>
			<header className={styles.filters}>
				<ColleaguesFiltersFeature />
				<AddNewColleagueFeature className={styles.addNewColleague} />
			</header>
			<section className={styles.content}>
				<ColleaguesCardsWidget />
			</section>
		</article>
	)
}
