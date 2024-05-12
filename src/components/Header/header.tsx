import { useState } from 'react'
import Logo from 'assets/imgs/logo.png'
import styles from './header.module.sass'

export const Header = () => {
	const [currentLink, setCurrentLink] = useState(window.location.hash)

	return (
		<header className={styles.main}>
			<div className={styles.logo__block}>
				<img src={Logo} alt='Logo' width={140} height={100} />
				<h2 className={styles.logo} onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
					Hereket Cheshmesi
				</h2>
			</div>
			<nav className={styles.nav}>
				<div className={styles.link_block}>
					<a
						href='#'
						className={styles.link && currentLink == '' && styles.link__active}
						onClick={(e: any) => setCurrentLink(e.target.hash)}
					>
						Home
					</a>
				</div>
				<div className={styles.link_block}>
					<a
						href='#places'
						className={styles.link && currentLink == '#places' && styles.link__active}
						onClick={(e: any) => setCurrentLink(e.target.hash)}
					>
						Places
					</a>
				</div>
				<div className={styles.link_block}>
					<a
						href='#popular-tours'
						className={styles.link && currentLink == '#popular-tours' && styles.link__active}
						onClick={(e: any) => setCurrentLink(e.target.hash)}
					>
						Popular Tours
					</a>
				</div>
				<div className={styles.link_block}>
					<a
						href='#about-us'
						className={styles.link && currentLink == '#about-us' && styles.link__active}
						onClick={(e: any) => setCurrentLink(e.target.hash)}
					>
						About Us
					</a>
				</div>
				<div className={styles.link_block}>
					<a
						href='#contacts'
						className={styles.link && currentLink == '#contacts' && styles.link__active}
						onClick={(e: any) => setCurrentLink(e.target.hash)}
					>
						Contacts
					</a>
				</div>
			</nav>
		</header>
	)
}
