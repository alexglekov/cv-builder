import { takeEvery } from 'redux-saga/effects'

import { loadProjectsInfo } from '../actions/async'

import { loadProjectsWorker } from './load-projects.worker'

export const projectsAsyncActionsWatcher = function* () {
	yield takeEvery(loadProjectsInfo, loadProjectsWorker)
}
