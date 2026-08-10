import { call, put } from 'redux-saga/effects'

import { appSelect } from '../../../../libs'

import { ComplitingModalHandlerAction, ErrorInComplitingModalHandlerAction, ModalHandlerComplitedAction } from '../actions'

interface HandleModalActionWorkerProps {
	payload: {
		handler: (state: any, meta: { token: string; userId: number }) => Generator
		state: any
		userId: number
	}
}

export const handleModalActionWorker = function* ({ payload }: HandleModalActionWorkerProps): any {
	try {
		const { state, handler, userId } = payload

		yield put(ComplitingModalHandlerAction())

		const token = yield* appSelect((state) => state.auth.data?.accessToken)

		yield* handler(state, { token: token!, userId })

		yield put(ModalHandlerComplitedAction())
	} catch (e: any) {
		return yield put(ErrorInComplitingModalHandlerAction({ message: 'error' }))
	}
}
