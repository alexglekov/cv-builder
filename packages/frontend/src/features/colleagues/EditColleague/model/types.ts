import { Roles } from '../../../../entities/auth'

export interface InfoState {
	role: Roles
	name: string
	surname: string
	profileUri: string
	specialty: string
}
