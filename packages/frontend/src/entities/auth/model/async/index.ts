import { takeEvery } from 'redux-saga/effects'

import { AsyncLogoutAction } from '../actions/async'
import { AsyncGetAccessTokenAction } from '../actions/async/get-access-token.action'

import { getAccessTokenWorker } from './get-access-token.worker'
import { logoutUserWorker } from './logout.worker'

export const authAsyncActionsWatcher = function* () {
	yield takeEvery(AsyncLogoutAction, logoutUserWorker)
	yield takeEvery(AsyncGetAccessTokenAction, getAccessTokenWorker)
}
