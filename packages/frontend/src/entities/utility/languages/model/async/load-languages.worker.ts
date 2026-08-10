import { call, put } from 'redux-saga/effects'

import { serverApi } from '../../../../../shared/api'
import { appSelect } from '../../../../../shared/libs'

import { ErrorInLoadingLanguagesInfoAction, LoadingLanguagesInfoAction, LanguagesLoadedInfoAction } from '../actions'

export const loadLanguagesWorker = function* (): any {
	try {
		yield put(LoadingLanguagesInfoAction())

		const token = yield* appSelect((state) => state.auth.data?.accessToken)

		const data = yield call(() => serverApi.admin.languages.getAll({ token: token || '' }))

		yield put(LanguagesLoadedInfoAction({ data }))
	} catch (e: any) {
		return yield put(ErrorInLoadingLanguagesInfoAction({ message: 'error' }))
	}
}
