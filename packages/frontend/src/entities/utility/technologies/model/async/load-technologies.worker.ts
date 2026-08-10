import { call, put } from 'redux-saga/effects'

import { serverApi } from '../../../../../shared/api'
import { appSelect } from '../../../../../shared/libs'

import { ErrorInLoadingTechnologiesInfoAction, LoadingTechnologiesInfoAction, TechnologiesLoadedInfoAction } from '../actions'

export const loadTechnologiesWorker = function* (): any {
	try {
		yield put(LoadingTechnologiesInfoAction())

		const token = yield* appSelect((state) => state.auth.data?.accessToken)

		const data = yield call(() => serverApi.admin.technologies.getAllTechnologies({ token: token || '' }))

		yield put(TechnologiesLoadedInfoAction({ data }))
	} catch (e: any) {
		return yield put(ErrorInLoadingTechnologiesInfoAction({ message: 'error' }))
	}
}
