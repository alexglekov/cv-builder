import { apiInstance } from '../../api-instance'
import { uris } from '../../apis'

export const removeColleagueById = async ({ colleagueId, token }: { token: string; colleagueId: number }): Promise<any> => {
	const { data } = await apiInstance.delete(`/${uris.deletes.deleteColleagueById(colleagueId)}`, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})

	return data
}
