import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import styles from './first-page.module.sass'

export const FirstPage = () => {
	const { t } = useTranslation('')

	return (
		<section className={styles.main}>
			<div className={styles.content}>
				<motion.div
					className={styles.title}
					initial={{ opacity: 0, y: '-300%' }}
					animate={{ opacity: 1, y: '0' }}
					transition={{ duration: 0.5, delay: 2 }}
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
					animate={{
						opacity: 1,
						y: 0,
						fontSize: '60px',
						fontWeight: 600,
						color: '#48A626',
						textShadow: '1px 1px 2px #EBA503',
					}}
					transition={{ duration: 0.5, delay: 2 }}
				>
					Hereket cheshmesi
				</motion.div>
			</div>
		</section>
	)
}
