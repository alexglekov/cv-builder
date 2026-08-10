import { call, put } from 'redux-saga/effects'
import { serverApi } from '../../../../shared/api'
import { LogoutAction, SetAccessTokenAction } from '../actions'

export const getAccessTokenWorker = function* (): any {
	try {
		const data = yield call(() => serverApi.auth.getAccessToken())

		yield put(SetAccessTokenAction({ accessToken: data }))
	} catch (e: any) {
		yield put(LogoutAction())
	}
}
