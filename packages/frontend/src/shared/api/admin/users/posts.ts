import { apiInstance } from '../../api-instance'
import { uris } from '../../apis'

export const addNewColleague = async ({ payload, token }: { token: string; payload: any }): Promise<any> => {
	const { data } = await apiInstance.post(`/${uris.posts.addNewColleague}`, payload, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})

	return data
}
