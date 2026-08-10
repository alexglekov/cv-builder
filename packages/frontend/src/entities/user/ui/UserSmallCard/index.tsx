import classNames from 'classnames'
import React, { useEffect } from 'react'

import { useAppSelector } from '../../../../shared/libs'
import { authSelectors } from '../../../auth'
import { meSelectors, useMeActions } from '../../../me'

import NoAvatarImage from '../../../../../public/images/no_avatar.png'

import styles from './UserSmallCard.module.scss'

interface UserSmallCardProps {
	className?: string
	// state: IUser
}

export const UserSmallCard: React.FC<UserSmallCardProps> = (props: UserSmallCardProps) => {
	const { className } = props

	const { loadMeInfo } = useMeActions()

	const userId = useAppSelector(authSelectors.userId)
	const user = useAppSelector(meSelectors.meState)
	const isLoading = useAppSelector(meSelectors.isLoading)
	const isFailed = useAppSelector(meSelectors.isFailed)
	const isLoaded = useAppSelector(meSelectors.isLoaded)

	useEffect(() => {
		if (!user && !isLoaded && userId) {
			loadMeInfo({ userId })
		}
	}, [userId])

	if (isLoading) {
		return <div></div> // Загрузка данных компоненты
	}

	if ((isLoaded && !user) || isFailed || !user) {
		return <div> Ошибка !!! </div>
	}

	return (
		<div className={classNames(styles.wrapper, className)}>
			<div className={styles.info}>
				<div className={styles.avatar}>
					<img src={user.profileUri || NoAvatarImage} alt="" />
				</div>
				<div className={styles.credentials}>{`${user.name} ${user.surname}`}</div>
			</div>
		</div>
	)
}
