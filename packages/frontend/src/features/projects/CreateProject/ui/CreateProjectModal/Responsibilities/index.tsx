/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import _ from 'lodash'
import React, { useState } from 'react'
import { Icon, TransparentButton } from '../../../../../../shared/ui'
import { InfoState } from '../../../model'

import styles from './Responsibilities.module.scss'

interface ResponsibilitiesEditWidgetProps {
	state: InfoState
	setState: (state: InfoState) => void
	errors: any
}

export const ResponsibilitiesEditWidget: React.FC<ResponsibilitiesEditWidgetProps> = (
	props: ResponsibilitiesEditWidgetProps
) => {
	const { state, setState } = props

	const [isAddDomain, setIsAddDomain] = useState(false)
	const [value, setValue] = useState('')

	const addDomain = () => {
		const newState: any = { ...state }
		newState.respAndAchs = [...state.respAndAchs, value]
		setState(newState)
		setValue('')
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.responsibilitiesArea}>
				{state.respAndAchs.length > 0 ? (
					state.respAndAchs.map((item, index) => (
						<div className={styles.item} key={index}>
							<div className={styles.text}>{item}</div>
							<div
								className={styles.icon}
								onClick={() => setState({ ...state, respAndAchs: state.respAndAchs.filter((i) => i !== item) })}
							>
								<Icon type="edit-profile.close" />
							</div>
						</div>
					))
				) : (
					<div className={styles.noResponsibilities}>Обязанностей или достижений нет...</div>
				)}
			</div>
			<div className={styles.content} onSubmit={addDomain}>
				<div className={styles.addDomain}>
					{isAddDomain && (
						<div className={styles.inputData}>
							<div className={styles.inputNameWrapper}>
								<input value={value} onChange={(e) => setValue(e.target.value)} name="name" placeholder="Название..." />
							</div>
							<div className={styles.icon} onClick={() => (addDomain(), setIsAddDomain(false))}>
								<Icon type="edit-profile.plus" />
							</div>
							<div className={styles.icon} onClick={() => setIsAddDomain(false)}>
								<Icon type="edit-profile.cancel" />
							</div>
						</div>
					)}
					{!isAddDomain && (
						<TransparentButton
							className={styles.btn}
							title="Добавить достижение"
							onClick={() => {
								setIsAddDomain(true)
							}}
						/>
					)}
				</div>
			</div>
		</div>
	)
}
