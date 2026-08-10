import { mocks } from '../../../mocks'
import { apiInstance } from '../../api-instance'
import { uris } from '../../apis'

interface CreateTechnologieState {
	name: string
	techtype: string
}

interface CreateTechtypeState {
	name: string
}

export const createTechnologie = async ({
	token,
	payload
}: {
	token: string
	payload: CreateTechnologieState
}): Promise<any> => {
	const { name, techtype } = payload

	const { data } = await apiInstance.post(
		`/${uris.posts.createTechnologie}`,
		{
			technology: {
				name,
				type: techtype
			}
		},
		{
			headers: {
				Authorization: `Bearer ${token}`
			}
		}
	)

	return data
}

export const createTechtype = async ({ token, payload }: { token: string; payload: CreateTechtypeState }): Promise<any> => {
	const { data } = await apiInstance.post(`/${uris.posts.createTechtype}`, payload, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})

	return data
}
