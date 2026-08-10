import { PageType } from './types'

export const navbar: Array<{ label: string; type: PageType }> = [
	{
		label: 'Основная информация',
		type: 'general'
	},
	{
		label: 'Домены',
		type: 'domains'
	},
	{
		label: 'Иностранные языки',
		type: 'languages'
	}
]
