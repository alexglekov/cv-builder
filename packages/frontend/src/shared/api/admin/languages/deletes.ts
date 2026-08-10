import { apiInstance } from '../../api-instance'
import { uris } from '../../apis'

export const deleteById = async ({ token, languageId }: { token: string; languageId: number }): Promise<any> => {
	const { data } = await apiInstance.delete(`/${uris.deletes.deleteLanguageById(languageId)}`, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})

	console.log(data)

	return data
}
