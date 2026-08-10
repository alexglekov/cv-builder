// import { mocks } from '../../mocks'
import { apiInstance } from '../api-instance'
import { uris } from '../apis'

export const getAllCvInfo = async ({ token, userId }: { token: string; userId: number }): Promise<any> => {
	const { data } = await apiInstance.get(`/${uris.gets.allCV(userId)}`, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})

	return data

	// const data = mocks.storage
	// return mocks.projects
}
