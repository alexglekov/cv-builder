/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { BaseSyntheticEvent, useMemo, useState } from 'react'

import { Icon, TransparentButton } from '../../../../../../shared/ui'

import styles from './Languages.module.scss'
import { InfoState } from '../../../model'
import { LanguageLevelsArray } from '../../../../../../shared/enums'
import { useAppSelector } from '../../../../../../shared/libs'
import { ILanguage, languagesSelectors } from '../../../../../../entities/utility'

interface LanguagesEditWidgetProps {
	state: InfoState
	setState: (state: InfoState) => void
	errors: Record<keyof InfoState, string | undefined> | null
}

export const LanguagesEditWidget: React.FC<LanguagesEditWidgetProps> = (props: LanguagesEditWidgetProps) => {
	const { state, setState } = props

	const languages = useAppSelector(languagesSelectors.languagesState)

	const [isAddLanguage, setIsAddLanguage] = useState(false)
	const [value, setValue] = useState({ rank: '', languageId: '' })

	const languagesMap = useMemo(() => {
		return new Map<number, ILanguage>(languages.map((language) => [language.id, language]))
	}, [])

	const addLanguage = () => {
		const newState: any = { ...state }
		newState.languages = [...state.languages, value]
		setState(newState)
		setValue({ rank: '', languageId: '' })
	}

	return (
		<div className={styles.wrapper}>
			{state.languages.length > 0 ? (
				<div className={styles.languages}>
					<div className={styles.row}>
						<div className={styles.col}>Название</div>
						<div className={styles.col}>Уровень владения</div>
					</div>
					<div className={styles.contentBody}>
						{[...state.languages].map((item, index) => (
							<div className={styles.row} key={index}>
								<div className={styles.col}>{languagesMap.get(item.languageId)?.name}</div>
								<div className={styles.col}>{item.rank}</div>

								<div
									className={styles.delBtn}
									onClick={() =>
										setState({ ...state, languages: state.languages.filter((l) => l.languageId !== item.languageId) })
									}
								>
									<Icon type="edit-profile.close" />
								</div>
							</div>
						))}
					</div>
				</div>
			) : (
				<div className={styles.noLanguages}>Иностранных языков нет...</div>
			)}
			<form
				onSubmit={(e) => (e.preventDefault(), addLanguage())}
				onChange={(e: BaseSyntheticEvent) => {
					if (e.target.name === 'languageId') {
						setValue((prev) => ({ ...prev, [e.target.name]: Number(e.target.value) }))
						return
					}
					setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
				}}
			>
				<div className={styles.addLanguage}>
					{isAddLanguage && (
						<div className={styles.inputData}>
							<div className={styles.inputWrapper}>
								<select name="languageId">
									<option defaultValue={''}>Выберете язык</option>
									{languages.reduce((prev, lang, index) => {
										if (!state.languages.find((l) => l.languageId === lang.id)) {
											prev.push(
												<option key={index} value={Number(lang.id)}>
													{lang.name}
												</option>
											)
										}

										return prev
									}, [] as any)}
								</select>
							</div>
							<div className={styles.inputWrapper}>
								<select name="rank" placeholder="Уровень">
									<option defaultValue={''}>Выберете уровень</option>
									{LanguageLevelsArray.map((level, index) => (
										<option key={index} value={level}>
											{level}
										</option>
									))}
								</select>
							</div>
							<div className={styles.icon} onClick={() => (addLanguage(), setIsAddLanguage(false))}>
								<Icon type="edit-profile.plus" />
							</div>
							<div className={styles.icon} onClick={() => (setIsAddLanguage(false), setValue({ rank: '', languageId: '' }))}>
								<Icon type="edit-profile.cancel" />
							</div>
						</div>
					)}
					{!isAddLanguage && (
						<TransparentButton
							className={styles.btn}
							title="Добавить язык"
							onClick={() => {
								setIsAddLanguage(true)
							}}
						/>
					)}
				</div>
			</form>
		</div>
	)
}
