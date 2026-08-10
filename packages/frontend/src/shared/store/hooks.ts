import { bindActionCreators } from 'redux'

import { EntitiesClearStateAction } from './actions'

import { useAppDispatch } from '../libs'

export const useGlobalActions = () => {
	const dispatch = useAppDispatch()

	return bindActionCreators(
		{
			clearEntitiesStates: EntitiesClearStateAction
		},
		dispatch
	)
}
