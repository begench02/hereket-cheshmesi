import { LanguageDropdown } from './language-dropdown'
import { Link } from 'react-router-dom'
import { ToursDropdown } from './tours-dropdown/tours-dropdown'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Bars from 'assets/imgs/icons/bars.svg'
import clsx from 'clsx'
import Logo from 'assets/imgs/logo2.png'
import styles from './header.module.sass'
import X from 'assets/imgs/icons/x.svg'

export const Header = () => {
	const [currentLink, setCurrentLink] = useState(window.location.hash)
	const [isMenuOpen, setMenuOpen] = useState(false)
	const { t } = useTranslation()

	return (
		<header className={styles.header}>
			{/* <nav>
				<ul id='navigation' className={clsx(styles.nav, styles.nav_left)} data-visible={isMenuOpen}></ul>
			</nav> */}

			<div className={styles.header__logo}>
				<Link to='/'>
					<img src={Logo} alt='Logo' />
				</Link>
			</div>

			<button
				aria-controls='navigation'
				aria-expanded='false'
				className={styles.nav_toggle}
				onClick={() => setMenuOpen((prev) => !prev)}
			>
				{isMenuOpen ? <X width='100%' height='100%' /> : <Bars width='100%' height='100%' />}
			</button>

			<nav className={clsx(styles.nav, styles.nav_left)} data-visible={isMenuOpen}>
				<ul id='navigation'>
					<li className={styles.link}>
						<ToursDropdown />
					</li>
				</ul>
				<ul>
					<li className={styles.link}>
						<Link
							to='contact-us'
							className={clsx(styles.link__text, currentLink == 'contact-us' && styles['link--active'])}
							onClick={(e: any) => setCurrentLink(e.target.hash)}
						>
							{t('contact_us')}
						</Link>
					</li>
					<li className={styles.language_dropdown}>
						<LanguageDropdown />
					</li>
				</ul>
			</nav>

			{/* <div className={styles.menu_bar}>
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
			</div> */}
		</header>
	)
}
