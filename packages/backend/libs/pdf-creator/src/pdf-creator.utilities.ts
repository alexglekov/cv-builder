import { TehnSkillsParams, TehnSkillsInfo } from './interface'

export const getTehnSkills = (params: TehnSkillsParams, dbtechtypes: string[]): Array<TehnSkillsInfo> => {
	const techTypes: string[] = []

	for (const key of dbtechtypes) {
		techTypes.push(key)
	}

	const tehsSkills: Array<TehnSkillsInfo> = []

	for (const tehKey of techTypes) {
		const title = tehKey
		const body = params.technologies
			.filter((tehn) => tehn.type === tehKey)
			.map((tehn) => tehn.name)
			.join(', ')

		if (body) {
			tehsSkills.push({ title, body })
		}
	}

	return [...tehsSkills]
}

export const languageConverter = (language: string) => {
	return language
		.toString()
		.split('')
		.map((a, i) => {
			if (i === 0) return a.toUpperCase()

			return a.toLowerCase()
		})
		.join('')
}
