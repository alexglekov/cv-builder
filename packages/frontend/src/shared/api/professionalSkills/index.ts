import * as getsRequests from './gets'

type StorageApi = typeof getsRequests

export const professionalSkills: StorageApi = {
	...getsRequests
}
