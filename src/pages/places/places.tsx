import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { CITY, places } from './places.data'
import { clsx } from 'clsx'
import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import Modal from 'react-modal'
import styles from './places.module.sass'
// @ts-ignore
import Airplane from 'assets/imgs/gifs/airplane.gif'
import { useTranslation } from 'react-i18next'

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

export const Places = () => {
	const { t } = useTranslation()
	const [currentCity, setCurrentCity] = useState<CITY>('Ashgabat')
	const [openModal, setModalOpen] = useState('')

	const currentPlace = useMemo(() => {
		return places.find(({ cityName }) => cityName === currentCity)
	}, [currentCity])

	return (
		<section id='places' className={styles.main}>
			<div className={styles.row}>
				<div className={styles.image_block}>
					<Carousel
						showThumbs={false}
						onChange={(index) => setCurrentCity(places[index].cityName)}
						showIndicators={false}
						infiniteLoop={true}
						emulateTouch={true}
					>
						<img
							src={currentPlace.cityImg}
							alt={currentPlace.cityName}
							width={500}
							height={200}
							className={styles.image}
						/>
						<img
							src={currentPlace.cityImg}
							alt={currentPlace.cityName}
							width={500}
							height={200}
							className={styles.image}
						/>
						<img
							src={currentPlace.cityImg}
							alt={currentPlace.cityName}
							width={500}
							height={200}
							className={styles.image}
						/>
						<img
							src={currentPlace.cityImg}
							alt={currentPlace.cityName}
							width={500}
							height={200}
							className={styles.image}
						/>
						<img
							src={currentPlace.cityImg}
							alt={currentPlace.cityName}
							width={500}
							height={200}
							className={styles.image}
						/>
						<img
							src={currentPlace.cityImg}
							alt={currentPlace.cityName}
							width={500}
							height={200}
							className={styles.image}
						/>
					</Carousel>
					<p className={styles.legend}>{currentPlace.cityName}</p>
				</div>
				<div className={styles.aaa}>
					<h2 className={styles.title}>{t('section.places.title')}</h2>
					<p className={styles.subtitle}>{t('section.places.subtitle')}</p>
					<div className={styles.buttons}>
						<button className={clsx(styles.btn, styles.btn__light)}>{t('contact_us')}</button>
					</div>
				</div>
			</div>
			<div className={styles.gallery}>
				{currentPlace.places.map((place) => (
					<div key={place.id}>
						<div className={styles.gallery_image} onClick={() => setModalOpen(place.id)}>
							<img src={place.img} alt={place.name} className={styles.image} />
							<p className={styles.legend}>{place.name}</p>
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
			<img src={Airplane} className={styles.airplane} />
		</section>
	)
}
