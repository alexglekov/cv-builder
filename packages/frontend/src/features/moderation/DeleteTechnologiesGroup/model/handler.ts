import { InfoState } from './types'
import { call, put } from 'redux-saga/effects'

import { serverApi } from '../../../../shared/api'
import { DeletedTechtypeAction } from '../../../../entities/utility'

export const actionHandler = function* (state: InfoState, meta: { token: string }): any {
	const { token } = meta

	yield call(() => serverApi.admin.technologies.deleteTechtypeById({ techtypeId: state.id, token }))

	yield put(DeletedTechtypeAction({ id: state.id }))
}
