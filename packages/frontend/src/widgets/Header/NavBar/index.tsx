/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from 'classnames'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { authSelectors, useAuthActions } from '../../../entities/auth'

import { UserSmallCard } from '../../../entities/user'
import { GenerateCVFeature } from '../../../features/storage'
import { useAppSelector } from '../../../shared/libs'
import { routes } from '../../../shared/routes'
import { Icon } from '../../../shared/ui'

import styles from './NavBar.module.scss'
import { BotIconFeature } from '../../../features/bot'

export const HeaderNavBar = React.memo(() => {
	const userId = useAppSelector(authSelectors.userId)

	const [isOpend, setOpend] = useState(false)

	const { logout } = useAuthActions()

	return (
		<div className={styles.wrapper}>
			<BotIconFeature className={styles.generateCvButton} />
			<GenerateCVFeature userId={userId!} isIcon className={styles.generateCvButton} />
			<div onClick={() => setOpend((currentValue) => !currentValue)} className={styles.profile}>
				<UserSmallCard className={styles.navMenu} />
			</div>
			<div className={classNames(styles.headerArrow, isOpend ? styles.opened : '')}>
				<Icon type="header.arrow" />
			</div>
			{isOpend && (
				<div className={styles.dropbox}>
					<Link
						to={routes.profile.goto()}
						onClick={() => {
							setOpend(false)
						}}
						className={styles.item}
					>
						<Icon type={'menu.profile'} />
						Профиль
					</Link>
					<Link
						to={routes.login.goto()}
						onClick={() => {
							setOpend(false)
							logout()
						}}
						className={styles.item}
					>
						<Icon type={'menu.logout'} />
						Выход
					</Link>
				</div>
			)}
		</div>
	)
})
