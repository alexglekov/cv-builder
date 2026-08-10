import classNames from 'classnames'
import React from 'react'
import { InfoBlock } from '../../../../shared/ui'
import { convertRoleToString } from '../../libs'

import { IColleague } from '../../model'

import NoAvatarImage from '../../../../../public/images/no_avatar.png'
import styles from './FullCard.module.scss'

interface FullColleagueCardProps {
	state: IColleague
	className?: string
}

export const FullColleagueCard: React.FC<FullColleagueCardProps> = (props: FullColleagueCardProps) => {
	const { state, className } = props

	return (
		<div className={classNames(styles.wrapper, className)}>
			<div className={styles.info}>
				<div className={styles.avatar}>
					<img src={state.profileUri || NoAvatarImage} alt="" />
				</div>
				<div className={styles.credentials}>
					<div className={styles.fio}>{`${state.name} ${state.surname}`}</div>
				</div>
			</div>
			<div className={styles.otherInfo}>
				<InfoBlock iconType="profile.education" title="Роль" className={styles.role}>
					{convertRoleToString(state.role)}
				</InfoBlock>
			</div>
		</div>
	)
}
