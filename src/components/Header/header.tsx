import { CLink } from 'src/atoms/CLink/clink'
import styles from './header.module.sass'

export const Header = () => {
	return (
		<header className={styles.main}>
			<h2 className={styles.logo} onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
				Hereket Çeşmesi
			</h2>
			<nav className={styles.nav}>
				<CLink to='#'>One</CLink>
				<CLink to='#'>Two</CLink>
				<CLink to='#popular-tours'>Popular Tours</CLink>
				<CLink to='#'>Four</CLink>
			</nav>
		</header>
	)
}
