import React, { useEffect } from 'react'

import { TechnologiesCardWidget } from '../TechnologiesCard'

import { technologiesSelectors, useTechnologiesActions } from '../../../entities/utility'
import { useAppSelector } from '../../../shared/libs'
import { Loader } from '../../../shared/ui'

import styles from './TechnologiesCards.module.scss'

export const TechnologiesCardsWidget = () => {
	const technologiesTypes = useAppSelector(technologiesSelectors.technologiesState)
	const { title } = useAppSelector(technologiesSelectors.filtersState)
	const isLoading = useAppSelector(technologiesSelectors.isLoading)
	const isFailed = useAppSelector(technologiesSelectors.isFailed)
	const isLoaded = useAppSelector(technologiesSelectors.isLoaded)

	const { loadTechnologiesInfo } = useTechnologiesActions()

	useEffect(() => {
		if (!isLoaded) {
			loadTechnologiesInfo()
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
		<article className={styles.wrapper}>
			{technologiesTypes.map((project) => (
				<TechnologiesCardWidget state={project} key={project.id} />
			))}

			{technologiesTypes.length === 0 && (
				<div className={styles.notTechnologies}>{title ? 'Технологии не найдены...' : 'Технологий нет...'}</div>
			)}
		</article>
	)
}
