// import { mocks } from '../../mocks'
import { mocks } from '../../mocks'
import { apiInstance } from '../api-instance'
import { uris } from '../apis'

export const getUserById = async () => {
	return {}
}
export const getAllUser = async () => {
	return {}
}
export const getUserInfo = async ({ token, userId }: { token: string; userId: number }): Promise<any> => {
	const { data } = await apiInstance.get(`/${uris.gets.userInfo(userId)}`, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})

	return data

	// return mocks.profile
}
