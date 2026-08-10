import React from 'react'
import { authSelectors } from '../../entities/auth'
import { TechnologieDependency } from '../../entities/utility'
import { useAppSelector } from '../../shared/libs'

import { ProfessionalSkillTableWidget } from '../../widgets/professionalSkill'

import styles from './Skills.module.scss'

export const SkillsPage = () => {
	const userId = useAppSelector(authSelectors.userId)

	return (
		<article className={styles.wrapper}>
			<TechnologieDependency>
				<ProfessionalSkillTableWidget userId={userId!} />
			</TechnologieDependency>
		</article>
	)
}
