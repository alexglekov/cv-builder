import { LANGRANK } from '@prisma/client'

export interface IUser {
	name: string
	surname: string
	profileUri: string
	email: string
	languages: Array<Languages>
	specialty: string
	education: string
	expInYears: number
	biography: string
	domains: Array<string>
	technologies: Array<Tehnology>
}

export interface ISkill {
	id: number
	name: string
	type: string
}

export interface ISkillWithExpYears {
	id: number
	total: number
	name: string
	type: string
	last: number
}

export interface IProject {
	id: number
	title: string
	description: string
	position: string
	start: string // Date
	end: string // Date
	respAndAchs: Array<string>
	technologies: Array<ISkill['id']>
	actual: boolean
}

export interface Languages {
	id: number
	rank: LANGRANK
	profileId: number
	languageId: number
	Langnames: {
		id: number
		name: string
	}
}

export interface Tehnology {
	name: string
	type: string
}

export interface TehnSkillsInfo {
	title: string
	body: string
}

export type TehnSkillsParams = Pick<IUser, 'technologies'>
