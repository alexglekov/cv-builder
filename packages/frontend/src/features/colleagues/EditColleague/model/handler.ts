import { InfoState } from './types'

import { serverApi } from '../../../../shared/api'
import { ChangeColleaguesRoleAction, IColleague } from '../../../../entities/colleagues'
import { call, put } from 'redux-saga/effects'

export const actionHandler = (id: IColleague['id']) =>
	function* (state: InfoState, meta: { token: string }): any {
		const { token } = meta

		yield call(() => serverApi.admin.users.changeById({ payload: { name: state.role }, token, userId: id }))

		yield put(
			ChangeColleaguesRoleAction({
				data: { role: state.role },
				colleagueId: id
			})
		)
	}
