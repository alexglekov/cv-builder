import { InfoState } from './types'

import { serverApi } from '../../../../shared/api'
import { call, put } from 'redux-saga/effects'
import { UpdateUserInfoAction } from '../../../../entities/user'

export const actionHandler = function* (state: InfoState, meta: { token: string; userId: number }): any {
	const { token, userId } = meta

	yield call(() => serverApi.users.editUserInfo({ payload: state, token, userId }))

	yield put(UpdateUserInfoAction({ data: state }))
}
