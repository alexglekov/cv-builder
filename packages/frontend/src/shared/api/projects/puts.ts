import { IProject } from '../../../entities/projects'
import { apiInstance } from '../api-instance'
import { uris } from '../apis'

export const editProjectInfoById = async ({
	id,
	payload,
	token
}: {
	token: string
	payload: Partial<IProject>
	id: number
}): Promise<any> => {
	const { data } = await apiInstance.put(`/${uris.patchs.changeProjectStatusById(id)}`, payload, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})

	return data
}
