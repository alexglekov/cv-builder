import { takeEvery } from 'redux-saga/effects'

import { loadAllCvInfo } from '../actions/async'

import { loadCvWorker } from './load-cvs.worker'

export const storageAsyncActionsWatcher = function* () {
	yield takeEvery(loadAllCvInfo, loadCvWorker)
}
