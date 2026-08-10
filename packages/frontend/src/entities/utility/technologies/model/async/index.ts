import { takeEvery } from 'redux-saga/effects'

import { loadTechnologiesInfo } from '../actions/async'

import { loadTechnologiesWorker } from './load-technologies.worker'

export const technologiesAsyncActionsWatcher = function* () {
	yield takeEvery(loadTechnologiesInfo, loadTechnologiesWorker)
}
