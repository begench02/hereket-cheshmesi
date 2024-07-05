import { Carousel } from 'react-responsive-carousel'
import { concat_places_name } from 'src/utils'
import { FC } from 'react'
import { Tour } from 'pages/tours/tours.data'
import clsx from 'clsx'
import styles from './timeline.module.sass'

export const Timeline: FC<TimelineProps> = (props) => {
	const { tour } = props

	return (
		<div>
			<div className={styles.timeline}>
				{tour.days.map((day, index) => (
					<div
						className={clsx(
							styles.container,
							index % 2 === 0 ? styles.left_container : styles.right_container,
						)}
					>
						<Carousel
							emulateTouch={true}
							infiniteLoop={true}
							showIndicators={false}
							showStatus={false}
							showThumbs={false}
						>
							{day.places.map((place) => (
								<div>
									<img src={place.image} alt={place.name} width={600} height={300} />
								</div>
							))}
						</Carousel>
						<p className={styles.day}>Day {index + 1}</p>
						<div className={styles.text_box}>
							<h2>{concat_places_name(day.places)}</h2>
							<p>{day.description}</p>
						</div>
						<span
							className={clsx(
								index % 2 === 0 ? styles.left_container_arrow : styles.right_container_arrow,
							)}
						></span>
					</div>
				))}
			</div>
		</div>
	)
}

type TimelineProps = {
	tour: Tour
}
