import { APIProvider } from '@vis.gl/react-google-maps'
import { App } from './app'
import { createRoot } from 'react-dom/client'

const domNode = document.getElementById('root')!
createRoot(domNode).render(
	<APIProvider apiKey={process.env.GOOGLE_MAP_API_KEY}>
		<App />
	</APIProvider>,
)
