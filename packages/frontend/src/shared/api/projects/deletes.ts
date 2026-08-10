import { apiInstance } from '../api-instance'
import { uris } from '../apis'

export const deleteProjectStatusById = async ({
	payload,
	token
}: {
	token: string
	payload: { id: number }
}): Promise<any> => {
	const { id } = payload

	const { data } = await apiInstance.delete(`/${uris.deletes.deleteProjectStatusById(id)}`, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})

	return data
}
