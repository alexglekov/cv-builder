import { InfoState } from './types'
import { call, put } from 'redux-saga/effects'

import { serverApi } from '../../../../shared/api'
import { EditTechnologieGroupCreatedAction } from '../../../../entities/utility'

export const actionHandler = function* (state: InfoState, meta: { token: string }): any {
	const { token } = meta
	const newGroupTechnologies = yield call(() =>
		serverApi.admin.technologies.editTechtypeById({ payload: { id: state.id, name: state.name }, token })
	)

	yield put(EditTechnologieGroupCreatedAction({ data: { ...newGroupTechnologies } }))
}
