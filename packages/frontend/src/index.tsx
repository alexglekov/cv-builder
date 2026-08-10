import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalLoader } from './shared/ui'

const CvBuilderApp = React.lazy(() => import('./app'))

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	// <React.StrictMode>
	<Suspense fallback={<GlobalLoader />}>
		<CvBuilderApp />
	</Suspense>
	// </React.StrictMode>
)
