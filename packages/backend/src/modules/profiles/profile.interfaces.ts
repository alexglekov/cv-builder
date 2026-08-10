import { Languages, Profiles } from '@prisma/client'

type Profile = Omit<Profiles, 'id'>

export type LanguageWithoutIdProfileId = Omit<Languages, 'id' | 'profileId'>

export type LanguageWithoutId = Omit<Languages, 'id'>

export interface PutProfileInfoRepository extends Profile {
	languages: LanguageWithoutId[]
}

export interface PutProfileInfo extends Profile {
	languages: LanguageWithoutIdProfileId[]
}

export interface GetProfilesList {
	id: number
	profileUri: string
	education: string
	surname: string
	name: string
}
