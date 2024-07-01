import { AboutUs } from 'pages/about-us/abous-us'
import { ContactUs } from 'pages/contact-us/contact-us'
import { Footer } from 'components/footer/footer'
import { Gallery } from 'pages/gallery/gallery'
import { HeroSection } from 'pages/home/hero-section/hero-section'
import { MainLayout } from 'components/main-layout/main-layout'
import { PlacesSection } from 'pages/places-section/places-section'
import { PopularTours } from 'pages/popular-tours/popular-tours'
import { RouteObject } from 'react-router-dom'
import { Tours } from 'pages/tours/tours'
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
						<HeroSection />
						<PlacesSection />
						<PopularTours />
						<AboutUs />
						<Footer />
					</div>
				),
			},
			{
				path: '/tours',
				element: <Tours />,
			},
			{
				path: '/contact-us',
				element: <ContactUs />,
			},

			{
				path: '/gallery',
				element: <Gallery />,
			},
		],
	},
]
