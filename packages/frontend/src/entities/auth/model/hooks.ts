import { bindActionCreators } from 'redux'

import { useAppDispatch } from '../../../shared/libs'

import { SetAccessTokenAction } from './actions/set-access-token.action'
import { AsyncLogoutAction } from './actions/async/async-logout.action'
import { AsyncGetAccessTokenAction } from './actions/async/get-access-token.action'

export const useAuthActions = () => {
	const dispatch = useAppDispatch()

	return bindActionCreators(
		{
			getAccessToken: AsyncGetAccessTokenAction,
			setAccessToken: SetAccessTokenAction,
			logout: AsyncLogoutAction
		},
		dispatch
	)
}
