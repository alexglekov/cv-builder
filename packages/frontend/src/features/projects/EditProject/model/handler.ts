import { InfoState } from './types'

import { serverApi } from '../../../../shared/api'
import { EditedProjectInfoAction, IProject } from '../../../../entities/projects'
import { call, put } from 'redux-saga/effects'
import { EntitiesClearStateAction } from '../../../../shared/store'

export const actionHandler = (id: IProject['id']) =>
	function* (state: InfoState, meta: { token: string }): any {
		const { token } = meta

		yield call(() => serverApi.projects.editProjectInfoById({ payload: state, token, id }))

		yield put(
			EditedProjectInfoAction({
				data: state,
				id
			})
		)
		yield put(EntitiesClearStateAction({ except: ['projects', 'storage'] }))
	}
