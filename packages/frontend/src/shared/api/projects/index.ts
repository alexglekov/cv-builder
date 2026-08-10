import * as getsRequests from './gets'
import * as postsRequests from './posts'
import * as patchsRequests from './patchs'
import * as deletesRequests from './deletes'
import * as putsRequests from './puts'

type ProjectsApi = typeof getsRequests &
	typeof postsRequests &
	typeof patchsRequests &
	typeof deletesRequests &
	typeof putsRequests

export const projects: ProjectsApi = {
	...getsRequests,
	...postsRequests,
	...patchsRequests,
	...deletesRequests,
	...putsRequests
}
