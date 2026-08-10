import { takeEvery } from 'redux-saga/effects'

import { loadProfessionalSkills } from '../actions/async'

import { loadProfessionalSkillsWorker } from './load.worker'

export const professionalSkillsAsyncActionsWatcher = function* () {
	yield takeEvery(loadProfessionalSkills, loadProfessionalSkillsWorker)
}
