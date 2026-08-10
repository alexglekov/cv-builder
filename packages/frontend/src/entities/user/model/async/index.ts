import { takeEvery } from 'redux-saga/effects'

import { loadUserInfo } from '../actions/async'

import { loadUserWorker } from './load-user.worker'

export const userAsyncActionsWatcher = function* () {
	yield takeEvery(loadUserInfo, loadUserWorker)
}
