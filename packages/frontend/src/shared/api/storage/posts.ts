import { apiInstance } from '../api-instance'
import { uris } from '../apis'

export const generateCV = async ({
	payload,
	token,
	userId
}: {
	token: string
	payload: any
	userId: number
}): Promise<any> => {
	const { data } = await apiInstance.post(`/${uris.posts.generateCV(userId)}`, payload, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})

	return data
}
