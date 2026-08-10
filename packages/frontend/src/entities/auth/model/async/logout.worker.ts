import { call, put } from 'redux-saga/effects'
import { serverApi } from '../../../../shared/api'
import { LogoutAction } from '../actions'

export const logoutUserWorker = function* (): any {
	try {
		yield call(() => serverApi.auth.logoutUser())

		yield put(LogoutAction())
	} catch (e: any) {
		yield put(LogoutAction())
	}
}
