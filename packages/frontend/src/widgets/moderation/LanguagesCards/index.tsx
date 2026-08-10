import React, { useEffect } from 'react'

import { LanguageCardWidget } from '../LanguageCard'
import { languagesSelectors, useLanguagesActions } from '../../../entities/utility'
import { useAppSelector } from '../../../shared/libs'
import { Loader } from '../../../shared/ui'

import styles from './LanguagesCards.module.scss'

export const LanguagesCardsWidget = () => {
	const languagesState = useAppSelector(languagesSelectors.languagesState)
	const { title } = useAppSelector(languagesSelectors.filtersState)
	const isLoading = useAppSelector(languagesSelectors.isLoading)
	const isFailed = useAppSelector(languagesSelectors.isFailed)
	const isLoaded = useAppSelector(languagesSelectors.isLoaded)

	const { loadLanguagesInfo } = useLanguagesActions()

	useEffect(() => {
		if (!isLoaded) {
			loadLanguagesInfo()
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
			{languagesState.map((language) => (
				<LanguageCardWidget state={language} key={language.id} />
			))}

			{languagesState.length === 0 && (
				<div className={styles.notTechnologies}>{title ? 'Языки не найдены...' : 'Языков нет...'}</div>
			)}
		</article>
	)
}
