import { call, put } from 'redux-saga/effects'

import { serverApi } from '../../../../shared/api'
import { appSelect } from '../../../../shared/libs'

import {
	ErrorInLoadingProfessionalSkillsInfoAction,
	LoadingProfessionalSkillsInfoAction,
	ProfessionalSkillsLoadedInfoAction
} from '../actions'

export const loadProfessionalSkillsWorker = function* ({ payload }: { payload: { userId: number } }): any {
	try {
		const { userId } = payload

		yield put(LoadingProfessionalSkillsInfoAction())

		const token = yield* appSelect((state) => state.auth.data?.accessToken)

		const data = yield call(() => serverApi.professionalSkills.getProfessionalSkills({ token: token || '', userId }))

		yield put(ProfessionalSkillsLoadedInfoAction({ data }))
	} catch (e: any) {
		return yield put(ErrorInLoadingProfessionalSkillsInfoAction({ message: 'error' }))
	}
}
