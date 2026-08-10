import React, { useEffect } from 'react'

import { useAppSelector } from '../../../shared/libs'
import { Loader } from '../../../shared/ui'
import { useStorageActions, storageSelectors } from '../../../entities/storage'
import { CvCardWidget } from '../CvCard'

import styles from './CvsCards.module.scss'

interface CvsCardsWidgetProps {
	userId: number
}

export const CvsCardsWidget: React.FC<CvsCardsWidgetProps> = (props: CvsCardsWidgetProps) => {
	const { userId } = props

	const cvs = useAppSelector(storageSelectors.storageState)
	const isLoading = useAppSelector(storageSelectors.isLoading)
	const isFailed = useAppSelector(storageSelectors.isFailed)
	const isLoaded = useAppSelector(storageSelectors.isLoaded)

	const { loadAllCvInfo } = useStorageActions()

	useEffect(() => {
		if (!isLoaded) {
			loadAllCvInfo({ userId })
		}
	}, [])

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
			{cvs.map((cv) => (
				<CvCardWidget state={cv} key={cv.id} />
			))}

			{cvs.length === 0 && <div className={styles.notCvs}>Сгенерированных CV нет...</div>}
		</div>
	)
}
