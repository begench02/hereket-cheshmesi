import './app.sass'
import { AboutUs } from 'pages/about-us/abous-us'
import { Contacts } from 'pages/contacts/contacts'
import { FirstPage } from 'pages/first-page/first-page'
import { Footer } from 'components/footer/footer'
import { Header } from 'components/Header/header'
import { Places } from 'pages/places/places'
import { PopularTours } from 'pages/popular-tours/popular-tours'

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
			<AboutUs />
			<hr />
			<Contacts />
			<hr />
			<Footer />
		</div>
	)
}
