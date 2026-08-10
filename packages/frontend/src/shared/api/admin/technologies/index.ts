import * as getsRequests from './gets'
import * as deletesRequests from './deletes'
import * as editsRequests from './puts'
import * as postsRequests from './posts'

type TechnologiesApi = typeof getsRequests & typeof deletesRequests & typeof editsRequests & typeof postsRequests

export const technologies: TechnologiesApi = {
	...getsRequests,
	...deletesRequests,
	...editsRequests,
	...postsRequests
}
