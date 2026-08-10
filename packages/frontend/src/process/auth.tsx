import { useEffect } from 'react'

import { authSelectors, useAuthActions } from '../entities/auth'
import { useAppSelector } from '../shared/libs'

export const useAuthProcess = () => {
	const { getAccessToken } = useAuthActions()

	const isLoaded = useAppSelector(authSelectors.isLoaded)
	const isAuth = useAppSelector(authSelectors.isAuthState)

	useEffect(() => {
		if (!isAuth || !isLoaded) {
			getAccessToken()
		}
	}, [isLoaded])
}
