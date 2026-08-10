import { apiInstance } from '../../api-instance'
import { uris } from '../../apis'

export const getAll = async ({ token }: { token: string }): Promise<any> => {
	const { data } = await apiInstance.get(`/${uris.gets.allLanguages}`, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})

	return data
}
