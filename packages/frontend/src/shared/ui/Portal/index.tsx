/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import ReactDOM from 'react-dom'

const popupPortal = document.querySelector('#popup')
const botPortal = document.querySelector('#bot')

interface PortalProps {
	type?: 'popup' | 'bot'
	children: React.ReactNode
}

export const Portal: React.FC<PortalProps> = ({ children, type }: PortalProps) => {
	const typePortal = type || 'popup'

	return ReactDOM.createPortal(children, typePortal === 'popup' ? popupPortal! : botPortal!)
}
