/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import _ from 'lodash'
import React, { SyntheticEvent, useState } from 'react'
import { Icon, TransparentButton } from '../../../../../../shared/ui'
import { InfoState } from '../../../model'

import styles from './Domains.module.scss'

interface DomainsEditWidgetProps {
	state: InfoState
	setState: (state: InfoState) => void
	errors: any
}

export const DomainsEditWidget: React.FC<DomainsEditWidgetProps> = (props: DomainsEditWidgetProps) => {
	const { state, setState, errors } = props

	const [isAddDomain, setIsAddDomain] = useState(false)
	const [value, setValue] = useState('')

	const addDomain = () => {
		const newState: any = { ...state }
		newState.domains = [...state.domains, value]
		setState(newState)
		setValue('')
	}

	console.log(errors)

	return (
		<div className={styles.wrapper}>
			<div className={styles.domainsArea}>
				{state.domains.length > 0 ? (
					state.domains.map((item, index) => (
						<div className={styles.item} key={index}>
							<div className={styles.text}>{item}</div>
							<div
								className={styles.icon}
								onClick={() => setState({ ...state, domains: state.domains.filter((i) => i !== item) })}
							>
								<Icon type="edit-profile.close" />
							</div>
						</div>
					))
				) : (
					<div className={styles.noDomains}>Доменов нет...</div>
				)}
			</div>
			<form className={styles.content} onSubmit={(e) => (e.preventDefault(), addDomain())}>
				<div className={styles.addDomain}>
					{isAddDomain && (
						<div className={styles.inputData}>
							<div className={styles.inputNameWrapper}>
								<input
									value={value}
									onChange={(e) => setValue(e.target.value)}
									name="name"
									placeholder="Название домена..."
								/>
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
							title="Добавить домен"
							onClick={() => {
								setIsAddDomain(true)
							}}
						/>
					)}
					{errors && (
						<div className={styles.errorMsg}>
							{(() => {
								const domainsError = _.keys(errors).find((key) => key.startsWith('domains'))

								if (domainsError) {
									const index = Number(domainsError?.replace('domains[', '').replace(']', ''))

									if (state.domains[index]) {
										return `"${state.domains[index]}" ${errors[domainsError]}`
									}

									return errors[domainsError]
								}

								return ''
							})()}
						</div>
					)}
				</div>
			</form>
		</div>
	)
}
