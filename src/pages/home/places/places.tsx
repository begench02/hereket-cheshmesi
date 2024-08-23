import { Button } from 'components/button/button'
import { Carousel } from 'react-responsive-carousel'
import { CITY, places } from './places.data'
import { Link } from 'react-router-dom'
import { Modal } from 'components/modal/modal'
import { motion, useInView } from 'framer-motion'
import { useMemo, useRef, useState } from 'react'
import { useOnScreen } from 'hooks/use-on-screen.hook'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import styles from './places.module.sass'

export const Places = () => {
	const { t, i18n } = useTranslation()
	const [currentCity, setCurrentCity] = useState<CITY>('Ashgabat')
	const [openModal, setModalOpen] = useState('')
	const ref = useRef<HTMLDivElement>(null)
	const isVisible = useOnScreen(ref)
	const [isHovering, setHovering] = useState(false)
	const viewRef = useRef(null)

	const currentPlace = useMemo(() => {
		return places.find(({ cityName }) => cityName === currentCity)
	}, [currentCity])

	return (
		<section id='places' className={styles.main}>
			<motion.div className={styles.row}>
				<div className={styles.carousel} ref={ref}>
					<p className={styles.carousel__legend}>{currentPlace.cityName}</p>
					<Carousel
						onChange={(index) => setCurrentCity(places[index].cityName)}
						emulateTouch={true}
						infiniteLoop={true}
						autoPlay={!openModal && !isHovering && isVisible}
						interval={4000}
						showIndicators={false}
						showStatus={false}
						showThumbs={false}
					>
						{places.map((place) => (
							<motion.img
								key={place.id}
								src={place.cityImg}
								alt={place.cityName}
								width={600}
								height={300}
								className={styles.carousel__image}
							/>
						))}
					</Carousel>
				</div>
				<div className={styles.contact_us}>
					<h2 className={styles.contact_us__title}>{t('section.places.title')}</h2>
					<p className={styles.contact_us__subtitle}>{t('section.places.subtitle')}</p>
					<Link to='contact-us' className={styles.contact_us__button}>
						<Button>{t('contact_us')}</Button>
					</Link>
				</div>
			</motion.div>
			<motion.div
				className={styles.gallery}
				key={currentCity}
				initial='initial'
				animate='animate'
				transition={{ type: 'spring', staggerChildren: 0.1 }}
			>
				{currentPlace.places.map((place) => (
					<motion.div
						key={place.id}
						className={styles.place}
						variants={{ initial: { opacity: 0 }, animate: { opacity: 1 } }}
						onHoverStart={() => setHovering(true)}
						onHoverEnd={() => setHovering(false)}
						whileHover={{ scale: 1.1 }}
						transition={{ type: 'spring', duration: 1 }}
					>
						<motion.div
							onClick={(e) => {
								e.stopPropagation()
								setModalOpen(place.id)
							}}
						>
							<p className={styles.place__legend}>
								{i18n.language === 'en' ? place.name : place.name_ru}
							</p>
							<img src={place.img} alt={place.name} className={styles.place__image} />
						</motion.div>
						<Modal isOpen={place.id === openModal} close={() => setModalOpen('')}>
							<div className={styles.modal}>
								<img src={place.img} className={styles.modal__image} />
								<div className={styles.modal__content}>
									<h1 className={styles.modal__title}>
										{i18n.language === 'en' ? place.name : place.name_ru}
									</h1>
									<br />
									<p className={styles.modal__history}>
										{i18n.language === 'en' ? place.history : place.history_ru}
									</p>
								</div>
								<br />
							</div>
						</Modal>
					</motion.div>
				))}
			</motion.div>
		</section>
	)
}
