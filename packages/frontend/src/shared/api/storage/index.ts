import * as getsRequests from './gets'
import * as deletesRequests from './deletes'
import * as postsRequests from './posts'

type StorageApi = typeof getsRequests & typeof deletesRequests & typeof postsRequests

export const storage: StorageApi = {
	...getsRequests,
	...deletesRequests,
	...postsRequests
}
