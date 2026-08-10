export interface IVacancy {
	vacancyId?: string
	name?: string
	salaryFrom?: number
	salaryTo?: number
	currency?: string
	typeId?: string
	typeName?: string
	addressCity?: string
	addressStreet?: string
	addressRaw?: string
	publishedAt?: Date
	createdAt?: Date
	archived?: boolean
	vacancyUrl?: string
	employerName?: string
	employerId?: string
	employerUrl?: string
	employerLogoUrl?: string
	requirements?: string
	responsibilities?: string
	scheduleId?: string
	scheduleName?: string
	professionalRoleId?: string
	professionalRoleName?: string
	experienceId?: string
	experienceName?: string
	employmentId?: string
	employmentName?: string
	passLevel?: string
	userId?: string
	advice?: string
	passMessage?: string
	keySkills: string[]
	description?: string
	id: string
}

export interface VacanciesState {
	data: IVacancy[]
	isLoading: boolean
	isLoaded: boolean
	isFailed: boolean
	error: null | string
}

export enum VacanciesActionsTokens {
	LOADING_VACANCIES_INFO_ACTION = 'LOADING_VACANCIES_INFO_ACTION',
	LOADED_VACANCIES_INFO_ACTION = 'LOADED_VACANCIES_INFO_ACTION',
	VACANCY_DELETED_ACTION = 'VACANCY_DELETED_ACTION',
	ERROR_IN_LOADING_VACANCIES_INFO_ACTION = 'ERROR_IN_LOADING_VACANCIES_INFO_ACTION',

	ASYNC_LOAD_VACANCIES_INFO_ACTION = 'ASYNC_LOAD_VACANCIES_INFO_ACTION',
	ASYNC_DELETE_VACANCY_ACTION = 'ASYNC_DELETE_VACANCY_ACTION'
}
