import { InfoState } from './types'
import { call, put } from 'redux-saga/effects'

import { serverApi } from '../../../../shared/api'
import { EditedLanguageInfoAction } from '../../../../entities/utility'

export const actionHandler = function* (state: InfoState, meta: { token: string }): any {
	const { token } = meta
	yield call(() => serverApi.admin.languages.editLanguage({ payload: state, token }))

	yield put(EditedLanguageInfoAction({ id: state.id, data: { ...state } }))
}
