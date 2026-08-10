export interface InfoState {
	description: string
	title: string
	start: string
	end: string
	position: string
	technologies: Array<number>
	respAndAchs: Array<string>
}

export type PageType = 'general' | 'env' | 'req'
