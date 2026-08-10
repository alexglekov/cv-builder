import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { authSelectors } from '../../entities/auth'

import { useAppSelector } from '../../shared/libs'
import { routes } from '../../shared/routes'
import { Header } from '../../widgets/Header'
import { Menu } from '../../widgets/Menu'
import { BotDailogWindowWidget } from '../../widgets/bot'

import styles from '../Pages.module.scss'
import { botSelectors } from '../../entities/bot'
import { Portal } from '../../shared/ui'

export const PrivateLayout = React.memo(() => {
	const auth = useAppSelector(authSelectors.authState)
	const isBotDialogOpened = useAppSelector(botSelectors.isBotDialogOpen)

	if (!auth) {
		return <Navigate to={routes.login.goto()} />
	}

	return (
		<article className={styles.wrapper}>
			<Header />
			<Menu role={auth.role} />
			<Outlet />
			{isBotDialogOpened && (
				<Portal type="bot">
					<BotDailogWindowWidget />
				</Portal>
			)}
		</article>
	)
})
