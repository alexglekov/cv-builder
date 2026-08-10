import { takeEvery } from 'redux-saga/effects'

import { loadColleaguesInfo } from '../actions/async'

import { loadColleaguesWorker } from './load-colleagues.worker'

export const colleaguesAsyncActionsWatcher = function* () {
	yield takeEvery(loadColleaguesInfo, loadColleaguesWorker)
}
