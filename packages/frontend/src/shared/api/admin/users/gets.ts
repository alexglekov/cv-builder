// import { mocks } from '../../mocks'
import { apiInstance } from '../../api-instance'
import { uris } from '../../apis'

export const getColleagues = async ({ token }: { token: string }): Promise<any> => {
	const { data } = await apiInstance.get(`/${uris.gets.allColleagues}`, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})

	return data
	// return mocks.colleagues
}
