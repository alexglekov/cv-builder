import { bindActionCreators } from 'redux'

import { useAppDispatch } from '../../../shared/libs'

import * as actiontCreators from './actions/async'

export const useUserActions = () => {
	const dispatch = useAppDispatch()

	return bindActionCreators({ ...actiontCreators }, dispatch)
}
