import { Dropdown } from 'components/dropdown/dropdown'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import Logo from 'assets/imgs/logo.png'
import styles from './header.module.sass'

export const Header = () => {
	const [currentLink, setCurrentLink] = useState(window.location.hash)
	const { t } = useTranslation()

	return (
		<header className={styles.header}>
			<nav className={clsx(styles.nav, styles.nav__left)}>
				<div className={styles.link}>
					<a
						href='#places'
						className={clsx(styles.link__text, currentLink == '#places' && styles['link__text--active'])}
						onClick={(e: any) => setCurrentLink(e.target.hash)}
					>
						{t('places')}
					</a>
				</div>
				<div className={styles.link}>
					<Link
						to='/tours'
						className={clsx(
							styles.link__text,
							currentLink == '#popular-tours' && styles['link__text--active'],
						)}
						onClick={(e: any) => setCurrentLink(e.target.hash)}
					>
						{t('tours')}
					</Link>
				</div>
			</nav>
			<div className={styles.header__logo}>
				<Link to='/'>
					<img src={Logo} alt='Logo' width={140} height={100} />
				</Link>
			</div>
			<nav className={clsx(styles.nav, styles.nav__right)}>
				<div className={styles.link}>
					<Link
						to='contact-us'
						className={clsx(styles.link__text, currentLink == 'contact-us' && styles['link--active'])}
						onClick={(e: any) => setCurrentLink(e.target.hash)}
					>
						{t('contact_us')}
					</Link>
				</div>
				<div className={styles.link}>
					<a
						href='#about-us'
						className={clsx(styles.link__text, currentLink == '#about-us' && styles['link--active'])}
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
