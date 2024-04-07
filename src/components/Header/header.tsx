import { CLink } from 'src/atoms/CLink/clink'
import styles from './header.module.sass'

export const Header = () => {
	return (
		<header className={styles.main}>
			<h2 className={styles.name}>Lorem</h2>
			<nav className={styles.nav}>
				<CLink to='#'>One</CLink>
				<CLink to='#'>Two</CLink>
				<CLink to='#'>Three</CLink>
				<CLink to='#'>Four</CLink>
			</nav>
		</header>
	)
}
