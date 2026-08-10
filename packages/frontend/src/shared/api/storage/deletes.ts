import { apiInstance } from '../api-instance'
import { uris } from '../apis'

export const deleteCvStatusById = async ({ payload, token }: { token: string; payload: { key: string } }): Promise<any> => {
	const { key } = payload

	const { data } = await apiInstance.delete(`/${uris.deletes.deleteCvStatusByKey(key)}`, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})

	return data
}
