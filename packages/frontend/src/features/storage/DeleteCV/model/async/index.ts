import { takeEvery } from 'redux-saga/effects'

import { DeleteCvAction } from '../actions/async'

import { deleteCvActionWorker } from './handle-action.worker'

export const deleteCvActionsWatcher = function* () {
	yield takeEvery(DeleteCvAction, deleteCvActionWorker)
}
