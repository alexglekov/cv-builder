import React from 'react'
import { authSelectors } from '../../entities/auth'
import { LanguageDependency } from '../../entities/utility'
import { useAppSelector } from '../../shared/libs'

import { UserAdditionalInfoWidget, UserCardWidget } from '../../widgets/user'

import styles from './Profile.module.scss'

export const ProfilePage: React.FC = () => {
	const userId = useAppSelector(authSelectors.userId)

	return (
		<article className={styles.wrapper}>
			<LanguageDependency>
				<UserCardWidget userId={userId!} />
				<UserAdditionalInfoWidget />
			</LanguageDependency>
		</article>
	)
}
