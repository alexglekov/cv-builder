import { takeEvery } from 'redux-saga/effects'

import { DeleteProjectAction } from '../actions/async'

import { deleteProjectActionWorker } from './handle-action.worker'

export const deleteProjectActionsWatcher = function* () {
	yield takeEvery(DeleteProjectAction, deleteProjectActionWorker)
}
