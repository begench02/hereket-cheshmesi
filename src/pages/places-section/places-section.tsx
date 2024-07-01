import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { CITY, places } from './places-section.data'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Modal from 'react-modal'
import styles from './places-section.module.sass'
import { Link } from 'react-router-dom'
import { Button } from 'components/button/button'

const modalStyles = {
	content: {
		height: '500px',
		width: '600px',
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
}

export const PlacesSection = () => {
	const { t } = useTranslation()
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
					<div key={place.id}>
						<div onClick={() => setModalOpen(place.id)} className={styles.place}>
							<p className={styles.place__legend}>{place.name}</p>
							<img src={place.img} alt={place.name} className={styles.place__image} />
						</div>
						<Modal
							isOpen={place.id == openModal}
							onRequestClose={() => setModalOpen('')}
							style={modalStyles}
							ariaHideApp={false}
						>
							<div className={styles.modal_main}>
								<h1 className={styles.modal_title}>{place.name}</h1>
								<img src={place.img} className={styles.modal_image} />
								<br />
								<p className={styles.modal_text}>{place.history}</p>
								<br />
							</div>
						</Modal>
					</div>
				))}
			</div>
		</section>
	)
}
