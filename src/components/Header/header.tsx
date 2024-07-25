import { LanguageDropdown } from './language-dropdown'
import { Link } from 'react-router-dom'
import { ToursDropdown } from './tours-dropdown/tours-dropdown'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Bars from 'assets/imgs/icons/bars.svg'
import clsx from 'clsx'
import Logo from 'assets/imgs/logo2.png'
import X from 'assets/imgs/icons/x.svg'
import styles from './header.module.sass'

export const Header = () => {
	const [currentLink, setCurrentLink] = useState(window.location.hash)
	const { t } = useTranslation()

	return (
		<header className={styles.header}>
			<input type='checkbox' id='check' className={styles.check} />
			<label htmlFor='check' className={styles.header__menu}>
				<Bars />
			</label>

			<nav className={styles.nav}>
				<div className={styles.link}>
					<ToursDropdown />
				</div>
			</nav>

			<div className={styles.header__logo}>
				<Link to='/'>
					<img src={Logo} alt='Logo' />
				</Link>
			</div>

			<nav className={styles.nav}>
				<div className={styles.link}>
					<Link
						to='contact-us'
						className={clsx(styles.link__text, currentLink == 'contact-us' && styles['link--active'])}
						onClick={(e: any) => setCurrentLink(e.target.hash)}
					>
						{t('contact_us')}
					</Link>
				</div>
				<div className={clsx(styles.nav, styles.language_dropdown)}>
					<LanguageDropdown />
				</div>
			</nav>

			<div className={styles.menu_bar}>
				<div className={styles.menu_bar__header}>
					<Link to='/'>
						<img src={Logo} alt='Logo' />
					</Link>
					<input type='checkbox' id='check' className={styles.check} />
					<label htmlFor='check' className={styles.x}>
						<X />
					</label>
				</div>
				<div className={styles.menu_bar__items}>
					<div className={styles.link}>
						<ToursDropdown />
					</div>
					<div className={styles.link}>
						<Link
							to='contact-us'
							className={clsx(styles.link__text, currentLink == 'contact-us' && styles['link--active'])}
							onClick={(e: any) => setCurrentLink(e.target.hash)}
						>
							{t('contact_us')}
						</Link>
					</div>
					<div className={clsx(styles.link, styles.nav, styles.language_dropdown)}>
						<LanguageDropdown />
					</div>
				</div>
			</div>
		</header>
	)
}
