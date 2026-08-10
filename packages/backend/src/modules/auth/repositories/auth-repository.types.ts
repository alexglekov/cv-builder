import { Auth } from '@prisma/client'

export interface CreateAuthParams extends Partial<Omit<Auth, 'id'>> {}

export interface UpdateAuthParams extends Partial<Omit<Auth, 'id' | 'userId'>> {}
