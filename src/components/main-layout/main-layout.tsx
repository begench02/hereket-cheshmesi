import { Footer } from 'components/footer/footer'
import { Header } from 'components/header/header'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
	return (
		<div>
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}
