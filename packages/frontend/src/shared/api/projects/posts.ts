import { apiInstance } from '../api-instance'
import { uris } from '../apis'

export const createProject = async ({
	payload,
	token,
	userId
}: {
	token: string
	payload: any
	userId: number
}): Promise<any> => {
	const { data } = await apiInstance.post(`/${uris.posts.createProject(userId)}`, payload, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})

	return {
		...data,
		start: new Date(data.start).toISOString().slice(0, 10),
		end: new Date(data.end).toISOString().slice(0, 10)
	}
}
