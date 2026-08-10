import { bindActionCreators } from 'redux'

import { useAppDispatch } from '../../../shared/libs'

import * as actiontCreators from './actions/async'

export const useVacanciesActions = () => {
	const dispatch = useAppDispatch()

	return bindActionCreators({ ...actiontCreators }, dispatch)
}
