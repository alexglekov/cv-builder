import { InfoState } from './types'
import { call, put } from 'redux-saga/effects'

import { serverApi } from '../../../../shared/api'
import { ColleagueRemovedAction } from '../../../../entities/colleagues'

export const actionHandler = function* (state: InfoState, meta: { token: string }): any {
	const { token } = meta

	yield call(() => serverApi.admin.users.removeColleagueById({ colleagueId: state.id, token }))

	yield put(ColleagueRemovedAction({ colleagueId: state.id }))
}
