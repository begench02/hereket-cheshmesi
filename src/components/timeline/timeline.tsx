import { Carousel } from 'react-responsive-carousel'
import { concat_places_name } from 'src/utils'
import { FC } from 'react'
import { Tour } from 'pages/tours/tours.data'
import clsx from 'clsx'
import styles from './timeline.module.sass'
import { useTranslation } from 'react-i18next'

export const Timeline: FC<TimelineProps> = (props) => {
	const { tour } = props
	const { i18n } = useTranslation()

	return (
		<div className={styles.timeline} style={{ animationDuration: `${tour.days.length}s` }} key={tour.id}>
			{tour.days.map((day, index) => (
				<>
					<div className={styles.tour_day}>
						<div
							key={day.id}
							className={clsx(styles.day_gallery, index % 2 !== 0 && styles.right)}
							style={{ animationDelay: `${index + 1}s` }}
						>
							<Carousel
								emulateTouch={true}
								infiniteLoop={true}
								autoPlay={true}
								interval={4000}
								showIndicators={false}
								showStatus={false}
								showThumbs={false}
							>
								{day.places.map((place) => (
									<div key={`${place.name}_${place.image}`}>
										<img src={place.image} alt={place.name} />
									</div>
								))}
							</Carousel>
							<p className={styles.day_number}>Day {index + 1}</p>

							<span className={clsx(index % 2 === 0 ? styles.left_arrow : styles.right_arrow)}></span>
						</div>
						<div className={clsx(styles.day_description, index % 2 === 0 && styles.right)}>
							<h2>{concat_places_name(day.places, i18n.language as 'en' | 'ru')}</h2>

							{/* <div>
								{day.description.map(({ time, program }) => (
									<p>
										<span className={styles.program_time}>{time}</span>: {program}
									</p>
								))}
							</div> */}
						</div>
					</div>
					<div className='line'></div>
				</>
			))}
		</div>
	)
}

type TimelineProps = {
	tour: Tour
}
