import React from 'react'
import classNames from 'classnames'
import DOMPurify from 'dompurify'

import { IVacancy } from '../../../entities/vacancies'
import styles from './VacancyFullCard.module.scss'

interface VacancyFullCardProps {
	state: IVacancy
}

export const VacancyFullCard: React.FC<VacancyFullCardProps> = (props: VacancyFullCardProps) => {
	const { state } = props

	return (
		<div className={styles.wrapper}>
			<div className={styles.companyName}>{state.employerName}</div>
			<div className={styles.addtionalInfromation}>
				<div className={styles.addtionalInfromationItem}>{state.name}</div>
				{state.experienceName && <div className={styles.addtionalInfromationItem}>{state.experienceName}</div>}
				{(state.salaryFrom || state.salaryTo) && (
					<div className={styles.addtionalInfromationItem}>
						{state.salaryFrom && !state.salaryTo && state.salaryFrom}
						{!state.salaryFrom && state.salaryTo && state.salaryTo}
						{state.salaryFrom && state.salaryTo && `${state.salaryFrom} - ${state.salaryTo}`}
					</div>
				)}
				{state.employmentName && <div className={styles.addtionalInfromationItem}>{state.employmentName}</div>}
				{state.addressRaw && <div className={styles.addtionalInfromationItem}>{state.addressRaw}</div>}
			</div>
			{state.description && (
				<div
					className={styles.description}
					dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(state.description || '') }}
				/>
			)}
			{state.responsibilities && <div className={styles.title}>Обязанности</div>}
			{state.responsibilities && (
				<div
					className={styles.responsibilities}
					dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(state.responsibilities || '') }}
				/>
			)}
			{state.requirements && <div className={styles.title}>Требования</div>}
			{state.requirements && (
				<div
					className={styles.requirements}
					dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(state.requirements || '') }}
				/>
			)}
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
