import { useMemo } from 'react'
import { bindActionCreators } from 'redux'

import { useAppDispatch } from '../../../../shared/libs'

import * as asyncActions from './actions/async/arhive-project.action'

export const useArchiveProjectActions = () => {
	const dispatch = useAppDispatch()

	return useMemo(() => {
		return bindActionCreators(
			{
				archiveProject: asyncActions.ArhiveProjectAction
			},
			dispatch
		)
	}, [])
}
