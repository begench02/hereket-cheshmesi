import { Link } from 'react-router-dom'
import { textShortener } from 'src/utils'
import { Tour } from 'pages/tours/tours.data'
import { TourCard as TourCardType } from '../popular-tours'
import { TourCardModal } from './tour-card-modal/tour-card-modal'
import { useState } from 'react'
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
