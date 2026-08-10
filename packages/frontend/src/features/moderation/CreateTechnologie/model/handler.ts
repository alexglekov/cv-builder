import { InfoState } from './types'
import { call, put } from 'redux-saga/effects'

import { serverApi } from '../../../../shared/api'
import { NewTechnologieCreatedAction } from '../../../../entities/utility'

export const actionHandler = function* (state: InfoState, meta: { token: string }): any {
	const { token } = meta
	const newTehnologie = yield call(() => serverApi.admin.technologies.createTechnologie({ payload: state, token }))

	yield put(NewTechnologieCreatedAction({ data: { technologie: newTehnologie, techtype: state.techtype } }))
}
