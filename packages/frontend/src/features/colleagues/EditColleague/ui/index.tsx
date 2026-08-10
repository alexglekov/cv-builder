/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames'
import React, { useCallback, useState } from 'react'

import { IColleague } from '../../../../entities/colleagues'
import { EditColleagueModal } from './modal'

import { Icon } from '../../../../shared/ui'

import styles from './EditColleague.module.scss'

interface EditColleagueFeatureProps {
	state: IColleague
	className?: string
}

export const EditColleagueFeature: React.FC<EditColleagueFeatureProps> = (props: EditColleagueFeatureProps) => {
	const { className, state } = props

	const [isOpenedEditPopUp, setOpenedEditPopUp] = useState(false)

	const close = useCallback(() => setOpenedEditPopUp(false), [])

	return (
		<>
			<div className={classNames(styles.wrapper, className)} onClick={() => setOpenedEditPopUp(true)}>
				<Icon type="moderation.settings" />
			</div>
			{isOpenedEditPopUp && <EditColleagueModal state={state} onClose={close} />}
		</>
	)
}
