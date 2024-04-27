import './app.sass'
import { FirstPage } from 'pages/first-page/first-page'
import { Footer } from 'components/footer/footer'
import { Header } from 'components/Header/header'
import { PopularTours } from 'pages/popular-tours/popular-tours'

export const App = () => {
	return (
		<div className='main'>
			<Header />
			<FirstPage />
			<hr />
			<PopularTours />
			<hr />
			<Footer />
		</div>
	)
}
