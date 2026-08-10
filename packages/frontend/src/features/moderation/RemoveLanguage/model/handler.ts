import { InfoState } from './types'
import { call, put } from 'redux-saga/effects'

import { serverApi } from '../../../../shared/api'
import { DeletedLanguageAction } from '../../../../entities/utility'

export const actionHandler = function* (state: InfoState, meta: { token: string }): any {
	const { token } = meta

	yield call(() => serverApi.admin.languages.deleteById({ languageId: state.id, token }))

	yield put(DeletedLanguageAction({ id: state.id }))
}
