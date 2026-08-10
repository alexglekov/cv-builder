export const uris = {
	posts: {
		signIn: 'api/auth20/google/sign-in',
		localSignIn: 'api/auth/sign-in',
		localSignUp: 'api/auth/sign-up',
		refreshTokens: 'api/auth/tokens/refresh-tokens',
		createProject(id: number) {
			return `api/projects/${id}`
		},
		addNewColleague: 'api/admin/user',
		createTechtype: 'api/admin/techtype',
		createTechnologie: 'api/admin/technology',
		addLanguage: 'api/admin/language',
		signOut: 'api/auth/tokens/sign-out',
		generateCV(id: number) {
			return `api/doc/create/${id}`
		}
	},
	gets: {
		allLanguages: 'api/admin/language',
		allTechnologies: 'api/admin/technology',
		allTechtypes: 'api/admin/techtype',

		allColleagues: 'api/profile/info/list',
		userInfo(id: number) {
			return `api/profile/info/${id}`
		},
		allProjects(id: number) {
			return `api/projects/info/${id}`
		},
		allProfessionalSkills(id: number) {
			return `api/projects/techtable/${id}`
		},
		allCV(id: number) {
			return `api/doc/list/${id}`
		},
		allSkills: 'api/projects/skills',

		vacanciesByUserId(userId: number) {
			return `api/vacancies/${userId}`
		}
	},
	patchs: {
		changeProjectStatusById(id: number) {
			return `api/projects/${id}`
		}
	},
	deletes: {
		deleteLanguageById(languageId: number) {
			return `api/admin/language/${languageId}`
		},
		deleteProjectStatusById(id: number) {
			return `api/projects/${id}`
		},
		deleteVacancyById(id: string) {
			return `api/vacancies/${id}`
		},
		deleteCvStatusByKey(key: string) {
			return `api/doc/${key}`
		},
		deleteTechnologieById(id: number) {
			return `api/admin/technology/${id}`
		},
		deleteTechtypeById(id: number) {
			return `api/admin/techtype/${id}`
		},
		deleteColleagueById(userId: number) {
			return `api/admin/user/${userId}`
		}
	},

	puts: {
		updateTechnologieById: 'api/admin/technology',
		updateTechtypeById: 'api/admin/techtype',
		changeUserRoleById(userId: number) {
			return `api/admin/role/${userId}`
		},
		editLanguage: 'api/admin/language',
		userInfo(id: number) {
			return `api/profile/info/${id}`
		}
	}
}
