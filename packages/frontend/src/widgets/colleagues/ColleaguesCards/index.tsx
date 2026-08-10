import React, { useEffect } from 'react'
import _ from 'lodash'

import { useAppSelector } from '../../../shared/libs'
import { Loader } from '../../../shared/ui'
import { colleaguesSelectors, useColleaguesActions } from '../../../entities/colleagues'
import { ColleagueCardWidget } from '../ColleagueCard'

import styles from './ColleaguesCards.module.scss'
import { authSelectors } from '../../../entities/auth'

export const ColleaguesCardsWidget: React.FC = () => {
	const colleagues = useAppSelector(colleaguesSelectors.colleaguesState)
	const currentUserRole = useAppSelector(authSelectors.role)

	// const { whos } = useAppSelector(colleaguesSelectors.filtersState)
	const isLoading = useAppSelector(colleaguesSelectors.isLoading)
	const isFailed = useAppSelector(colleaguesSelectors.isFailed)
	const isLoaded = useAppSelector(colleaguesSelectors.isLoaded)

	const { loadColleaguesInfo } = useColleaguesActions()

	useEffect(() => {
		if (!isLoaded) {
			loadColleaguesInfo()
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
			{_.chunk([...colleagues, ...new Array(3 - (colleagues.length % 3)).fill(null)], 3).map((colleaguesChunk, index) => (
				<div className={styles.colleguesRow} key={index}>
					{colleaguesChunk.map((colleague) =>
						colleague ? (
							<ColleagueCardWidget role={currentUserRole} state={colleague} key={index} />
						) : (
							<div className={styles.emptyField} key={index}></div>
						)
					)}
				</div>
			))}

			{colleagues.length === 0 && <div className={styles.notProjects}>{'Коллеги не найдены...'}</div>}
		</div>
	)
}
