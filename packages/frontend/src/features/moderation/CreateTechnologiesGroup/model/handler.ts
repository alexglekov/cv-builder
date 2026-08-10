import { InfoState } from './types'
import { call, put } from 'redux-saga/effects'

import { serverApi } from '../../../../shared/api'
import { NewTechnologieGroupCreatedAction } from '../../../../entities/utility'

export const actionHandler = function* (state: InfoState, meta: { token: string }): any {
	const { token } = meta
	const newGroupTechnologies = yield call(() => serverApi.admin.technologies.createTechtype({ payload: state, token }))

	yield put(NewTechnologieGroupCreatedAction({ data: { ...newGroupTechnologies } }))
}
