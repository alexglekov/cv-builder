import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../../shared/routes'

import { Icon } from '../../../shared/ui'

import styles from './GotoColleague.module.scss'

interface GotoColleagueFeatureProps {
	userId: number
}

export const GotoColleagueFeature: React.FC<GotoColleagueFeatureProps> = (props: GotoColleagueFeatureProps) => {
	const { userId } = props

	return (
		<Link to={routes.colleagues.colleague.goto(userId)} className={styles.wrapper}>
			<Icon type="collegues.link" />
		</Link>
	)
}
