import { apiInstance } from '../api-instance'
import { uris } from '../apis'

export const editUserInfo = async ({ token, payload, userId }: { token: string; payload: any; userId: number }) => {
	const { data } = await apiInstance.put(`/${uris.puts.userInfo(userId)}`, payload, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})

	return data
}
