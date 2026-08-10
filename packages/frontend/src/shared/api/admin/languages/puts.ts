import { apiInstance } from '../../api-instance'
import { uris } from '../../apis'

interface EditLanguagePayload {
	name: string
	id: number
}

export const editLanguage = async ({ token, payload }: { token: string; payload: EditLanguagePayload }): Promise<any> => {
	const { name, id } = payload

	const { data } = await apiInstance.put(
		`/${uris.puts.editLanguage}`,
		{
			name,
			id
		},
		{
			headers: {
				Authorization: `Bearer ${token}`
			}
		}
	)

	return data
}
