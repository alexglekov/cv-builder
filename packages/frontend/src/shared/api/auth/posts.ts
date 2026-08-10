import axios from 'axios'
import { API_URL } from '../../config'

import { apiInstance } from '../api-instance'
import { uris } from '../apis'

export const logoutUser = async () => {
	await apiInstance.post(`/${uris.posts.signOut}`, null)
}

export const getAccessToken = async () => {
	const { data } = await axios.post(`${API_URL}/${uris.posts.refreshTokens}`, null, { withCredentials: true })

	return data
}
