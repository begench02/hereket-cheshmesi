import { Button } from 'components/button/button'
import { motion, AnimatePresence } from 'framer-motion'
import { tours } from './tours.data'
import { useMemo, useState } from 'react'
import styles from './tours.module.sass'
import { Carousel } from 'components/carousel/carousel'

export const Tours = () => {
	const [imageIndex, setImageIndex] = useState(0)

	const { title, description, id } = useMemo(() => {
		return tours.find((tour, index) => index === imageIndex)
	}, [imageIndex])

	return (
		<AnimatePresence>
			<div className={styles.main}>
				<motion.div className={styles.tour_image}>
					<Carousel imageIndex={imageIndex} setImageIndex={setImageIndex} />
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0 }}
					transition={{ duration: 1.5 }}
					animate={{ opacity: 1, scale: '100%' }}
					className={styles.tour_description}
				>
					<h1 className={styles.tour_description__title}>{title}</h1>
					<p className={styles.tour_description__subtitle}>{description}</p>
					<Button className={styles.tour_description__button}>Explore</Button>
				</motion.div>
			</div>
		</AnimatePresence>
	)
}
