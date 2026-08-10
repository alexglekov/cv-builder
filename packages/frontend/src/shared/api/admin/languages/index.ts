import * as postsRequests from './posts'
import * as getsRequests from './gets'
import * as deletesRequests from './deletes'
import * as putsRequests from './puts'

type LanguagesApi = typeof postsRequests & typeof getsRequests & typeof deletesRequests & typeof putsRequests

export const languages: LanguagesApi = {
	...postsRequests,
	...getsRequests,
	...deletesRequests,
	...putsRequests
}
