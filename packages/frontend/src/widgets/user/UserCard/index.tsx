import React, { useEffect, useMemo } from 'react'

import { UserFullCard, userSelectors, useUserActions } from '../../../entities/user'
import { ILanguage, languagesSelectors } from '../../../entities/utility'
import { EditUserFeature } from '../../../features/user'
import { useAppSelector } from '../../../shared/libs'
import { Frame, Loader } from '../../../shared/ui'

import styles from './UserCard.module.scss'

interface UserCardWidgetProps {
	userId: number
}

export const UserCardWidget: React.FC<UserCardWidgetProps> = (props: UserCardWidgetProps) => {
	const { userId } = props

	const languages = useAppSelector(languagesSelectors.languagesState)

	const user = useAppSelector(userSelectors.userState)
	const isLoading = useAppSelector(userSelectors.isLoading)
	const isFailed = useAppSelector(userSelectors.isFailed)
	const isLoaded = useAppSelector(userSelectors.isLoaded)

	const { loadUserInfo } = useUserActions()

	const languagesMap = useMemo(() => {
		return new Map<number, ILanguage>(languages.map((language) => [language.id, language]))
	}, [languages])

	useEffect(() => {
		if (!user) {
			loadUserInfo({ userId })
		}
	}, [user])

	if (isLoading) {
		return (
			<div className={styles.loaderWrapper}>
				<Loader />
			</div>
		)
	}

	if ((isLoaded && !user) || isFailed || !user) {
		return <div> Ошибка !!! </div>
	}

	return (
		<Frame className={styles.wrapper} title="Общая информация">
			<UserFullCard allowedLanguages={languagesMap} state={user} />
			<div className={styles.editBtn}>
				<EditUserFeature userId={userId} state={user} />
			</div>
		</Frame>
	)
}
