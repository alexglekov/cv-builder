export interface PutFileParams {
	file: any
	name: string
	subPath: string
}
export interface PutFileResult {
	key: string
}

export interface GetFileUriParams {
	key: string
}
export interface GetFileUriResult {
	key: string
	uri: string
}
