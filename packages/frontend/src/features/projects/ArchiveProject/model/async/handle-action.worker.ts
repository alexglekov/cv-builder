import { call, put } from 'redux-saga/effects'

import { EditedProjectInfoAction } from '../../../../../entities/projects'
import { serverApi } from '../../../../../shared/api'
import { appSelect } from '../../../../../shared/libs'
import { EntitiesClearStateAction } from '../../../../../shared/store'

import { ArchivingProjectAction, ErrorInArchiveProjectAction, ProjectArchivedComplitedAction } from '../actions'

export const archiveProjectActionWorker = function* ({ payload }: any): any {
	try {
		const { id, actual } = payload

		yield put(ArchivingProjectAction())

		const token = yield* appSelect((state) => state.auth.data?.accessToken)

		yield call(() => serverApi.projects.changeProjectStatusById({ payload: { id }, token: token || '' }))

		yield put(EditedProjectInfoAction({ data: { actual }, id }))
		yield put(ProjectArchivedComplitedAction())
		yield put(EntitiesClearStateAction({ except: ['projects', 'storage'] }))
	} catch (e: any) {
		console.log(e.message)
		return yield put(ErrorInArchiveProjectAction({ message: 'error' }))
	}
}
