import { ITechnologieType } from '../../entities/utility'

export const technologies: Array<ITechnologieType> = [
	{
		id: 1,
		name: 'Облачные технологии',
		technologies: [
			{
				id: 1,
				name: 'AWS S3'
			},
			{
				id: 2,
				name: 'AWS Lambda'
			}
		]
	},
	{
		id: 2,
		name: 'CI/CD',
		technologies: []
	}
]
