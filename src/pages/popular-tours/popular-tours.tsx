import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { TourCard } from './tour-card/tour-card'
import { tours } from 'pages/tours/tours.data'
import ArrowLeft from 'assets/imgs/icons/arrow-left.svg'
import ArrowRight from 'assets/imgs/icons/arrow-right.svg'
import clsx from 'clsx'
import styles from './popular-tours.module.sass'

export type TourCard = {
	image: string
	header: string
	text: string
	history: string
	id: string
}

export const PopularTours = () => {
	return (
		<section id='popular-tours' className={styles.main}>
			<h2 className={styles.header}>Popular Tours</h2>
			<div className={styles.content}>
				<Carousel
					centerMode={true}
					showArrows={true}
					infiniteLoop={true}
					autoPlay={false}
					autoFocus={false}
					emulateTouch={true}
					centerSlidePercentage={50}
					showStatus={false}
					showIndicators={false}
					renderArrowPrev={(clickHandler, hasPrev) => {
						return (
							<div
								className={clsx(styles.arrow_left, !hasPrev && styles.arrow_left_hidden)}
								onClick={clickHandler}
							>
								<ArrowLeft width={30} height={30} />
							</div>
						)
					}}
					renderArrowNext={(clickHandler, hasNext) => {
						return (
							<div
								className={clsx(styles.arrow_right, !hasNext && styles.arrow_right_hidden)}
								onClick={clickHandler}
							>
								<ArrowRight width={30} height={30} />
							</div>
						)
					}}
				>
					{tours.map((tour) => (
						<TourCard key={tour.id} tour={tour} />
					))}
				</Carousel>
			</div>
		</section>
	)
}
