import './i18n'
import { App } from './app'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'

const domNode = document.getElementById('root')!
createRoot(domNode).render(
	<>
		<App />
		<Toaster />
	</>,
)
