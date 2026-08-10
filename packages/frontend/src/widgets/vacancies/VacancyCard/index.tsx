import React, { useState } from 'react'
import classNames from 'classnames'

import styles from './VacancyCard.module.scss'
import { RoundButton } from '../../../shared/ui'
import { IVacancy } from '../../../entities/vacancies'
import { VacancyFullCard } from '../VacancyFullCard'
import { VacancyShortCard } from '../VacancyShortCard'
import { DeleteVacancyFeature, GotoOriginalVacancyFeature } from '../../../features/vacancies'

interface VacancyCardWidgetWidgetProps {
	state: IVacancy
	className?: string
}

export const VacancyCardWidget: React.FC<VacancyCardWidgetWidgetProps> = (props: VacancyCardWidgetWidgetProps) => {
	const { state } = props

	const [isOpend, setIsOpend] = useState(false)

	return (
		<div
			className={classNames(
				styles.wrapper,
				isOpend ? styles.isOpend : styles.isNotOpend,
				['0', '1'].includes(state.passLevel || '') ? styles.redVacancy : '',
				['2'].includes(state.passLevel || '') ? styles.orangeVacancy : '',
				['3'].includes(state.passLevel || '') ? styles.greenVacancy : ''
			)}
		>
			<div className={styles.cardWrapper}>
				{isOpend ? <VacancyFullCard state={state} /> : <VacancyShortCard state={state} />}
				<div className={styles.features}>
					<GotoOriginalVacancyFeature url={state.vacancyUrl || ''} />
					<DeleteVacancyFeature vacancyId={state.id} />
				</div>
			</div>
			<RoundButton className={styles.circleBtn} onClick={() => setIsOpend((value) => !value)} />
		</div>
	)
}
