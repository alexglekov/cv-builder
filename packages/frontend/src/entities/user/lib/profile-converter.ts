import _ from 'lodash'
import { ILanguage } from '../../utility'
import { IUser } from '../model'

interface GlobalSkillInfo {
	title: string
	body: string | number
	icon: string
}

type GlobalSkillsParams = Pick<IUser, 'specialty' | 'education' | 'expInYears' | 'languages'>

export const getGlobalSkills = (params: GlobalSkillsParams, languages: Map<number, ILanguage>): Array<GlobalSkillInfo> => {
	return [
		{
			title: 'Направление',
			body: params.specialty,
			icon: 'profile.specialization'
		},
		{
			title: 'Образование',
			body: params.education,
			icon: 'profile.education'
		},
		{
			title: 'Опыт работы',
			body: params.expInYears < 1 ? `${_.floor(params.expInYears * 12)} месяц(-ев)` : `${params.expInYears} лет(год)`,
			icon: 'profile.experience'
		},
		...params.languages.map((item) => ({
			title: languages.get(item.languageId)?.name || '',
			body: item.rank,
			icon: 'profile.language'
		}))
	]
}
