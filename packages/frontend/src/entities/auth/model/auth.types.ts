export enum Roles {
	ADMIN = 'ADMIN',
	MANAGER = 'MANAGER',
	USER = 'USER',
	NONE = 'NONE'
}

export interface Auth {
	accessToken: string
	isAuth: boolean
	myUserId: number
	role: Roles
}

export interface AuthState {
	data: Auth | null
	isLoading: boolean
	isLoaded: boolean
	isFailed: boolean
	error: null | string
}

export enum AuthActionsTokens {
	SET_ACCESS_TOKEN_ACTION = 'SET_ACCESS_TOKEN_ACTION',

	LOGOUT_ACTION = 'LOGOUT_ACTION',
	ASYNC_LOGOUT_ACTION = 'ASYNC_LOGOUT_ACTION',
	ASYNC_GET_ACCESS_TOKEN_ACTION = 'ASYNC_GET_ACCESS_TOKEN_ACTION'
}
