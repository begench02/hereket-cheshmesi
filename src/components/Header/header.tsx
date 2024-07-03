import { Dropdown } from 'components/dropdown/dropdown'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import clsx from 'clsx'
import Logo from 'assets/imgs/logo.png'
import styles from './header.module.sass'
import { useTranslation } from 'react-i18next'

export const Header = () => {
	const [currentLink, setCurrentLink] = useState(window.location.hash)
	const { t } = useTranslation()

	return (
		<header className={styles.main}>
			<nav className={styles.nav__left}>
				<div className={styles.link__block}>
					<a
						href='#places'
						className={clsx(styles.link__text, currentLink == '#places' && styles.link__active)}
						onClick={(e: any) => setCurrentLink(e.target.hash)}
					>
						{t('places')}
					</a>
				</div>
				<div className={styles.link__block}>
					<a
						href='/#popular-tours'
						className={clsx(styles.link__text, currentLink == '#popular-tours' && styles.link__active)}
						onClick={(e: any) => setCurrentLink(e.target.hash)}
					>
						{t('popular_tours')}
					</a>
				</div>
			</nav>
			<div className={styles.logo}>
				<Link to='/'>
					<img src={Logo} alt='Logo' width={140} height={100} />
				</Link>
			</div>
			<nav className={styles.nav__right}>
				<div className={styles.link__block}>
					<Link
						to='contact-us'
						className={clsx(styles.link__text, currentLink == '#contacts' && styles.link__active)}
						onClick={(e: any) => setCurrentLink(e.target.hash)}
					>
						{t('contact_us')}
					</Link>
				</div>
				<div className={styles.link__block}>
					<a
						href='#about-us'
						className={clsx(styles.link__text, currentLink == '#about-us' && styles.link__active)}
						onClick={(e: any) => setCurrentLink(e.target.hash)}
					>
						{t('about_us')}
					</a>
				</div>
				<Dropdown />
			</nav>
		</header>
	)
}
