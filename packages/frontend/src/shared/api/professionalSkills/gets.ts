import { apiInstance } from '../api-instance'
import { uris } from '../apis'

export const getProfessionalSkills = async ({ token, userId }: { token: string; userId: number }): Promise<any> => {
	const { data } = await apiInstance.get(`/${uris.gets.allProfessionalSkills(userId)}`, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})

	console.log({ skills: data })

	return data
}
