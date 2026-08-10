/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { PropsWithChildren, useEffect } from 'react'

import { useAppSelector } from '../../../../shared/libs'
import { Loader, Portal } from '../../../../shared/ui'
import { technologiesSelectors, useTechnologiesActions } from '../model'

import styles from './TechnologieDependency.module.scss'

interface TechnologieDependencyProps extends PropsWithChildren {
	onClose?: () => void
}

export const TechnologieDependency: React.FC<TechnologieDependencyProps> = (props: TechnologieDependencyProps) => {
	const { onClose, children } = props

	const { loadTechnologiesInfo } = useTechnologiesActions()

	const isLoaded = useAppSelector(technologiesSelectors.isLoaded)
	const isLoading = useAppSelector(technologiesSelectors.isLoading)
	const isFailed = useAppSelector(technologiesSelectors.isFailed)

	useEffect(() => {
		if (!isLoaded) {
			loadTechnologiesInfo()
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
