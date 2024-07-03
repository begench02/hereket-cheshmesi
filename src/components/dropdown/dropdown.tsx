import { FC } from 'react'
import clsx from 'clsx'
import russia from 'assets/imgs/icons/russia.png'
import styles from './dropdown.module.sass'
import unitedStates from 'assets/imgs/icons/united-states.png'
import { useTranslation } from 'react-i18next'

type Language = 'en' | 'ru'
const languages: Record<Language, string> = {
	en: unitedStates,
	ru: russia,
}

export const Dropdown = () => {
	const { i18n } = useTranslation()

	const changeLanguage = (newLanguage: Language) => {
		i18n.changeLanguage(newLanguage)
	}

	return (
		<div className={styles.dropdown}>
			<img
				src={languages[i18n.resolvedLanguage]}
				alt='Current Language'
				className={styles.dropdown__image}
				width='40px'
			/>
			<ul className={styles.menu}>
				<li
					onClick={() => changeLanguage('ru')}
					className={clsx(styles.menu__item, styles['menu__item--first'])}
				>
					<img src={russia} alt='Russian flag' className={styles.menu__image} />
				</li>
				<li
					onClick={() => changeLanguage('en')}
					className={clsx(styles.menu__item, styles['menu__item--last'])}
				>
					<img src={unitedStates} alt='United States flag' className={styles.menu__image} />
				</li>
			</ul>
		</div>
	)
}
