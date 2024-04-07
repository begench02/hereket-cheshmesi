import { App } from './app'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

const domNode = document.getElementById('root')!
createRoot(domNode).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
)
