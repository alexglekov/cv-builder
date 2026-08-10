import { apiInstance } from '../api-instance'
import { uris } from '../apis'

export const changeProjectStatusById = async ({ payload, token }: { token: string; payload: any }): Promise<any> => {
	const { id } = payload

	const { data } = await apiInstance.patch(`/${uris.patchs.changeProjectStatusById(id)}`, null, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})

	return data
}
