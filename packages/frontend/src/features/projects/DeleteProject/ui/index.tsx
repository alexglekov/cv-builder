/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'

import { useAppSelector } from '../../../../shared/libs'
import { Icon, Loader, Portal } from '../../../../shared/ui'

import { deleteProjectSelectors, useDeleteProjectActions } from '../model'

import styles from './DeleteProject.module.scss'

interface DeleteProjectFeatureProps {
	projectId: number
}

export const DeleteProjectFeature: React.FC<DeleteProjectFeatureProps> = (props: DeleteProjectFeatureProps) => {
	const { projectId } = props

	const { deleteProject } = useDeleteProjectActions()

	const isLoading = useAppSelector(deleteProjectSelectors.isLoading)
	// const isLoaded = useAppSelector(deleteProjectSelectors.isLoaded)
	// const isFailed = useAppSelector(deleteProjectSelectors.isFailed)

	return (
		<>
			<div
				className={styles.wrapper}
				onClick={() => {
					deleteProject({ id: projectId })
				}}
			>
				<Icon type="projects.bin" />
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
