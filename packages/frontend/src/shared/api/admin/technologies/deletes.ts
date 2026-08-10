import { mocks } from '../../../mocks'
import { apiInstance } from '../../api-instance'
import { uris } from '../../apis'

export const deleteTechnologieById = async ({
	token,
	technologieId
}: {
	token: string
	technologieId: number
}): Promise<any> => {
	const { data } = await apiInstance.delete(`/${uris.deletes.deleteTechnologieById(technologieId)}`, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})

	return data
}

export const deleteTechtypeById = async ({ token, techtypeId }: { token: string; techtypeId: number }): Promise<any> => {
	const { data } = await apiInstance.delete(`/${uris.deletes.deleteTechtypeById(techtypeId)}`, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})

	return data
}
