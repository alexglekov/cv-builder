import React from 'react'
import { authSelectors } from '../../entities/auth'

import { GenerateCVFeature, StorageFiltersFeature } from '../../features/storage'
import { useAppSelector } from '../../shared/libs'
import { CvsCardsWidget } from '../../widgets/storage/CvsCards'

import styles from './Storage.module.scss'

export const StoragePage = () => {
	const userId = useAppSelector(authSelectors.userId)

	return (
		<article className={styles.wrapper}>
			<header className={styles.filters}>
				<StorageFiltersFeature />
				<GenerateCVFeature userId={userId!} className={styles.whiteButton} />
			</header>
			<section className={styles.content}>
				<CvsCardsWidget userId={userId!} />
			</section>
		</article>
	)
}
