import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import styles from './about-us.module.sass'

export const AboutUs = () => {
	const { t } = useTranslation()

	return (
		<section id='about-us' className={styles.main}>
			<div className={styles.content}>
				<motion.div className={styles.content__text}>
					<h2 className={styles.title}>{t('about_us')}</h2>
					<p className={styles.subtitle}>{t('section.about_us.subtitle')}</p>
					<Link to='/contact-us'>
						<button className={styles.btn}>{t('contact_us')}</button>
					</Link>
				</motion.div>
				<motion.div
					// initial={{ x: '100%', opacity: 0 }}
					// whileInView={{ x: 0, opacity: 1 }}
					// viewport={{ once: true }}
					// transition={{ duration: 1.5 }}
					className={styles.content__img}
				></motion.div>
			</div>
		</section>
	)
}
