import React, { useCallback, useState } from 'react'

import { IProject } from '../../../../entities/projects'
import { TechnologieDependency } from '../../../../entities/utility'

import { Button } from '../../../../shared/ui'
import { EditProjectModal } from './modal'

interface EditProjectFeatureProps {
	project: IProject
	className?: string
}

export const EditProjectFeature: React.FC<EditProjectFeatureProps> = (props: EditProjectFeatureProps) => {
	const { className, project } = props

	const [isOpenedEditPopUp, setOpenedEditPopUp] = useState(false)

	const close = useCallback(() => setOpenedEditPopUp(false), [])

	return (
		<>
			<Button className={className} title="Редактировать" onClick={() => setOpenedEditPopUp(true)} />
			{isOpenedEditPopUp && (
				<TechnologieDependency onClose={close}>
					<EditProjectModal project={project} onClose={close} />
				</TechnologieDependency>
			)}
		</>
	)
}
