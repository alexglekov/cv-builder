import * as getsRequests from './gets'
import * as putsRequests from './puts'

type UserRequests = typeof getsRequests & typeof putsRequests

export const users: UserRequests = {
	...getsRequests,
	...putsRequests
}
