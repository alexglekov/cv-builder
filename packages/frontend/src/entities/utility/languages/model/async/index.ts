import { takeEvery } from 'redux-saga/effects'

import { loadLanguagesInfo } from '../actions/async'

import { loadLanguagesWorker } from './load-languages.worker'

export const languagesAsyncActionsWatcher = function* () {
	yield takeEvery(loadLanguagesInfo, loadLanguagesWorker)
}
