import React, { useEffect, useState } from 'react'

import { useProjectsActions } from '../../../entities/projects'
import { Icon } from '../../../shared/ui'

import styles from './SearchBar.module.scss'

export const SearchProjectsByNameFilterFeuature = () => {
	const [value, setValue] = useState('')

	const { changeProjectsFiltersAction } = useProjectsActions()

	useEffect(() => {
		changeProjectsFiltersAction({ filters: { title: value } })
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
				placeholder="Искать по имени..."
			/>
		</div>
	)
}
