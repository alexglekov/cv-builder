import { uris } from './apis'
import { users } from './user'
import { projects } from './projects'
import { auth } from './auth'
import { storage } from './storage'
import { professionalSkills } from './professionalSkills'
import { admin } from './admin'
import { vacancies } from './vacancies'

export const serverApi = {
	users,
	projects,
	storage,
	professionalSkills,
	auth,
	admin,
	vacancies,
	uris
}
