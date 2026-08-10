import { InfoState, PageType } from './types'

export const navbar: Array<{ label: string; type: PageType }> = [
	{
		label: 'Основная информация',
		type: 'general'
	},
	{
		label: 'Окружение',
		type: 'env'
	},
	{
		label: 'Обязанности и достижения',
		type: 'req'
	}
]
