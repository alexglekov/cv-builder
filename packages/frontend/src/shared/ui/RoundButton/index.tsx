/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import classNames from 'classnames'
import React, { useRef } from 'react'
import { convertToAngle } from '../../libs'
import { Icon } from '../Icon'
import styles from './RoundButton.module.scss'

interface RoundButtonProps {
	className?: string
	onClick: () => void
}

export const RoundButton: React.FC<RoundButtonProps> = (props) => {
	const { className, onClick } = props

	const buttonRef = useRef<any>(null)

	const clickWrapper = () => {
		if (buttonRef.current) {
			const styles = window.getComputedStyle(buttonRef.current)
			const matrix = styles.getPropertyValue('transform')
			let angle = 180
			if (matrix !== 'none') {
				const currAngle = convertToAngle(matrix)
				angle = currAngle + 180
			}
			buttonRef.current.style.transform = `rotate(${angle}deg)`
		}

		onClick()
	}

	return (
		<div ref={buttonRef} onClick={clickWrapper} className={classNames(styles.wrapper, className)}>
			<Icon type="global.arrow" />
		</div>
	)
}
