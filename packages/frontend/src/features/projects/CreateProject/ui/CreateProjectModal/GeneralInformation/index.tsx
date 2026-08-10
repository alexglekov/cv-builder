import classNames from 'classnames'
import React, { BaseSyntheticEvent } from 'react'

import { IProject, getFormattedDate } from '../../../../../../entities/projects'

import styles from './GeneralInformation.module.scss'

type TypeState = Pick<IProject, 'description' | 'title' | 'start' | 'end' | 'position'>

interface GeneralInformationWidgetProps {
	state: TypeState
	setState: (state: TypeState) => void
	errors: Record<keyof TypeState, string | undefined> | null
}

function isValidDate(date: Date) {
	return new Date(date).toString() !== 'Invalid Date'
}

export const GeneralInformationWidget: React.FC<GeneralInformationWidgetProps> = (props: GeneralInformationWidgetProps) => {
	const { setState, state, errors } = props

	console.log({ project: state })

	return (
		<div className={styles.wrapper}>
			<div
				className={styles.content}
				onChange={(e: BaseSyntheticEvent) => {
					const newState: any = { ...state }

					const { name, value } = e.target

					newState[name] = value
					setState(newState)
				}}
			>
				<fieldset className={errors?.title && styles.errorFieldSet}>
					<legend>Название проекта</legend>
					<input value={state.title} name="title" />
				</fieldset>
				<fieldset className={errors?.description && styles.errorFieldSet}>
					<legend>Описание</legend>
					<textarea value={state.description} name="description" />
				</fieldset>
				<fieldset className={classNames(styles.position, errors?.position && styles.errorFieldSet)}>
					<legend>Роль на проекте</legend>
					<input value={state.position} name="position" />
				</fieldset>

				<div className={styles.time}>
					<div className={styles.title}>Период работы на проекте</div>
					<div className={styles.inputs}>
						C
						<fieldset className={errors?.start && styles.errorFieldSet}>
							<input type="date" value={state.start} name="start" />
						</fieldset>
						По
						<fieldset className={errors?.end && styles.errorFieldSet}>
							<input type="date" value={state.end} name="end" />
						</fieldset>
					</div>
				</div>
				{errors && (
					<div className={styles.errorMsg}>
						{errors.title ?? errors.description ?? errors.position ?? errors.end ?? errors.start ?? errors.end}
					</div>
				)}
			</div>
		</div>
	)
}
