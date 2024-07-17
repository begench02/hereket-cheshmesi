import { Carousel } from 'react-responsive-carousel'
import { concat_places_name } from 'src/utils'
import { FC } from 'react'
import { Tour } from 'pages/tours/tours.data'
import clsx from 'clsx'
import styles from './timeline.module.sass'

export const Timeline: FC<TimelineProps> = (props) => {
	const { tour } = props

	return (
		<div className={styles.timeline} style={{ animationDuration: `${tour.days.length}s` }} key={tour.id}>
			{tour.days.map((day, index) => (
				<div
					key={day.id}
					className={clsx(styles.container, index % 2 === 0 ? styles.left_container : styles.right_container)}
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
								<img src={place.image} alt={place.name} width={600} height={300} />
							</div>
						))}
					</Carousel>
					<p className={styles.day}>Day {index + 1}</p>
					<div className={styles.text_box}>
						<h2>{concat_places_name(day.places)}</h2>
						<div>
							{day.description.map(({ time, program }) => (
								<p>
									<span className={styles.program_time}>{time}</span>: {program}
								</p>
							))}
						</div>
					</div>
					<span
						className={clsx(index % 2 === 0 ? styles.left_container_arrow : styles.right_container_arrow)}
					></span>
				</div>
			))}
		</div>
	)
}

type TimelineProps = {
	tour: Tour
}
