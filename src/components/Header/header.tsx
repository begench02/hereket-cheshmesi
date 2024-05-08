import { CLink } from 'src/atoms/CLink/clink'
import { NavLink } from 'react-router-dom'
import styles from './header.module.sass'

export const Header = () => {
	return (
		<header className={styles.main}>
			<h2 className={styles.logo} onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
				Hereket Cheshmesi
			</h2>
			<nav className={styles.nav}>
				<NavLink className={({ isActive }) => isActive && styles.link__active} to='#'>
					Home
				</NavLink>
				<CLink to='#'>Places</CLink>
				<CLink to='#popular-tours'>Popular Tours</CLink>
				<CLink to='#'>About Us</CLink>
				<CLink to='#'>Four</CLink>
			</nav>
		</header>
	)
}
