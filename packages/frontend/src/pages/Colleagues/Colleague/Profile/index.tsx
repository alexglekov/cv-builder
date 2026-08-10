import React from 'react'
import { useParams } from 'react-router-dom'
import { LanguageDependency } from '../../../../entities/utility'

import { UserAdditionalInfoWidget, UserCardWidget } from '../../../../widgets/user'

import styles from './ColleagueProfilePage.module.scss'

export const ColleagueProfilePage: React.FC = () => {
	const param = useParams()

	return (
		<article className={styles.wrapper}>
			<LanguageDependency>
				<UserCardWidget userId={Number(param.id)} />
				<UserAdditionalInfoWidget />
			</LanguageDependency>
		</article>
	)
}
