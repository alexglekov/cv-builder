/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'

import { useAppSelector } from '../../../../shared/libs'
import { Icon, Loader, Portal } from '../../../../shared/ui'

import { deleteCvSelectors, useDeleteCvActions } from '../model'

import styles from './DeleteCV.module.scss'

interface DeleteCVFeatureProps {
	cvKey: string
}

export const DeleteCVFeature: React.FC<DeleteCVFeatureProps> = (props: DeleteCVFeatureProps) => {
	const { cvKey } = props

	const { deleteCv } = useDeleteCvActions()

	const isLoading = useAppSelector(deleteCvSelectors.isLoading)

	return (
		<>
			<div
				className={styles.wrapper}
				onClick={() => {
					deleteCv({ key: cvKey })
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
