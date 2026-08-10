export const routes = {
	profile: {
		path: '/',
		goto() {
			return '/'
		}
	},
	projects: {
		path: 'projects',
		goto() {
			return '/projects'
		},
		archive: {
			path: 'archive',
			goto() {
				return '/projects/archive'
			}
		},
		active: {
			path: '',
			goto() {
				return '/'
			}
		}
	},
	skills: {
		path: 'skills',
		goto() {
			return '/skills'
		}
	},
	vacancies: {
		path: 'vacancies',
		goto() {
			return '/vacancies'
		}
	},
	storage: {
		path: 'storage',
		goto() {
			return '/storage'
		}
	},
	login: {
		path: 'login',
		goto() {
			return '/login'
		}
	},
	colleagues: {
		path: `colleagues`,
		goto() {
			return '/colleagues'
		},

		colleague: {
			path: ':id',
			goto(userId: number) {
				return `/colleagues/${userId}/profile`
			},

			profile: {
				path: 'profile',
				goto(userId: number) {
					return `/colleagues/${userId}/profile`
				}
			},

			projects: {
				path: 'projects',
				goto(userId: number) {
					return `/colleagues/${userId}/projects`
				},
				archive: {
					path: 'archive',
					goto(userId: number) {
						return `/colleagues/${userId}/projects/archive`
					}
				},
				active: {
					path: '',
					goto() {
						return '/'
					}
				}
			},

			skills: {
				path: 'skills',
				goto(userId: number) {
					return `/colleagues/${userId}/skills`
				}
			},

			storage: {
				path: 'storage',
				goto(userId: number) {
					return `/colleagues/${userId}/storage`
				}
			}
		},

		builders: {
			path: 'builders',
			goto() {
				return '/colleagues/builders'
			}
		},

		admins: {
			path: 'admins',
			goto() {
				return '/colleagues/admins'
			}
		},

		all: {
			path: 'colleagues',
			goto() {
				return '/colleagues'
			}
		}
	},
	moderation: {
		path: 'moderation',
		goto() {
			return '/moderation'
		},

		technologies: {
			path: '',
			goto() {
				return '/moderation'
			}
		},
		technologiesFields: {
			path: 'technologies-fields',
			goto() {
				return '/moderation/technologies-fields'
			}
		},
		languages: {
			path: 'languages',
			goto() {
				return '/moderation/languages'
			}
		}
	}
}
