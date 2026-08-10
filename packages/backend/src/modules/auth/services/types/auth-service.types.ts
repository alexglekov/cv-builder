import { Auth, User } from '@prisma/client'

export interface SignInOrSignUpParams extends Omit<User, 'id' | 'role'>, Omit<Auth, 'id' | 'userId' | 'refreshToken'> {}

export interface SignUpParams extends Omit<User, 'id' | 'role'>, Omit<Auth, 'id' | 'userId' | 'refreshToken'> {}

export interface SignInParams extends Partial<Omit<Auth, 'id' | 'userId' | 'refreshToken'>>, Pick<User, 'email'> {}

export interface SignOutParams {
	userId: number
}

export interface UpdateTokenParams {
	userId: number
	token: string
}
