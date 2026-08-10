import React from 'react'
import { useParams } from 'react-router-dom'
import { TechnologieDependency } from '../../../../entities/utility'

import { ProfessionalSkillTableWidget } from '../../../../widgets/professionalSkill'

import styles from './ColleagueSkills.module.scss'

export const ColleagueSkillsPage = () => {
	const param = useParams()

	return (
		<article className={styles.wrapper}>
			<TechnologieDependency>
				<ProfessionalSkillTableWidget userId={Number(param.id)} />
			</TechnologieDependency>
		</article>
	)
}
