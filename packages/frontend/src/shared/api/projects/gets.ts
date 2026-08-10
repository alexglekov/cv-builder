import { IProject } from '../../../entities/projects'
import { apiInstance } from '../api-instance'
import { uris } from '../apis'

export const getSkillsInfo = async ({ token }: { token: string }): Promise<any> => {
	const { data } = await apiInstance.get(`/${uris.gets.allSkills}`, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})

	return data
}

export const getProjectsInfo = async ({ token, userId }: { token: string; userId: number }): Promise<any> => {
	const { data } = await apiInstance.get(`/${uris.gets.allProjects(userId)}`, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})

	return data.map((project: IProject) => ({
		...project,
		start: new Date(project.start).toISOString().slice(0, 10),
		end: new Date(project.end).toISOString().slice(0, 10)
	}))
}
