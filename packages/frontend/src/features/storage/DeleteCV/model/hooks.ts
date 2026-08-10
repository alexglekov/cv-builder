import { useMemo } from 'react'
import { bindActionCreators } from 'redux'

import { useAppDispatch } from '../../../../shared/libs'

import * as asyncActions from './actions/async/delete-project.action'

export const useDeleteCvActions = () => {
	const dispatch = useAppDispatch()

	return useMemo(() => {
		return bindActionCreators(
			{
				deleteCv: asyncActions.DeleteCvAction
			},
			dispatch
		)
	}, [])
}
