import { Button } from 'components/button/button'
import { Carousel } from 'components/carousel/carousel'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { tours } from './tours.data'
import { useLayoutEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import ArrowRight from 'assets/imgs/icons/arrow-right.svg'
import styles from './tours.module.sass'

export const Tours = () => {
	const [imageIndex, setImageIndex] = useState(0)
	const { t, i18n } = useTranslation()

	useLayoutEffect(() => {
		window.scrollTo(0, 0)
	})

	const { title, title_ru, duration, duration_ru, description, description_ru, id } = useMemo(() => {
		return tours.find((_, index) => index === imageIndex)
	}, [imageIndex])

	return (
		<AnimatePresence>
			<div className={styles.main}>
				<motion.div className={styles.tour_image}>
					<Carousel imageIndex={imageIndex} setImageIndex={setImageIndex} autoPlay />
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0 }}
					transition={{ duration: 1.5 }}
					animate={{ opacity: 1, scale: '100%' }}
					className={styles.tour_description}
				>
					<h1 className={styles.tour_description__title}>{i18n.language === 'en' ? title : title_ru}</h1>
					<p className={styles.tour_description__duration}>
						{i18n.language === 'en' ? duration : duration_ru}
					</p>
					<p className={styles.tour_description__subtitle}>
						{i18n.language === 'en' ? description : description_ru}
					</p>

					<Link to={`/tours/${id}`} className={styles.tour_description__button}>
						<Button variant='contained'>
							{t('explore')} <ArrowRight style={{ marginLeft: '15px' }} />
						</Button>
					</Link>
				</motion.div>
			</div>
		</AnimatePresence>
	)
}
