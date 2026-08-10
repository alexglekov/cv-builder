import { apiInstance } from '../api-instance'
import { uris } from '../apis'

export const getVacancies = async ({ token, userId }: { token: string; userId: number }): Promise<any> => {
	const { data } = await apiInstance.get(`/${uris.gets.vacanciesByUserId(userId)}`, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})

	return data
	// return [
	// 	{
	// 		vacancyId: '12312312', //id
	// 		name: 'Fulltack-разработчик TypeScript (NodeJs/React)', //name
	// 		currency: 'RUR', //salary.currency
	// 		typeId: 'open', //type.id
	// 		typeName: 'Открытая', //type.name
	// 		addressCity: 'Уфа', //address.city
	// 		addressStreet: 'улица Мубарякова', //address.street
	// 		addressRaw: 'Уфа, улица Мубарякова, 3', //address.raw
	// 		publishedAt: '2023-11-03T18:14:04+0300', //published_at
	// 		createdAt: '2023-11-03T18:14:04+0300', //created_at
	// 		archived: false, //archived
	// 		vacancyUrl: 'https://hh.ru/vacancy/89064284', //alternate_url
	// 		employerName: 'UFATECH', //employer.name
	// 		employerId: '630052', //employer.id
	// 		employerUrl: 'https://hh.ru/employer/630052', //employer.alternate_url
	// 		employerLogoUrl: 'https://hhcdn.ru/employer-logo-original/522678.png', //employer.logo_urls
	// 		requirements:
	// 			'Базовые знания JS, TS, React Hooks, <highlighttext>NodeJs</highlighttext>. - Умение писать быстро надёжный, легко понятный код. - Умение вникать в задачу и реализовывать...', //snippet.requirement
	// 		responsibilities:
	// 			'Технологический стек: - Backend: <highlighttext>NodeJs</highlighttext>, TypeScript, NestJs. - Frontend: TypeScript, React Hooks + MobX. - Работа с данными: PostgreSQL, Redis. - Инструменты разработки: VS...', //snippet.responsibility
	// 		scheduleId: 'fullDay', //schedule.id
	// 		scheduleName: 'Полный день', //schedule.name
	// 		professionalRoleId: '96', //professional_roles[0].id
	// 		professionalRoleName: 'Программист, разработчик', //professional_roles[0].name
	// 		experienceId: 'noExperience', //experience.id
	// 		experienceName: 'Нет опыта', //experience.name
	// 		employmentId: 'full', //employment.id
	// 		employmentName: 'Полная занятость', //employment.name
	// 		passLevel: '0', //internal computed
	// 		advice: 'У вакансии отсутствуют ключевые навыки для оценки',
	// 		keySkills: ['Node JS', 'React', 'NestJs'],
	// 		description: 'Some desc',
	// 		id: 'asdkadk-adasda-asdasd-asdasd' //internal computed
	// 	},
	// 	{
	// 		vacancyId: '12312312', //id
	// 		name: 'Fulltack-разработчик TypeScript (NodeJs/React)', //name
	// 		salaryTo: 60000, //salary.to
	// 		currency: 'RUR', //salary.currency
	// 		typeId: 'open', //type.id
	// 		typeName: 'Открытая', //type.name
	// 		addressCity: 'Уфа', //address.city
	// 		addressStreet: 'улица Мубарякова', //address.street
	// 		addressRaw: 'Уфа, улица Мубарякова, 3', //address.raw
	// 		publishedAt: '2023-11-03T18:14:04+0300', //published_at
	// 		createdAt: '2023-11-03T18:14:04+0300', //created_at
	// 		archived: false, //archived
	// 		vacancyUrl: 'https://hh.ru/vacancy/89064284', //alternate_url
	// 		employerName: 'UFATECH', //employer.name
	// 		employerId: '630052', //employer.id
	// 		employerUrl: 'https://hh.ru/employer/630052', //employer.alternate_url
	// 		employerLogoUrl: 'https://hhcdn.ru/employer-logo-original/522678.png', //employer.logo_urls
	// 		requirements:
	// 			'Базовые знания JS, TS, React Hooks, <highlighttext>NodeJs</highlighttext>. - Умение писать быстро надёжный, легко понятный код. - Умение вникать в задачу и реализовывать...', //snippet.requirement
	// 		responsibilities:
	// 			'Технологический стек: - Backend: <highlighttext>NodeJs</highlighttext>, TypeScript, NestJs. - Frontend: TypeScript, React Hooks + MobX. - Работа с данными: PostgreSQL, Redis. - Инструменты разработки: VS...', //snippet.responsibility
	// 		scheduleId: 'fullDay', //schedule.id
	// 		scheduleName: 'Полный день', //schedule.name
	// 		professionalRoleId: '96', //professional_roles[0].id
	// 		professionalRoleName: 'Программист, разработчик', //professional_roles[0].name
	// 		experienceId: 'noExperience', //experience.id
	// 		experienceName: 'Нет опыта', //experience.name
	// 		employmentId: 'full', //employment.id
	// 		employmentName: 'Полная занятость', //employment.name
	// 		passLevel: '1', //internal computed
	// 		passMessage: '10% подходит по вашим навыкам',
	// 		advice: 'Советуем подучить: React, NodeJs, TypeScript',
	// 		keySkills: ['Node JS'],
	// 		description: 'Some desc',
	// 		id: 'asdkadk-adasda-asdasd-asdasd' //internal computed
	// 	},
	// 	{
	// 		vacancyId: '12312312', //id
	// 		name: 'Fulltack-разработчик TypeScript (NodeJs/React)', //name
	// 		salaryFrom: 40000, //salary.from
	// 		salaryTo: 60000, //salary.to
	// 		currency: 'RUR', //salary.currency
	// 		typeId: 'open', //type.id
	// 		typeName: 'Открытая', //type.name
	// 		addressCity: 'Уфа', //address.city
	// 		addressStreet: 'улица Мубарякова', //address.street
	// 		addressRaw: 'Уфа, улица Мубарякова, 3', //address.raw
	// 		publishedAt: '2023-11-03T18:14:04+0300', //published_at
	// 		createdAt: '2023-11-03T18:14:04+0300', //created_at
	// 		archived: false, //archived
	// 		vacancyUrl: 'https://hh.ru/vacancy/89064284', //alternate_url
	// 		employerName: 'UFATECH', //employer.name
	// 		employerId: '630052', //employer.id
	// 		employerUrl: 'https://hh.ru/employer/630052', //employer.alternate_url
	// 		employerLogoUrl: 'https://hhcdn.ru/employer-logo-original/522678.png', //employer.logo_urls
	// 		requirements:
	// 			'Базовые знания JS, TS, React Hooks, <highlighttext>NodeJs</highlighttext>. - Умение писать быстро надёжный, легко понятный код. - Умение вникать в задачу и реализовывать...', //snippet.requirement
	// 		responsibilities:
	// 			'Технологический стек: - Backend: <highlighttext>NodeJs</highlighttext>, TypeScript, NestJs. - Frontend: TypeScript, React Hooks + MobX. - Работа с данными: PostgreSQL, Redis. - Инструменты разработки: VS...', //snippet.responsibility
	// 		scheduleId: 'fullDay', //schedule.id
	// 		scheduleName: 'Полный день', //schedule.name
	// 		professionalRoleId: '96', //professional_roles[0].id
	// 		professionalRoleName: 'Программист, разработчик', //professional_roles[0].name
	// 		experienceId: 'noExperience', //experience.id
	// 		experienceName: 'Нет опыта', //experience.name
	// 		employmentId: 'full', //employment.id
	// 		employmentName: 'Полная занятость', //employment.name
	// 		passLevel: '2', //internal computed
	// 		advice: 'Советуем подучить: React',
	// 		passMessage: '60% подходит по вашим навыкам',
	// 		keySkills: ['Node JS', 'React'],
	// 		description: 'Some desc',
	// 		id: 'asdkadk-adasda-asdasd-asdasd' //internal computed
	// 	},
	// 	{
	// 		vacancyId: '12312312', //id
	// 		name: 'Fulltack-разработчик TypeScript (NodeJs/React)', //name
	// 		salaryFrom: 40000, //salary.from
	// 		currency: 'RUR', //salary.currency
	// 		typeId: 'open', //type.id
	// 		typeName: 'Открытая', //type.name
	// 		addressCity: 'Уфа', //address.city
	// 		addressStreet: 'улица Мубарякова', //address.street
	// 		addressRaw: 'Уфа, улица Мубарякова, 3', //address.raw
	// 		publishedAt: '2023-11-03T18:14:04+0300', //published_at
	// 		createdAt: '2023-11-03T18:14:04+0300', //created_at
	// 		archived: false, //archived
	// 		vacancyUrl: 'https://hh.ru/vacancy/89064284', //alternate_url
	// 		employerName: 'UFATECH', //employer.name
	// 		employerId: '630052', //employer.id
	// 		employerUrl: 'https://hh.ru/employer/630052', //employer.alternate_url
	// 		employerLogoUrl: 'https://hhcdn.ru/employer-logo-original/522678.png', //employer.logo_urls
	// 		requirements:
	// 			'Базовые знания JS, TS, React Hooks, <highlighttext>NodeJs</highlighttext>. - Умение писать быстро надёжный, легко понятный код. - Умение вникать в задачу и реализовывать...', //snippet.requirement
	// 		responsibilities:
	// 			'Технологический стек: - Backend: <highlighttext>NodeJs</highlighttext>, TypeScript, NestJs. - Frontend: TypeScript, React Hooks + MobX. - Работа с данными: PostgreSQL, Redis. - Инструменты разработки: VS...', //snippet.responsibility
	// 		scheduleId: 'fullDay', //schedule.id
	// 		scheduleName: 'Полный день', //schedule.name
	// 		professionalRoleId: '96', //professional_roles[0].id
	// 		professionalRoleName: 'Программист, разработчик', //professional_roles[0].name
	// 		experienceId: 'noExperience', //experience.id
	// 		experienceName: 'Нет опыта', //experience.name
	// 		employmentId: 'full', //employment.id
	// 		employmentName: 'Полная занятость', //employment.name
	// 		passLevel: '3', //internal computed
	// 		advice: 'Советуем подучить: Figma, Layout, Grid',
	// 		passMessage: '100% подходит по вашим навыкам',
	// 		keySkills: ['Node JS'],
	// 		description: 'Some desc',
	// 		id: 'asdkadk-adasda-asdasd-asdasd' //internal computed
	// 	}
	// ]
	// return data.map((project: IProject) => ({
	// 	...project,
	// 	start: new Date(project.start).toISOString().slice(0, 10),
	// 	end: new Date(project.end).toISOString().slice(0, 10)
	// }))
}
