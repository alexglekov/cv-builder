import { InfoState } from './types'
import { call, put } from 'redux-saga/effects'

import { serverApi } from '../../../../shared/api'
import { NewCvCreatedAction } from '../../../../entities/storage'

export const actionHandler = function* (state: InfoState, meta: { token: string; userId: number }): any {
	const { token, userId } = meta
	const newProject = yield call(() => serverApi.storage.generateCV({ payload: state, token, userId }))

	yield put(NewCvCreatedAction({ data: { ...state, ...newProject } }))
}
