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
import { motion, MotionConfig } from 'framer-motion'

export const Header = () => {
	const [currentLink, setCurrentLink] = useState(window.location.hash)
	const [isMenuOpen, setMenuOpen] = useState(false)
	const { t } = useTranslation()

	return (
		<header className={styles.header}>
			<div className={styles.header__logo}>
				<Link to='/'>
					<img src={Logo} alt='Logo' />
				</Link>
			</div>

			<MotionConfig transition={{ duration: 0.5 }}>
				<motion.button
					aria-controls='navigation'
					aria-expanded='false'
					className={styles.nav_toggle}
					onClick={() => setMenuOpen((prev) => !prev)}
					initial={false}
					animate={isMenuOpen ? 'open' : 'closed'}
				>
					<motion.span
						className={styles.nav_toggle__bar}
						style={{
							top: '35%',
							left: '50%',
							y: '-50%',
							x: '-50%',
						}}
						variants={{
							open: {
								rotate: ['0deg', '0deg', '45deg'],
								top: ['35%', '50%', '50%'],
							},
							closed: {
								rotate: ['45deg', '0deg', '0deg'],
								top: ['50%', '50%', '35%'],
							},
						}}
					/>
					<motion.span
						style={{
							top: '50%',
							left: '50%',
							y: '-50%',
							x: '-50%',
						}}
						className={styles.nav_toggle__bar}
						variants={{
							open: {
								rotate: ['0deg', '0deg', '-45deg'],
							},
							closed: { rotate: ['-45deg', '0deg', '0deg'] },
						}}
					/>
					<motion.span
						style={{
							bottom: '35%',
							left: 'calc(50% + 10px)',
							y: '50%',
							x: '-50%',
						}}
						className={clsx(styles.nav_toggle__bar, styles['nav_toggle__bar--short'])}
						variants={{
							open: {
								rotate: ['0deg', '0deg', '45deg'],
								bottom: ['35%', '50%', '50%'],
								left: '50%',
							},
							closed: {
								rotate: ['45deg', '0deg', '0deg'],
								bottom: ['50%', '50%', '35%'],
								left: 'calc(50% + 10px)',
							},
						}}
					/>
				</motion.button>
			</MotionConfig>

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
		</header>
	)
}
