import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { TourCard } from './tour-card/tour-card'
import { tours } from 'pages/tours/tours.data'
import { useTranslation } from 'react-i18next'
import ArrowLeft from 'assets/imgs/icons/arrow-left.svg'
import ArrowRight from 'assets/imgs/icons/arrow-right.svg'
import clsx from 'clsx'
import styles from './popular-tours.module.sass'
import { useState } from 'react'

export const PopularTours = () => {
	const { t } = useTranslation()
	const [currentTourId, setCurrentTourId] = useState<number>(tours[0].id)

	return (
		<section id='popular-tours' className={styles.main}>
			<h2 className={styles.heading}>{t('popular_tours')}</h2>
			<Carousel
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
			</Carousel>
		</section>
	)
}
