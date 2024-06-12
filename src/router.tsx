import { AboutUs } from 'pages/about-us/abous-us'
import { Contacts } from 'pages/contacts/contacts'
import { FirstPage } from 'pages/first-page/first-page'
import { Footer } from 'components/footer/footer'
import { Gallery } from 'pages/gallery/gallery'
import { Places } from 'pages/places/places'
import { PopularTours } from 'pages/popular-tours/popular-tours'
import { RouteObject } from 'react-router-dom'
import { MainLayout } from 'components/main-layout/main-layout'
import styles from './app.module.sass'

export const PagesRouter: RouteObject[] = [
	{
		path: '',
		element: <MainLayout />,
		children: [
			{
				path: '/',
				Component: () => (
					<div className={styles.content}>
						<FirstPage />
						<div className={styles.line}></div>
						{/* <hr /> */}
						<Places />
						<div className={styles.line}></div>
						{/* <hr /> */}
						<PopularTours />
						<div className={styles.line}></div>
						{/* <hr /> */}
						<AboutUs />
						<div className={styles.line}></div>
						{/* <hr /> */}
						{/* <Contacts /> */}
						{/* <hr /> */}
						<Footer />
					</div>
				),
			},
			{
				path: '/gallery',
				element: <Gallery />,
			},
		],
	},
]
