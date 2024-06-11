import { useState } from 'react'
import clsx from 'clsx'
import Logo from 'assets/imgs/logo.png'
import styles from './header.module.sass'

export const Header = () => {
	const [currentLink, setCurrentLink] = useState(window.location.hash)

	return (
		<header className={styles.main}>
			<nav className={styles.nav__left}>
				<div className={styles.link__block}>
					<a
						href='#'
						className={clsx(styles.link__text, currentLink == '' && styles.link__active)}
						onClick={(e: any) => setCurrentLink(e.target.hash)}
					>
						Home
					</a>
				</div>
				<div className={styles.link__block}>
					<a
						href='#places'
						className={clsx(styles.link__text, currentLink == '#places' && styles.link__active)}
						onClick={(e: any) => setCurrentLink(e.target.hash)}
					>
						Places
					</a>
				</div>
			</nav>
			<div className={styles.logo}>
				<img src={Logo} alt='Logo' width={140} height={100} />
			</div>
			<nav className={styles.nav__right}>
				<div className={styles.link__block}>
					<a
						href='#popular-tours'
						className={clsx(styles.link__text, currentLink == '#popular-tours' && styles.link__active)}
						onClick={(e: any) => setCurrentLink(e.target.hash)}
					>
						Popular Tours
					</a>
				</div>
				<div className={styles.link__block}>
					<a
						href='#about-us'
						className={clsx(styles.link__text, currentLink == '#about-us' && styles.link__active)}
						onClick={(e: any) => setCurrentLink(e.target.hash)}
					>
						About Us
					</a>
				</div>
				<div className={styles.link__block}>
					<a
						href='#contacts'
						className={clsx(styles.link__text, currentLink == '#contacts' && styles.link__active)}
						onClick={(e: any) => setCurrentLink(e.target.hash)}
					>
						Contacts
					</a>
				</div>
			</nav>
		</header>
	)
}
