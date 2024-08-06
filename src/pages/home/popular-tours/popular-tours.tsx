import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'components/carousel/carousel'
import { tours } from 'pages/tours/tours.data'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './popular-tours.module.sass'

export const PopularTours = () => {
	const { t } = useTranslation()
	const [imageIndex, setImageIndex] = useState(1)

	return (
		<section className={styles.main}>
			<h2 className={styles.title}>{t('popular_tours')}</h2>
			<Carousel
				imageIndex={imageIndex}
				setImageIndex={setImageIndex}
				perspective={window.innerWidth < 1000 ? 1 : 2}
				legend
			/>
		</section>
	)
}

{
	/* <Carousel
	onChange={(id) => setCurrentTourId(tours[id].id)}
	centerMode={true}
	showArrows={true}
	showThumbs={false}
	interval={4000}
	infiniteLoop={true}
	autoPlay={true}
	autoFocus={false}
	emulateTouch={true}
	centerSlidePercentage={50}
	showStatus={false}
	showIndicators={false}
	renderArrowPrev={(clickHandler) => {
		return (
			<div className={clsx(styles.arrow, styles.arrow__left)} onClick={clickHandler}>
				<ArrowLeft width={30} height={30} />
			</div>
		)
	}}
	renderArrowNext={(clickHandler) => {
		return (
			<div className={clsx(styles.arrow, styles.arrow__right)} onClick={clickHandler}>
				<ArrowRight width={30} height={30} />
			</div>
		)
	}}
>
	{tours.map((tour) => (
		<TourCard key={tour.id} tour={tour} currentTourId={currentTourId} />
	))}
</Carousel> */
}

{
	/* {tours.map((tour) => (
					<TourCard key={tour.id} tour={tour} currentTourId={currentTourId} />
				))} */
}
