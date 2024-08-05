import { Button } from 'components/button/button'
import { Carousel } from 'react-responsive-carousel'
import { CITY, places } from './places.data'
import { Link } from 'react-router-dom'
import { Modal } from 'components/modal/modal'
import { useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import styles from './places.module.sass'
import { useOnScreen } from 'hooks/use-on-screen.hook'

export const Places = () => {
	const { t, i18n } = useTranslation()
	const [currentCity, setCurrentCity] = useState<CITY>('Ashgabat')
	const [openModal, setModalOpen] = useState('')
	const ref = useRef<HTMLDivElement>(null)
	const isVisible = useOnScreen(ref)

	const currentPlace = useMemo(() => {
		return places.find(({ cityName }) => cityName === currentCity)
	}, [currentCity])

	return (
		<section id='places' className={styles.main}>
			<div className={styles.row}>
				<div className={styles.carousel} ref={ref}>
					<p className={styles.carousel__legend}>{currentPlace.cityName}</p>
					<Carousel
						onChange={(index) => setCurrentCity(places[index].cityName)}
						emulateTouch={true}
						infiniteLoop={true}
						autoPlay={!openModal && isVisible}
						interval={4000}
						showIndicators={false}
						showStatus={false}
						showThumbs={false}
					>
						{places.map((place) => (
							<img
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
			</div>
			<div className={styles.gallery}>
				{currentPlace.places.map((place) => (
					<div key={place.id} className={styles.place}>
						<div
							onClick={(e) => {
								e.stopPropagation()
								setModalOpen(place.id)
							}}
						>
							<p className={styles.place__legend}>
								{i18n.language === 'en' ? place.name : place.name_ru}
							</p>
							<img src={place.img} alt={place.name} className={styles.place__image} />
						</div>
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
					</div>
				))}
			</div>
		</section>
	)
}
