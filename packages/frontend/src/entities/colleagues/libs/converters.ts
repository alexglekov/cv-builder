import { Roles } from '../../auth'

export const convertRoleToString = (role: Roles) => {
	if (role === Roles.ADMIN) {
		return 'Администратор'
	}
	if (role === Roles.MANAGER) {
		return 'Конструктор'
	}
	if (role === Roles.USER) {
		return 'Пользователь'
	}
}
