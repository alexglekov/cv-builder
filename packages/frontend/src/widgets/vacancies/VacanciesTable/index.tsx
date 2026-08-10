import React, { useEffect } from 'react'

import styles from './VacanciesTable.module.scss'
import { useAppSelector } from '../../../shared/libs'
import { useProjectsActions } from '../../../entities/projects'
import { Loader } from '../../../shared/ui'
import { TechnologieDependency } from '../../../entities/utility'
import { VacancyCardWidget } from '../VacancyCard'
import { useVacanciesActions, vacanciesSelectors } from '../../../entities/vacancies'

interface VacanciesTableWidgetProps {
	userId: number
}

export const VacanciesTableWidget: React.FC<VacanciesTableWidgetProps> = (props: VacanciesTableWidgetProps) => {
	const { userId } = props

	const vacancies = useAppSelector(vacanciesSelectors.vacanciesState)
	// const { title } = useAppSelector(vacanciesSelectors.filtersState)
	const isLoading = useAppSelector(vacanciesSelectors.isLoading)
	const isFailed = useAppSelector(vacanciesSelectors.isFailed)
	const isLoaded = useAppSelector(vacanciesSelectors.isLoaded)

	const { loadVacanciesInfo } = useVacanciesActions()

	useEffect(() => {
		if (!isLoaded) {
			loadVacanciesInfo({ userId })
		}
	}, [isLoaded])

	if (isLoading) {
		return (
			<div className={styles.loaderWrapper}>
				<Loader />
			</div>
		)
	}

	if (isFailed) {
		return <div> Ошибка !!! </div>
	}

	return (
		<div className={styles.wrapper}>
			<TechnologieDependency>
				{vacancies.map((vacancy) => (
					<VacancyCardWidget state={vacancy} key={vacancy.id} />
				))}

				{vacancies.length === 0 && (
					<div className={styles.notVacancies}>{vacancies.length ? 'Вакансии не найдены...' : 'Вакансий нет...'}</div>
				)}
			</TechnologieDependency>
		</div>
	)
}
