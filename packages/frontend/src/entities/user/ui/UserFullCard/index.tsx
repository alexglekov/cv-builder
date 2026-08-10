import React from 'react'

import { InfoBlock } from '../../../../shared/ui'

import { IUser } from '../../model'

import styles from './UserFullCard.module.scss'
import _ from 'lodash'
import { getGlobalSkills } from '../../lib'

import NoAvatarImage from '../../../../../public/images/no_avatar.png'
import { ILanguage } from '../../../utility'

interface UserFullCardProps {
	state: IUser
	allowedLanguages: Map<number, ILanguage>
}

export const UserFullCard: React.FC<UserFullCardProps> = React.memo((props: UserFullCardProps) => {
	const { state, allowedLanguages } = props

	const skills = getGlobalSkills(state, allowedLanguages)

	const skillsChunks = _.chunk(skills, 3)

	return (
		<div className={styles.info}>
			<div className={styles.avatar}>
				<img src={state.profileUri || NoAvatarImage} alt="" />
			</div>
			<div className={styles.credentialsAndOtherInfo}>
				<div className={styles.fio}>{`${state.name} ${state.surname}`}</div>
				<div className={styles.otherInfo}>
					{skillsChunks.map((block, blockIndex) => (
						<div className={styles.block} key={blockIndex}>
							{block.map((item, itemIndex) => (
								<InfoBlock
									key={itemIndex}
									childrenClassName={styles.blockInfo}
									className={styles.item}
									iconType={item.icon}
									title={item.title}
								>
									{item.body}
								</InfoBlock>
							))}
						</div>
					))}
				</div>
			</div>
		</div>
	)
})
