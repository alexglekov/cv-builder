import { call, put } from 'redux-saga/effects'

import { serverApi } from '../../../../shared/api'
import { appSelect } from '../../../../shared/libs'
import { LoadingVacanciesInfoAction } from '../actions'
import { VacancyDeletedAction } from '../actions/vacancy-deleted.action'

export const deleteVacancyWorker = function* ({ payload }: { payload: { vacancyId: string } }): any {
	try {
		yield put(LoadingVacanciesInfoAction())

		const { vacancyId } = payload
		const token = yield* appSelect((state) => state.auth.data?.accessToken)

		yield call(() => serverApi.vacancies.deleteVacancyById({ token: token || '', payload: { id: vacancyId } }))

		yield put(VacancyDeletedAction({ id: vacancyId }))
	} catch {
		//
	}
}
