import { call, put } from 'redux-saga/effects'
import { serverApi } from '../../../../shared/api'
import { appSelect } from '../../../../shared/libs'
import { ErrorInLoadingMeInfoAction, LoadingMeInfoAction, MeLoadedInfoAction } from '../actions'

export const loadMeWorker = function* ({ payload }: { payload: { userId: number } }): any {
	try {
		yield put(LoadingMeInfoAction())

		const { userId } = payload
		const token = yield* appSelect((state) => state.auth.data?.accessToken)

		const data = yield call(() => serverApi.users.getUserInfo({ token: token || '', userId }))

		yield put(MeLoadedInfoAction({ data }))
	} catch (e: any) {
		return yield put(ErrorInLoadingMeInfoAction({ message: 'error' }))
	}
}
