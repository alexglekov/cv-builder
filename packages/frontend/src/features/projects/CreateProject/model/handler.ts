import { InfoState } from './types'
import { call, put } from 'redux-saga/effects'

import { serverApi } from '../../../../shared/api'
import { NewProjectCreatedAction } from '../../../../entities/projects'
import { EntitiesClearStateAction } from '../../../../shared/store'

export const actionHandler = function* (state: InfoState, meta: { token: string; userId: number }): any {
	const { token, userId } = meta
	const newProject = yield call(() => serverApi.projects.createProject({ payload: state, token, userId }))

	yield put(NewProjectCreatedAction({ data: { ...state, ...newProject } }))
	yield put(EntitiesClearStateAction({ except: ['projects', 'storage'] }))
}
