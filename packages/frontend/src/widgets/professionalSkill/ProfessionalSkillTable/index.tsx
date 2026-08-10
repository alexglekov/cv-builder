import classNames from 'classnames'
import _ from 'lodash'
import React, { useEffect } from 'react'

import {
	IProfessionalSkill,
	professionalSkillsSelectors,
	useProfessionalSkillsActions
} from '../../../entities/professionalSkills'
import { technologiesSelectors } from '../../../entities/utility'
import { useAppSelector } from '../../../shared/libs'
import { Loader } from '../../../shared/ui'
import { ProfessionalSkillBlockWidget } from '../ProfessionalSkillBlock'

import styles from './ProfessionalSkillTable.module.scss'

interface ProfessionalSkillTableWidgetProps {
	userId: number
}

export const ProfessionalSkillTableWidget: React.FC<ProfessionalSkillTableWidgetProps> = (
	props: ProfessionalSkillTableWidgetProps
) => {
	const { userId } = props

	const skills = useAppSelector(professionalSkillsSelectors.professionalSkillsState)
	const techtypes = useAppSelector(technologiesSelectors.technologiesState)

	const isLoading = useAppSelector(professionalSkillsSelectors.isLoading)
	const isFailed = useAppSelector(professionalSkillsSelectors.isFailed)
	const isLoaded = useAppSelector(professionalSkillsSelectors.isLoaded)

	const { loadProfessionalSkills } = useProfessionalSkillsActions()

	useEffect(() => {
		if (!isLoaded) {
			loadProfessionalSkills({ userId })
		}
	}, [])

	if (isLoading) {
		return (
			<div className={styles.loaderWrapper}>
				<Loader />
			</div>
		)
	}

	if (isFailed) {
		return <div> Ошибка !!! </div>
	}

	const professionalSkills = techtypes.reduce((prevState, techtype) => {
		const { name, technologies } = techtype

		technologies.forEach((technologie) => {
			const skill = skills.find((skill) => skill.id === technologie.id)
			if (skill) {
				if (!prevState[name]) {
					prevState[name] = []
				}
				prevState[name].push({
					...skill,
					name: technologie.name
				})
			}
		})

		return prevState
	}, {} as Record<string, Array<IProfessionalSkill & { name: string }>>)

	return (
		<div className={styles.wrapper}>
			{skills.length > 0 && (
				<div className={styles.headerSkillsTable}>
					<div className={classNames(styles.skillColumn, styles.textColumn)}>Навык</div>
					<div className={classNames(styles.expsColumn, styles.textColumn)}>Опыт в годах</div>
					<div className={classNames(styles.lastUsedColumn, styles.textColumn)}>Последний раз использовался</div>
				</div>
			)}
			{_.keys(professionalSkills).map((key: any, index, array) => (
				<div key={key} className={classNames(index != array.length - 1 && styles.border, styles.block)}>
					<ProfessionalSkillBlockWidget state={{ type: key, data: professionalSkills[key as any] }} />
				</div>
			))}
			{skills.length === 0 && <div className={styles.notSkills}>Проектов нет...</div>}
		</div>
	)
}
