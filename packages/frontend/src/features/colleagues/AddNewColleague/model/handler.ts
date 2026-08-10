import { InfoState } from './types'
import { call, put } from 'redux-saga/effects'

import { serverApi } from '../../../../shared/api'
import { AddNewColleagueAction } from '../../../../entities/colleagues'

export const actionHandler = function* (state: InfoState, meta: { token: string }): any {
	const { token } = meta
	const user = yield call(() => serverApi.admin.users.addNewColleague({ payload: state, token }))

	yield put(AddNewColleagueAction({ data: user }))
}
