import { Link } from 'react-router-dom'
import { Tour } from 'pages/tours/tours.data'
import clsx from 'clsx'
import styles from './tour-card.module.sass'

export const TourCard = (props: TourCardPropsType) => {
	const { currentTourId, tour } = props
	const { image, title, id } = tour

	return (
		<Link to={`tours/${id}`}>
			<div className={styles.main}>
				<div className={clsx(styles.tour, currentTourId === id && styles['tour--scale'])}>
					<p className={styles.tour__heading}>{title}</p>
					<img src={image} alt={title} className={styles.tour__image} />
				</div>
			</div>
		</Link>
	)
}

export type TourCardPropsType = {
	tour: Tour
	currentTourId: number
}
