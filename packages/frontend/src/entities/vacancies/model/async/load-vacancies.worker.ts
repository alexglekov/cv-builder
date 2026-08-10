import { call, put } from 'redux-saga/effects'

import { serverApi } from '../../../../shared/api'
import { appSelect } from '../../../../shared/libs'
import { ErrorInLoadingVacanciesInfoAction, LoadingVacanciesInfoAction, VacanciesLoadedInfoAction } from '../actions'

export const loadVacanciesWorker = function* ({ payload }: { payload: { userId: number } }): any {
	try {
		yield put(LoadingVacanciesInfoAction())

		const { userId } = payload
		const token = yield* appSelect((state) => state.auth.data?.accessToken)

		const data = yield call(() => serverApi.vacancies.getVacancies({ token: token || '', userId }))

		yield put(VacanciesLoadedInfoAction({ data }))
	} catch (e: any) {
		return yield put(ErrorInLoadingVacanciesInfoAction({ message: 'error' }))
	}
}
