import { takeEvery } from 'redux-saga/effects'

import { loadMeInfo } from '../actions/async'

import { loadMeWorker } from './load-me.worker'

export const meAsyncActionsWatcher = function* () {
	yield takeEvery(loadMeInfo, loadMeWorker)
}
