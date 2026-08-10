import { takeEvery } from 'redux-saga/effects'

import { ArhiveProjectAction } from '../actions/async'

import { archiveProjectActionWorker } from './handle-action.worker'

export const archiveProjectActionsWatcher = function* () {
	yield takeEvery(ArhiveProjectAction, archiveProjectActionWorker)
}
