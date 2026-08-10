import axios from 'axios'
import { API_URL } from '../config'

import { LogoutAction, SetAccessTokenAction } from '../../entities/auth/model/actions'
import { store } from '../../app/store'
import { uris } from './apis'

export const apiInstance = axios.create({
	baseURL: API_URL,
	withCredentials: true
})

apiInstance.interceptors.response.use(
	function (response) {
		return response
	},
	function (error: any) {
		const errorResponse = error.response
		if (isTokenExpiredError(errorResponse)) {
			return resetTokenAndReattemptRequest(error)
		}
		// If the error is due to other reasons, we just throw it back to axios
		return Promise.reject(error)
	}
)

function isTokenExpiredError(errorResponse: any) {
	if (errorResponse && errorResponse.data && errorResponse.data.statusCode === 403) {
		return true
	}
	return false
}

let isAlreadyFetchingAccessToken = false

const subscribers: Array<CallableFunction> = []

async function resetTokenAndReattemptRequest(error: any) {
	try {
		const { response: errorResponse } = error

		const retryOriginalRequest = new Promise((resolve) => {
			addSubscriber((token: string) => {
				errorResponse.config.headers.Authorization = 'Bearer ' + token
				resolve(axios(errorResponse.config))
			})
		})

		if (!isAlreadyFetchingAccessToken) {
			isAlreadyFetchingAccessToken = true

			const response = await axios.post(`${API_URL}/${uris.posts.refreshTokens}`, null, {
				withCredentials: true
			})

			if (!response.data) {
				store.dispatch(LogoutAction())

				return Promise.reject(error)
			}

			const newToken = response.data

			store.dispatch(SetAccessTokenAction({ accessToken: newToken }))

			isAlreadyFetchingAccessToken = false
			onAccessTokenFetched(newToken)
		}
		return retryOriginalRequest
	} catch (err) {
		store.dispatch(LogoutAction())
		return {}
	}
}

function onAccessTokenFetched(token: string) {
	subscribers.forEach((callback) => callback(token))
	subscribers.splice(0, subscribers.length)
}

function addSubscriber(callback: CallableFunction) {
	subscribers.push(callback)
}
