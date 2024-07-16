import { LanguageDropdown } from './language-dropdown'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import Logo from 'assets/imgs/logo2.png'
import styles from './header.module.sass'
import { ToursDropdown } from './tours-dropdown/tours-dropdown'

export const Header = () => {
	const [currentLink, setCurrentLink] = useState(window.location.hash)
	const { t } = useTranslation()

	return (
		<header className={styles.header}>
			<nav className={clsx(styles.nav, styles.nav__left)}>
				<div className={styles.link}>
					<ToursDropdown />
				</div>
			</nav>
			<div className={styles.header__logo}>
				<Link to='/'>
					<img src={Logo} alt='Logo' width={100} />
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
				<LanguageDropdown />
			</nav>
		</header>
	)
}
