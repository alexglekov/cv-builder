import * as getsRequests from './gets'
import * as deletesRequests from './deletes'

type VacanciesApi = typeof getsRequests & typeof deletesRequests

export const vacancies: VacanciesApi = {
	...getsRequests,
	...deletesRequests
}
