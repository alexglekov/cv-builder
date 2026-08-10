import { ITechnologieType } from '../../../../entities/utility'
import { mocks } from '../../../mocks'
import { apiInstance } from '../../api-instance'
import { uris } from '../../apis'

export const getAllTechnologies = async ({ token }: { token: string }): Promise<any> => {
	const { data: technologies } = await apiInstance.get(`/${uris.gets.allTechnologies}`, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})

	const { data: techtypes } = await apiInstance.get(`/${uris.gets.allTechtypes}`, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})

	console.log({ technologies, techtypes })

	// return data

	return techtypes.map((techt: ITechnologieType) => ({
		...techt,
		technologies: technologies.filter((tech: any) => tech.type == techt.name)
	}))
}

export const getAllTechtypes = async ({ token }: { token: string }): Promise<any> => {
	// const { data } = await apiInstance.get(`/${uris.gets.allTechnologies}`, {
	// 	headers: {
	// 		Authorization: `Bearer ${token}`
	// 	}
	// })

	// console.log({ data })

	// return data

	return mocks.technologies
}
