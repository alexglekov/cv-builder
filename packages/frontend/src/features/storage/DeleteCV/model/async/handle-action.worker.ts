import { call, put } from 'redux-saga/effects'
import { DeletedCvInfoAction } from '../../../../../entities/storage'
import { serverApi } from '../../../../../shared/api'

import { appSelect } from '../../../../../shared/libs'

import { DeletingCvAction, ErrorInDeleteCvAction, CvDeletedComplitedAction } from '../actions'

export const deleteCvActionWorker = function* ({ payload }: any): any {
	try {
		const { key } = payload

		yield put(DeletingCvAction())

		const token = yield* appSelect((state) => state.auth.data?.accessToken)

		yield call(() => serverApi.storage.deleteCvStatusById({ payload: { key }, token: token || '' }))

		yield put(DeletedCvInfoAction({ key }))
		yield put(CvDeletedComplitedAction())
	} catch (e: any) {
		console.log(e)
		return yield put(ErrorInDeleteCvAction({ message: 'error' }))
	}
}
