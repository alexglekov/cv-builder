/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { PropsWithChildren, useEffect } from 'react'

import { useAppSelector } from '../../../../shared/libs'
import { Loader, Portal } from '../../../../shared/ui'
import { languagesSelectors, useLanguagesActions } from '../model'

import styles from './LanguagesDependency.module.scss'

interface LanguageDependencyProps extends PropsWithChildren {
	onClose?: () => void
}

export const LanguageDependency: React.FC<LanguageDependencyProps> = (props: LanguageDependencyProps) => {
	const { onClose, children } = props

	const { loadLanguagesInfo } = useLanguagesActions()

	const isLoaded = useAppSelector(languagesSelectors.isLoaded)
	const isLoading = useAppSelector(languagesSelectors.isLoading)
	const isFailed = useAppSelector(languagesSelectors.isFailed)

	useEffect(() => {
		if (!isLoaded) {
			loadLanguagesInfo()
		}
	}, [])

	if (isFailed) {
		return <div>Ошибка!!!!</div>
	}

	return (
		<>
			{isLoading ? (
				<Portal>
					<div className={styles.modal} onClick={onClose}>
						<div className={styles.loader}>
							<Loader />
						</div>
					</div>
				</Portal>
			) : (
				children
			)}
		</>
	)
}
