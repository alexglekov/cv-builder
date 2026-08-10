import React, { useMemo } from 'react'
import classNames from 'classnames'

import { Frame } from '../../../shared/ui'

import styles from './AdditionalInfo.module.scss'
import { userSelectors } from '../../../entities/user'
import { useAppSelector } from '../../../shared/libs'
import _ from 'lodash'

export const UserAdditionalInfoWidget = () => {
	const user = useAppSelector(userSelectors.userState)

	const userTechnologies = useMemo(() => {
		return user
			? user?.technologies.reduce(
					(prev, value) => {
						if (!prev[value.type]) {
							prev[value.type] = []
						}

						prev[value.type].push(value.name)

						return prev
					},
					{
						Биография: [user.biography],
						Домены: user.domains
					} as unknown as { [key: string]: Array<string> }
			  )
			: {}
	}, [user])

	return user ? (
		<>
			{_.keys(userTechnologies).map((key) => (
				<Frame key={key} className={classNames(styles.forAll, styles.standartFrame)} title={key}>
					{userTechnologies[key].join(', ')}
				</Frame>
			))}
		</>
	) : null
}
