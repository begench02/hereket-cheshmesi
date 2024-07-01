import { PagesRouter } from './router'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Cookie from 'js-cookie'

export const App = () => {
	const router = createBrowserRouter(PagesRouter)
	const { i18n } = useTranslation()

	useEffect(() => {
		const language = Cookie.get('lang')
		i18n.changeLanguage(language)
	}, [])

	return <RouterProvider router={router} />
}
