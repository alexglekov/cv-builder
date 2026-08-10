import { combineReducers } from 'redux'

import { authReducer } from '../../entities/auth'
import { userReducer } from '../../entities/user'
import { projectsReducer } from '../../entities/projects'
import { technologiesReducer, languagesReducer } from '../../entities/utility'

import { modalReducer } from '../../shared/ui'
import { archiveProjectReducer, deleteProjectReducer } from '../../features/projects'

import { storageReducer } from '../../entities/storage'
import { deleteCvReducer } from '../../features/storage'
import { professionalSkillsReducer } from '../../entities/professionalSkills'
import { colleaguesReducer } from '../../entities/colleagues'
import { meReducer } from '../../entities/me'
import { botReducer } from '../../entities/bot'
import { vacanciesReducer } from '../../entities/vacancies'

export const rootReducer = combineReducers({
	utility: combineReducers({
		technologies: technologiesReducer,
		languages: languagesReducer
	}),
	archiveProject: archiveProjectReducer,
	deleteProject: deleteProjectReducer,
	user: userReducer,
	auth: authReducer,
	projects: projectsReducer,
	colleagues: colleaguesReducer,
	modal: modalReducer,
	storage: storageReducer,
	deleteCv: deleteCvReducer,
	professionalSkills: professionalSkillsReducer,
	me: meReducer,
	bot: botReducer,
	vacancies: vacanciesReducer
})
