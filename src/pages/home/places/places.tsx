import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Button } from 'components/button/button'
import { Carousel } from 'react-responsive-carousel'
import { CITY, places } from './places.data'
import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Modal from 'react-modal'
import styles from './places.module.sass'

const modalStyles = {
	content: {
		height: '700px',
		width: '650px',
		top: '50%',
		left: '50%',
		right: 'auto',
		padding: '0',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		boxShadow: '-10px 10px 23px 9px rgba(0, 0, 0, 0.17)',
	},
}

export const Places = () => {
	const { t, i18n } = useTranslation()
	const [currentCity, setCurrentCity] = useState<CITY>('Ashgabat')
	const [openModal, setModalOpen] = useState('')

	const currentPlace = useMemo(() => {
		return places.find(({ cityName }) => cityName === currentCity)
	}, [currentCity])

	return (
		<section id='places' className={styles.main}>
			<div className={styles.row}>
				<div className={styles.carousel}>
					<p className={styles.carousel__legend}>{currentPlace.cityName}</p>
					<Carousel
						onChange={(index) => setCurrentCity(places[index].cityName)}
						emulateTouch={true}
						infiniteLoop={true}
						autoPlay={true}
						interval={10000}
						showIndicators={false}
						showStatus={false}
						showThumbs={false}
					>
						{places.map((place) => (
							<img
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
						<div onClick={() => setModalOpen(place.id)}>
							<p className={styles.place__legend}>
								{i18n.language === 'en' ? place.name : place.name_ru}
							</p>
							<img src={place.img} alt={place.name} className={styles.place__image} />
						</div>
						<Modal
							isOpen={place.id == openModal}
							onRequestClose={() => setModalOpen('')}
							style={modalStyles}
							ariaHideApp={false}
						>
							<div className={styles.modal}>
								<img src={place.img} className={styles.modal__image} />
								<h1 className={styles.modal__title}>
									{i18n.language === 'en' ? place.name : place.name_ru}
								</h1>
								<br />
								<p className={styles.modal__history}>
									{i18n.language === 'en' ? place.history : place.history_ru}
								</p>
								<br />
							</div>
						</Modal>
					</div>
				))}
			</div>
		</section>
	)
}
