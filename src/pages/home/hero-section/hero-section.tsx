import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import styles from './hero-section.module.sass'

export const HeroSection = () => {
	const { t } = useTranslation()

	return (
		<section className={styles.main}>
			<div className={styles.content}>
				<motion.div
					className={styles.content__title}
					initial={{ opacity: 0, y: '-300%' }}
					animate={{ opacity: 1, y: '0' }}
					transition={{ duration: 0.5, delay: 1 }}
					drag
					dragConstraints={{
						top: -10,
						left: -10,
						right: 10,
						bottom: 10,
					}}
				>
					{t('turkmenistan')}
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: '300px' }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 1 }}
					className={styles.content__subtitle}
				>
					Hereket cheshmesi (HCh) <br />travel agency
				</motion.div>
			</div>
		</section>
	)
}
