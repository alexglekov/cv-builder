import { call, put } from 'redux-saga/effects'

import { serverApi } from '../../../../shared/api'
import { appSelect } from '../../../../shared/libs'

import { ErrorInLoadingColleaguesInfoAction, LoadingColleaguesInfoAction, ColleaguesLoadedInfoAction } from '../actions'

export const loadColleaguesWorker = function* (): any {
	try {
		yield put(LoadingColleaguesInfoAction())

		const token = yield* appSelect((state) => state.auth.data?.accessToken)

		const data = yield call(() => serverApi.admin.users.getColleagues({ token: token || '' }))

		yield put(ColleaguesLoadedInfoAction({ data }))
	} catch (e: any) {
		return yield put(ErrorInLoadingColleaguesInfoAction({ message: 'error' }))
	}
}
