import * as getsRequests from './gets'
import * as putsRequests from './puts'
import * as postsRequests from './posts'
import * as deletesRequests from './deletes'

type ColleaguesApi = typeof getsRequests & typeof putsRequests & typeof postsRequests & typeof deletesRequests

export const users: ColleaguesApi = {
	...getsRequests,
	...putsRequests,
	...postsRequests,
	...deletesRequests
}
