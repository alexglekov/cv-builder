import { mocks } from '../../../mocks'
import { apiInstance } from '../../api-instance'
import { uris } from '../../apis'

interface EditTechnologieByIdParams {
	name: string
}

interface EditTechtypeByIdParams {
	name: string
	id: number
}

export const editTechnologieById = async ({
	token,
	technologieId,
	payload
}: {
	payload: EditTechnologieByIdParams
	token: string
	technologieId: number
}): Promise<any> => {
	const { data } = await apiInstance.put(
		`/${uris.puts.updateTechnologieById}`,
		{ ...payload, id: technologieId },
		{
			headers: {
				Authorization: `Bearer ${token}`
			}
		}
	)

	return data

	// return mocks.technologies
}

export const editTechtypeById = async ({
	token,
	payload
}: {
	payload: EditTechtypeByIdParams
	token: string
}): Promise<any> => {
	console.log({ payload })

	const { data } = await apiInstance.put(
		`/${uris.puts.updateTechtypeById}`,
		{ ...payload },
		{
			headers: {
				Authorization: `Bearer ${token}`
			}
		}
	)

	return data
}
