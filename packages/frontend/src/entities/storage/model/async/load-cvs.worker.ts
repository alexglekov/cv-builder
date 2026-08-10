import { call, put } from 'redux-saga/effects'

import { serverApi } from '../../../../shared/api'
import { appSelect } from '../../../../shared/libs'

import { ErrorInLoadingStorageInfoAction, LoadingStorageInfoAction, StorageLoadedInfoAction } from '../actions'

export const loadCvWorker = function* ({ payload }: { payload: { userId: number } }): any {
	try {
		const { userId } = payload

		yield put(LoadingStorageInfoAction())

		const token = yield* appSelect((state) => state.auth.data?.accessToken)

		const data = yield call(() => serverApi.storage.getAllCvInfo({ token: token || '', userId }))

		yield put(StorageLoadedInfoAction({ data }))
	} catch (e: any) {
		return yield put(ErrorInLoadingStorageInfoAction({ message: 'error' }))
	}
}
