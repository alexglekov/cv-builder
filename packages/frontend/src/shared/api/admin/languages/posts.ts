import { apiInstance } from '../../api-instance'
import { uris } from '../../apis'

interface CreateTechnologieState {
	name: string
}

export const addLanguage = async ({ token, payload }: { token: string; payload: CreateTechnologieState }): Promise<any> => {
	const { name } = payload

	const { data } = await apiInstance.post(
		`/${uris.posts.addLanguage}`,
		{
			name
		},
		{
			headers: {
				Authorization: `Bearer ${token}`
			}
		}
	)

	return data
}
