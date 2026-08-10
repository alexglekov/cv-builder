import { apiInstance } from '../api-instance'
import { uris } from '../apis'

export const deleteVacancyById = async ({ payload, token }: { token: string; payload: { id: string } }): Promise<any> => {
	const { id } = payload

	const { data } = await apiInstance.delete(`/${uris.deletes.deleteVacancyById(id)}`, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
}
