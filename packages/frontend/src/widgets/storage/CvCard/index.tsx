import React, { useState } from 'react'

import classNames from 'classnames'

import { DeleteCVFeature } from '../../../features/storage'
import { FullCvCard, ICV, SchortCvCard } from '../../../entities/storage'
import { Icon, RoundButton } from '../../../shared/ui'

import styles from './CvCard.module.scss'

interface CvCardProps {
	state: ICV
	className?: string
}

export const CvCardWidget: React.FC<CvCardProps> = (props: CvCardProps) => {
	const { state } = props

	const [isOpend, setIsOpend] = useState(false)

	console.log({ cvState: state })

	return (
		<div className={classNames(styles.wrapper, isOpend ? styles.isOpend : styles.isNotOpend)}>
			<div className={styles.cardWrapper}>
				{isOpend ? <FullCvCard state={state} /> : <SchortCvCard state={state} />}
				<div className={styles.features}>
					<a className={styles.downloadBtn} href={state?.downloadUri?.uri} download target={'_blank'} rel="noreferrer">
						<Icon type="storage.download" />
					</a>
					<DeleteCVFeature cvKey={state.key} />
				</div>
			</div>
			<RoundButton className={styles.circleBtn} onClick={() => setIsOpend((value) => !value)} />
		</div>
	)
}
