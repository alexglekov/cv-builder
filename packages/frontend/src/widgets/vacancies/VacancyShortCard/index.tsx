import React from 'react'

import { IVacancy } from '../../../entities/vacancies'
import styles from './VacancyShortCard.module.scss'
import { InfoBlock } from '../../../shared/ui'
import classNames from 'classnames'

interface VacancyShortCardProps {
	state: IVacancy
}

export const VacancyShortCard: React.FC<VacancyShortCardProps> = (props: VacancyShortCardProps) => {
	const { state } = props

	return (
		<div className={styles.wrapper}>
			<div className={styles.companyName}>{state.employerName}</div>
			<div className={styles.stuff}>{state.name}</div>
			<div className={styles.addtionalInfromation}>
				{state.keySkills?.length && (
					<InfoBlock titleClassName={styles.addtionalInfromationItem} iconType="" title="Технологии">
						{state.keySkills.map((value, key) => (
							<li key={key}>
								<span>{value}</span>
							</li>
						))}
					</InfoBlock>
				)}
				{state.experienceName && (
					<InfoBlock titleClassName={styles.addtionalInfromationItem} iconType="" title="Требуемый опыт">
						<li>
							<span>{state.experienceName}</span>
						</li>
					</InfoBlock>
				)}
				{Boolean(state.salaryFrom) && Boolean(state.salaryTo) && (
					<InfoBlock titleClassName={styles.addtionalInfromationItem} iconType="" title="Зарплата">
						<li>
							<span>
								{state.salaryFrom && !state.salaryTo && state.salaryFrom}
								{!state.salaryFrom && state.salaryTo && state.salaryTo}
								{state.salaryFrom && state.salaryTo && `${state.salaryFrom} - ${state.salaryTo}`}
							</span>
						</li>
					</InfoBlock>
				)}
				{state.employmentName && (
					<InfoBlock titleClassName={styles.addtionalInfromationItem} iconType="" title="Занятость">
						<li>
							<span>{state.employmentName}</span>
						</li>
					</InfoBlock>
				)}
				{state.addressRaw && (
					<InfoBlock titleClassName={styles.addtionalInfromationItem} iconType="" title="Местоположение">
						<li>
							<span>{state.addressRaw}</span>
						</li>
					</InfoBlock>
				)}
			</div>
			{['1', '2', '3'].includes(state.passLevel || '') && (
				<div
					className={classNames(
						styles.passMessage,
						['0', '1'].includes(state.passLevel || '') ? styles.redVacancy : '',
						['2'].includes(state.passLevel || '') ? styles.orangeVacancy : '',
						['3'].includes(state.passLevel || '') ? styles.greenVacancy : ''
					)}
				>
					{state.passMessage}
				</div>
			)}
			{['0', '1', '2'].includes(state.passLevel || '') && <div className={styles.advice}>{state.advice}</div>}
		</div>
	)
}
