/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'

import { archiveProjectSelectors, useArchiveProjectActions } from '../model'

import { useAppSelector } from '../../../../shared/libs'
import { Icon, Loader, Portal } from '../../../../shared/ui'

import styles from './ArchiveProject.module.scss'

interface ArchiveProjectFeatureProps {
	projectId: number
	currentStatus: boolean
}

export const ArchiveProjectFeature: React.FC<ArchiveProjectFeatureProps> = (props: ArchiveProjectFeatureProps) => {
	const { projectId, currentStatus } = props

	const { archiveProject } = useArchiveProjectActions()

	const isLoading = useAppSelector(archiveProjectSelectors.isLoading)
	// const isLoaded = useAppSelector(archiveProjectSelectors.isLoaded)
	// const isFailed = useAppSelector(archiveProjectSelectors.isFailed)

	return (
		<>
			<div className={styles.wrapper} onClick={() => archiveProject({ id: projectId, actual: !currentStatus })}>
				<Icon type={currentStatus ? 'projects.archive' : 'projects.disarchive'} />
			</div>
			{isLoading && (
				<Portal>
					<div className={styles.modal}>
						<Loader />
					</div>
				</Portal>
			)}
		</>
	)
}
