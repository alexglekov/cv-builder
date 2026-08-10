import { call, put } from 'redux-saga/effects'

import { serverApi } from '../../../../shared/api'
import { appSelect } from '../../../../shared/libs'

import { ErrorInLoadingProjectsInfoAction, LoadingProjectsInfoAction, ProjectsLoadedInfoAction } from '../actions'

export const loadProjectsWorker = function* ({ payload }: { payload: { userId: number } }): any {
	try {
		yield put(LoadingProjectsInfoAction())

		const token = yield* appSelect((state) => state.auth.data?.accessToken)
		const { userId } = payload

		const data = yield call(() => serverApi.projects.getProjectsInfo({ token: token || '', userId }))

		yield put(ProjectsLoadedInfoAction({ data }))
	} catch (e: any) {
		return yield put(ErrorInLoadingProjectsInfoAction({ message: 'error' }))
	}
}
