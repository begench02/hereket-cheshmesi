import { AboutUs } from 'pages/about-us/abous-us'
import { Contacts } from 'pages/contacts/contacts'
import { FirstPage } from 'pages/first-page/first-page'
import { Footer } from 'components/footer/footer'
import { Gallery } from 'pages/gallery/gallery'
import { Places } from 'pages/places/places'
import { PopularTours } from 'pages/popular-tours/popular-tours'
import { RouteObject } from 'react-router-dom'
import { MainLayout } from 'components/main-layout/main-layout'

export const PagesRouter: RouteObject[] = [
	{
		path: '',
		element: <MainLayout />,
		children: [
			{
				path: '/',
				Component: () => (
					<>
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
					</>
				),
			},
			{
				path: '/gallery',
				element: <Gallery />,
			},
		],
	},
]
