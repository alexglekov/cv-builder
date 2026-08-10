import React from 'react'

import { Button } from '../../../shared/ui'

import styles from './DeleteVacancy.module.scss'
import { useVacanciesActions } from '../../../entities/vacancies'

interface DeleteVacancyFeatureProps {
	vacancyId: string
}

export const DeleteVacancyFeature: React.FC<DeleteVacancyFeatureProps> = (props: DeleteVacancyFeatureProps) => {
	const { vacancyId } = props

	const { deleteVacancy } = useVacanciesActions()

	return <Button className={styles.wrapper} onClick={() => deleteVacancy({ vacancyId })} title="Удалить" />
}
