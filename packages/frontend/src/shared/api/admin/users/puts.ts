import { Roles } from '../../../../entities/auth'
import { apiInstance } from '../../api-instance'
import { uris } from '../../apis'

export const changeById = async ({
	userId,
	payload,
	token
}: {
	userId: number
	token: string
	payload: { name: Roles }
}): Promise<any> => {
	const { data } = await apiInstance.put(`/${uris.puts.changeUserRoleById(userId)}`, payload, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})

	return data
}
