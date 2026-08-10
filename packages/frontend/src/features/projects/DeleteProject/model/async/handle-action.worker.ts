import { call, put } from 'redux-saga/effects'
import { DeletedProjectInfoAction } from '../../../../../entities/projects'
import { serverApi } from '../../../../../shared/api'

import { appSelect } from '../../../../../shared/libs'
import { EntitiesClearStateAction } from '../../../../../shared/store'

import { DeletingProjectAction, ErrorInDeleteProjectAction, ProjectDeletedComplitedAction } from '../actions'

export const deleteProjectActionWorker = function* ({ payload }: any): any {
	try {
		const { id } = payload

		yield put(DeletingProjectAction())

		const token = yield* appSelect((state) => state.auth.data?.accessToken)

		yield call(() => serverApi.projects.deleteProjectStatusById({ payload: { id }, token: token || '' }))

		yield put(DeletedProjectInfoAction({ id }))
		yield put(ProjectDeletedComplitedAction())
		yield put(EntitiesClearStateAction({ except: ['projects', 'storage'] }))
	} catch (e: any) {
		console.log(e)
		return yield put(ErrorInDeleteProjectAction({ message: 'error' }))
	}
}
