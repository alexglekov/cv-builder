import { InfoState } from './types'
import { call, put } from 'redux-saga/effects'

import { serverApi } from '../../../../shared/api'
import { EditedTechnologieInfoAction } from '../../../../entities/utility'

export const actionHandler = function* (state: InfoState, meta: { token: string }): any {
	const { token } = meta
	yield call(() =>
		serverApi.admin.technologies.editTechnologieById({ payload: { name: state.name }, technologieId: state.id, token })
	)

	yield put(EditedTechnologieInfoAction({ id: state.id, data: { ...state } }))
}
