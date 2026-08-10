import { bindActionCreators } from 'redux'

import { useAppDispatch } from '../../../shared/libs'

import * as actiontCreators from './actions/async'
import * as changeFilters from './actions/change-filters.action'

export const useColleaguesActions = () => {
	const dispatch = useAppDispatch()

	return bindActionCreators(
		{
			...actiontCreators,
			...changeFilters
		},
		dispatch
	)
}
