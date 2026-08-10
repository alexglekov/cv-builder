import { InfoState } from './types'
import { call, put } from 'redux-saga/effects'

import { serverApi } from '../../../../shared/api'
import { NewLanguageCreatedAction } from '../../../../entities/utility'

export const actionHandler = function* (state: InfoState, meta: { token: string }): any {
	const { token } = meta
	const language = yield call(() => serverApi.admin.languages.addLanguage({ payload: state, token }))

	yield put(NewLanguageCreatedAction({ data: language }))
}
