import classNames from 'classnames'
import React from 'react'

import { IProfessionalSkill } from '../../../entities/professionalSkills'

import styles from './ProfessionalSkillBlock.module.scss'

interface ProfessionalSkillBlockWidgetProps {
	state: {
		type: string
		data: Array<
			IProfessionalSkill & {
				name: string
			}
		>
	}
}

export const ProfessionalSkillBlockWidget: React.FC<ProfessionalSkillBlockWidgetProps> = (
	props: ProfessionalSkillBlockWidgetProps
) => {
	const { state } = props

	return (
		<div className={styles.wrapper}>
			<div className={styles.skillsName}>{state.type}</div>
			<div className={styles.skillsTable}>
				{state.data.map((value) => (
					<div key={value.id} className={styles.row}>
						<div className={classNames(styles.text, styles.name)}>{value.name}</div>
						<div className={classNames(styles.text, styles.exp)}>{value.total}</div>
						<div className={classNames(styles.text, styles.last)}>{value.last}</div>
					</div>
				))}
			</div>
		</div>
	)
}
