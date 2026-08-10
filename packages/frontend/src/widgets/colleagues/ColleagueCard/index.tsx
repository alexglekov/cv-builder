import React from 'react'
import { Roles } from '../../../entities/auth'

import { FullColleagueCard, IColleague } from '../../../entities/colleagues'
import { EditColleagueFeature, GotoColleagueFeature } from '../../../features/colleagues'
import { RemoveColleagueFeature } from '../../../features/colleagues/RemoveColleague'

import styles from './ColleagueCard.module.scss'

interface ColleagueCardProps {
	state: IColleague
	className?: string
	role: Roles
}

export const ColleagueCardWidget: React.FC<ColleagueCardProps> = (props: ColleagueCardProps) => {
	const { state, role } = props

	return (
		<div className={styles.wrapper}>
			<FullColleagueCard state={state} />
			<div className={styles.features}>
				{role === Roles.ADMIN && <EditColleagueFeature state={state} />}
				<GotoColleagueFeature userId={state.id} />
				<RemoveColleagueFeature className={styles.removeColleagueFeature} id={state.id} />
			</div>
		</div>
	)
}
