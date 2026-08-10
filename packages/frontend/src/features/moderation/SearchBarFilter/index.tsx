import React, { useEffect, useState } from 'react'

import { useTechnologiesActions } from '../../../entities/utility'
import { Icon } from '../../../shared/ui'

import styles from './SearchBar.module.scss'

export const SearchTechnologiesByNameFilterFeuature = () => {
	const [value, setValue] = useState('')

	const { changeTechnologiesFiltersAction } = useTechnologiesActions()

	useEffect(() => {
		changeTechnologiesFiltersAction({ filters: { title: value } })
	}, [value])

	return (
		<div className={styles.wrapper}>
			<div className={styles.searchLoupe}>
				<Icon type="header.loupe" />
			</div>
			<input
				value={value}
				onChange={(e) => setValue(e.target.value)}
				className={styles.searchInput}
				placeholder="Искать по заголовку..."
			/>
		</div>
	)
}
