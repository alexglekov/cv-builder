import React from 'react'

import { useAuthProcess } from '../process/auth'
import { useAppSelector } from '../shared/libs'
import { authSelectors, Roles } from '../entities/auth'
import { GlobalLoader } from '../shared/ui'
import { CVBuilderRoutes } from './routes'

export const CvBuilderRouting = () => {
	useAuthProcess()

	const isLoaded = useAppSelector(authSelectors.isLoaded)
	const auth = useAppSelector(authSelectors.authState)

	if (!isLoaded) {
		return <GlobalLoader />
	}

	return <CVBuilderRoutes role={auth?.role || Roles.NONE} />
}
