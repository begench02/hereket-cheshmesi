import { Link } from 'react-router-dom'
import { Tour } from 'pages/tours/tours.data'
import styles from './tour-card.module.sass'

export const TourCard = (props: TourCardPropsType) => {
	const { image, title, id } = props.tour

	return (
		<Link to={`tours/${id}`}>
			<div className={styles.main}>
				<div className={styles.image_block}>
					<img src={image} alt={title} className={styles.image} />
					<p className={styles.header}>{title}</p>
				</div>
			</div>
		</Link>
	)
}

export type TourCardPropsType = {
	tour: Tour
}
