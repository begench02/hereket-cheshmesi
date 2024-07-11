import { AboutUs } from 'pages/home/about-us/abous-us'
import { ContactUs } from 'pages/contact-us/contact-us'
import { Hero } from 'pages/home/hero/hero'
import { MainLayout } from 'components/main-layout/main-layout'
import { Places } from 'pages/home/places/places'
import { PopularTours } from 'pages/home/popular-tours/popular-tours'
import { RouteObject } from 'react-router-dom'
import { Tour } from 'pages/tours/tour/tour'
import { Tours } from 'pages/tours/tours'
import './app.sass'

export const PagesRouter: RouteObject[] = [
	{
		path: '',
		element: <MainLayout />,
		children: [
			{
				path: '/',
				Component: () => (
					<div className='content'>
						<Hero />
						<Places />
						<div className='line' />
						<PopularTours />
						<div className='line' />
						<AboutUs />
					</div>
				),
			},
			{
				path: 'tours',
				Component: Tours,
			},
			{
				path: 'tours/:id',
				Component: Tour,
			},
			{
				path: '/contact-us',
				element: <ContactUs />,
			},
		],
	},
]
