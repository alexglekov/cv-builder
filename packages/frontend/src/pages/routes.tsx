import React from 'react'
import { useRoutes, Link, RouteObject, Outlet } from 'react-router-dom'
import { Roles } from '../entities/auth'

import { routes } from '../shared/routes'
import { AuthPage } from './Auth'

import { ColleaguesPage } from './Colleagues'
import {
	ColleagueProfilePage,
	ColleagueProjectsPage,
	ColleagueSkillsPage,
	ColleagueStoragePage
} from './Colleagues/Colleague'

import { ColleagueLayout } from './layouts/ColleagueLayout'
import { ColleaguesLayout } from './layouts/ColleaguesLayout'
import { PrivateLayout } from './layouts/PrivateLayout'
import { PublicLayout } from './layouts/PublicLayout'
import { StandartLayout } from './layouts/StandartLayout'
import { ModerationPage } from './Moderation'
import { LanguagesModerationPage } from './Moderation/Languages'
import { TechnologiesModerationPage } from './Moderation/Technologies'
import { ProfilePage } from './Profile'
import { ProjectsPage } from './Projects'
import { SkillsPage } from './Skills'
import { StoragePage } from './Storage'
import { VacanciesPage } from './Vacancies'

interface CVBuilderRoutesProps {
	role: Roles
}

// new window.webkitSpeechRecognition()

export const CVBuilderRoutes: React.FC<CVBuilderRoutesProps> = React.memo((props: CVBuilderRoutesProps) => {
	const { role } = props

	return useRoutes([
		{
			path: routes.login.path,
			element: <PublicLayout />,
			children: [
				{
					index: true,
					element: <AuthPage />
				}
			]
		},
		{
			path: '/',
			element: <PrivateLayout />,
			children: [
				{
					element: <StandartLayout />,
					children: [
						{
							path: routes.profile.path,
							element: <ProfilePage />
						},
						{
							path: routes.projects.path,
							element: <ProjectsPage />,
							children: [{ path: routes.projects.archive.path, element: <ProjectsPage /> }]
						},
						{
							path: routes.skills.path,
							element: <SkillsPage />
						},
						{
							path: routes.storage.path,
							element: <StoragePage />
						},
						{
							path: routes.vacancies.path,
							element: <VacanciesPage />
						}
					]
				},
				...(role === Roles.ADMIN || role === Roles.MANAGER
					? ([
							{
								path: routes.colleagues.path,
								element: <Outlet />,
								children: [
									{
										element: <ColleaguesLayout />,
										children: [
											{
												index: true,
												element: <ColleaguesPage />
											},
											{
												path: routes.colleagues.builders.path,
												element: <ColleaguesPage />
											},
											{
												path: routes.colleagues.admins.path,
												element: <ColleaguesPage />
											}
										]
									},
									{
										path: routes.colleagues.colleague.path,
										element: <ColleagueLayout />,
										children: [
											{
												path: routes.colleagues.colleague.profile.path,
												element: <ColleagueProfilePage />
											},
											{
												path: routes.colleagues.colleague.skills.path,
												element: <ColleagueSkillsPage />
											},
											{
												path: routes.colleagues.colleague.storage.path,
												element: <ColleagueStoragePage />
											},
											{
												path: routes.colleagues.colleague.projects.path,
												element: <ColleagueProjectsPage />,
												children: [
													{ path: routes.colleagues.colleague.projects.archive.path, element: <ColleagueProjectsPage /> }
												]
											}
										]
									}
								]
							},
							{
								path: routes.moderation.path,
								element: <StandartLayout />,
								children: [
									{
										element: <ModerationPage />,
										children: [
											{
												path: routes.moderation.technologies.path,
												element: <TechnologiesModerationPage />
											},
											{
												path: routes.moderation.languages.path,
												element: <LanguagesModerationPage />
											}
										] as RouteObject[]
									}
								]
							}
					  ] as RouteObject[])
					: [])
			]
		},
		{
			path: '*',
			element: (
				<div>
					Not found <Link to={routes.profile.goto()}>go home</Link>
				</div>
			)
		}
	])
})
