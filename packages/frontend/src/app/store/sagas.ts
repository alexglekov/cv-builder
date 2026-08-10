import { all } from 'redux-saga/effects'

import { userSagasWatchers } from '../../entities/user'
import { projectsSagasWatchers } from '../../entities/projects'
import { languagesSagasWatchers, technologiesSagasWatchers } from '../../entities/utility'
import { modalSagasWatchers } from '../../shared/ui'
import { archiveProjectSagasWatchers, deleteProjectSagasWatchers } from '../../features/projects'
import { authAsyncActionsWatchers } from '../../entities/auth'
import { storageSagasWatchers } from '../../entities/storage'
import { deleteCvSagasWatchers } from '../../features/storage'
import { professionalSkillsSagasWatchers } from '../../entities/professionalSkills'
import { colleaguesSagasWatchers } from '../../entities/colleagues/model'
import { meSagasWatchers } from '../../entities/me'
import { vacanciesSagasWatchers } from '../../entities/vacancies'

export const rootWatcher = function* () {
	yield all([
		userSagasWatchers.userAsyncActionsWatcher(),
		projectsSagasWatchers.projectsAsyncActionsWatcher(),
		modalSagasWatchers.modalActionsWatcher(),
		archiveProjectSagasWatchers.archiveProjectActionsWatcher(),
		deleteProjectSagasWatchers.deleteProjectActionsWatcher(),
		authAsyncActionsWatchers.authAsyncActionsWatcher(),
		storageSagasWatchers.storageAsyncActionsWatcher(),
		deleteCvSagasWatchers.deleteCvActionsWatcher(),
		professionalSkillsSagasWatchers.professionalSkillsAsyncActionsWatcher(),
		colleaguesSagasWatchers.colleaguesAsyncActionsWatcher(),
		meSagasWatchers.meAsyncActionsWatcher(),
		technologiesSagasWatchers.technologiesAsyncActionsWatcher(),
		languagesSagasWatchers.languagesAsyncActionsWatcher(),
		vacanciesSagasWatchers.vacanciesAsyncActionsWatcher()
	])
}
