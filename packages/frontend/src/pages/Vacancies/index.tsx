import React from 'react'

import { authSelectors } from '../../entities/auth'
import { TechnologieDependency } from '../../entities/utility'
import { useAppSelector } from '../../shared/libs'

import styles from './Skills.module.scss'
import { VacanciesTableWidget } from '../../widgets/vacancies'

export const VacanciesPage = () => {
	const userId = useAppSelector(authSelectors.userId)

	return (
		<article className={styles.wrapper}>
			<TechnologieDependency>
				<VacanciesTableWidget userId={userId!} />
			</TechnologieDependency>
		</article>
	)
}
