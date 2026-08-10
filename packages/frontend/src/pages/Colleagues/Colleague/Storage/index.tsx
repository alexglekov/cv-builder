import React from 'react'
import { useParams } from 'react-router-dom'

import { GenerateCVFeature, StorageFiltersFeature } from '../../../../features/storage'
import { CvsCardsWidget } from '../../../../widgets/storage/CvsCards'

import styles from './ColleagueStorage.module.scss'

export const ColleagueStoragePage = () => {
	const param = useParams()

	return (
		<article className={styles.wrapper}>
			<header className={styles.filters}>
				<StorageFiltersFeature />
				<GenerateCVFeature userId={Number(param.id)} className={styles.whiteButton} />
			</header>
			<section className={styles.content}>
				<CvsCardsWidget userId={Number(param.id)} />
			</section>
		</article>
	)
}
