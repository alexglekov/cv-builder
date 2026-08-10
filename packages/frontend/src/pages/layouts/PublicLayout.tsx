import { Outlet, Navigate } from 'react-router-dom'

import { authSelectors } from '../../entities/auth'

import { useAppSelector } from '../../shared/libs'
import { routes } from '../../shared/routes'

export const PublicLayout = () => {
	const auth = useAppSelector(authSelectors.authState)

	if (auth) {
		return <Navigate to={routes.profile.goto()} />
	}

	return <Outlet />
}
