import { call, put } from 'redux-saga/effects'
import { serverApi } from '../../../../shared/api'
import { appSelect } from '../../../../shared/libs'
import { ErrorInLoadingUserInfoAction, LoadingUserInfoAction, UserLoadedInfoAction } from '../actions'

export const loadUserWorker = function* ({ payload }: { payload: { userId: number } }): any {
	try {
		yield put(LoadingUserInfoAction())

		const { userId } = payload
		const token = yield* appSelect((state) => state.auth.data?.accessToken)

		const data = yield call(() => serverApi.users.getUserInfo({ token: token || '', userId }))

		yield put(UserLoadedInfoAction({ data }))
	} catch (e: any) {
		return yield put(ErrorInLoadingUserInfoAction({ message: 'error' }))
	}
}
