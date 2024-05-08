import './app.sass'
import { FirstPage } from 'pages/first-page/first-page'
import { Footer } from 'components/footer/footer'
import { Header } from 'components/Header/Header'
import { PopularTours } from 'pages/popular-tours/popular-tours'
import { Places } from 'pages/places/places'
import { Contacts } from 'pages/contacts/contacts'

export const App = () => {
	return (
		<div className='main'>
			<Header />
			<FirstPage />
			<hr />
			<Places />
			<hr />
			<PopularTours />
			<hr />
			<Contacts />
			<hr />
			<Footer />
		</div>
	)
}
