import classNames from 'classnames'
import React, { useMemo } from 'react'

import { useAppSelector } from '../../../../shared/libs'

import { InfoBlock } from '../../../../shared/ui'
import { technologiesSelectors } from '../../../utility'
import { IProject } from '../../model'

import styles from './FullCard.module.scss'

interface FullProjectCardProps {
	state: IProject
}

export const FullProjectCard: React.FC<FullProjectCardProps> = (props: FullProjectCardProps) => {
	const { state } = props

	const technologiesState = useAppSelector(technologiesSelectors.technologiesState)

	console.log({ technologiesState })

	const technologiesMap = useMemo(() => {
		return new Map<number, { name: string; techtypeId: number }>(
			technologiesState
				.map((techtype) =>
					techtype.technologies.map((technologie) => [
						technologie.id,
						{
							name: technologie.name,
							techtypeId: techtype.id
						}
					])
				)
				.flat() as any
		)
	}, [technologiesState])

	const technologies: any = useMemo(() => {
		return state.technologies.map((id) => technologiesMap.get(id)?.name || '')
	}, [state, technologiesMap])

	return (
		<div className={styles.content}>
			<div className={styles.title}>{state.title}</div>
			<div className={styles.mainInfo}>
				{state.description && (
					<InfoBlock className={styles.description} iconType="projects.description" title="Описание">
						{state.description}
					</InfoBlock>
				)}
				{state.start && state.end && (
					<InfoBlock className={classNames(styles.objInfo)} iconType="projects.time" title="Период">
						{`${new Date(state.start).toISOString().slice(0, 10).split('-').reverse().join('.')} - ${new Date(state.end)
							.toISOString()
							.slice(0, 10)
							.split('-')
							.reverse()
							.join('.')}`}
					</InfoBlock>
				)}
				{state.position && (
					<InfoBlock className={classNames(styles.objInfo)} iconType="projects.role" title="Роль на проекте">
						{state.position}
					</InfoBlock>
				)}
				{technologies.length > 0 && (
					<InfoBlock className={classNames(styles.objInfo)} iconType="projects.env" title="Окружение">
						{technologies.join(', ')}
					</InfoBlock>
				)}
				{state.respAndAchs.length > 0 && (
					<InfoBlock
						className={classNames(styles.objInfo, styles.respAndAchs)}
						iconType="projects.tech"
						title="Обязанности и достижения"
					>
						{state.respAndAchs.map((t, index) => (
							<li key={index}>
								<span>{t}</span>
							</li>
						))}
					</InfoBlock>
				)}
			</div>
		</div>
	)
}
