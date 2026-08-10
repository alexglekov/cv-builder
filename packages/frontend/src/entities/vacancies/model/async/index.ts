import { takeEvery } from 'redux-saga/effects'

import { deleteVacancy, loadVacanciesInfo } from '../actions/async'

import { loadVacanciesWorker } from './load-vacancies.worker'
import { deleteVacancyWorker } from './delete-vacancy.worker'

export const vacanciesAsyncActionsWatcher = function* () {
	yield takeEvery(loadVacanciesInfo, loadVacanciesWorker)
	yield takeEvery(deleteVacancy, deleteVacancyWorker)
}
