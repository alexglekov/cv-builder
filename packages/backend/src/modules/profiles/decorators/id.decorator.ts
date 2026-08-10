import { createParamDecorator, ExecutionContext } from '@nestjs/common'

export const AccessCheck = createParamDecorator((data: { roles: string[]; id: string }, ctx: ExecutionContext) => {
	const request = ctx.switchToHttp().getRequest()

	if (data.roles.includes(request.userCredentials?.role) || request.userCredentials?.userId === data.id) return true
	else return false
})
