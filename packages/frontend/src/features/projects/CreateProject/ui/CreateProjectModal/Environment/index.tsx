/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useMemo, useState } from 'react'

import { IProject } from '../../../../../../entities/projects'
import { convertEnumTechTypeToString, technologiesSelectors } from '../../../../../../entities/utility'
import { useAppSelector } from '../../../../../../shared/libs'
import { Icon, TransparentButton } from '../../../../../../shared/ui'

import styles from './Environment.module.scss'

type TypeState = Pick<IProject, 'technologies'>

interface EnvironmentWidgetProps {
	state: TypeState
	setState: (state: TypeState) => void
	errors: Record<keyof TypeState, string | undefined> | null
}

export const EnvironmentWidget: React.FC<EnvironmentWidgetProps> = (props: EnvironmentWidgetProps) => {
	const { setState, state } = props

	const technologies = useAppSelector(technologiesSelectors.technologiesState)

	const [isAddTech, setIsAddTech] = useState(false)
	const [techSkill, setTechSkill] = useState(-1)
	const [techType, setTychType] = useState(-1)

	const technologiesMap = useMemo(() => {
		return new Map<number, { name: string; techtypeId: number }>(
			technologies
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
	}, [technologies])

	const techtypesMap = useMemo(() => {
		return new Map<number, string>(technologies.map((techtype) => [techtype.id, techtype.name]))
	}, [technologies])

	useEffect(() => {
		setTychType(-1)
	}, [isAddTech])

	useEffect(() => {
		setTechSkill(-1)
	}, [techType])

	const onAddTechnology = () => {
		if (techSkill != -1) {
			setState({ ...state, technologies: [...state.technologies, techSkill] })
			setIsAddTech(false)
		}
	}

	return (
		<div className={styles.wrapper}>
			{state.technologies.length > 0 ? (
				<div className={styles.content}>
					<div className={styles.techn}>
						<div className={styles.row}>
							<div className={styles.col}>Тип</div>
							<div className={styles.col}>Название</div>
						</div>
						<div className={styles.contentBody}>
							{[...state.technologies].map((item, index) => (
								<div className={styles.row} key={index}>
									<div className={styles.col}>{techtypesMap.get(technologiesMap.get(item)?.techtypeId || 0)}</div>
									<div className={styles.col}>{technologiesMap.get(item)?.name || ''}</div>
									<div
										className={styles.delBtn}
										onClick={() => setState({ ...state, technologies: state.technologies.filter((it) => it !== item) })}
									>
										<Icon type="edit-profile.close" />
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			) : (
				<div className={styles.noData}>Окружение не задано...</div>
			)}
			<div className={styles.addTechnology}>
				{isAddTech && (
					<div className={styles.inputData}>
						<div className={styles.inputWrapper}>
							<select value={techType} onChange={(e) => setTychType(Number(e.target.value))}>
								<option defaultValue={''}>Выберете тип</option>
								{technologies.map((item, index) => (
									<option key={index} value={item.id}>
										{item.name}
									</option>
								))}
							</select>
						</div>
						<div className={styles.inputWrapper}>
							<select value={techSkill} onChange={(e) => setTechSkill(Number(e.target.value))}>
								<option defaultValue={''}>Выберете технологию</option>
								{technologies
									.find((techtype) => techtype.id === techType)
									?.technologies.filter((technologie) => !state.technologies.includes(technologie.id))
									.map((tech, index) => (
										<option key={index} value={tech.id}>
											{tech.name}
										</option>
									))}
							</select>
						</div>
						<div className={styles.icon} onClick={() => onAddTechnology()}>
							<Icon type="edit-profile.plus" />
						</div>
						<div className={styles.icon} onClick={() => setIsAddTech(false)}>
							<Icon type="edit-profile.cancel" />
						</div>
					</div>
				)}
				{!isAddTech && (
					<TransparentButton
						className={styles.btn}
						title="Добавить окружение"
						onClick={() => {
							setIsAddTech(true)
						}}
					/>
				)}
			</div>
		</div>
	)
}
