import { TourCard as TourCardType } from '../popular-tours'
import { TourCardModal } from './tour-card-modal/tour-card-modal'
import { useState } from 'react'
import styles from './tour-card.module.sass'
import { textShortener } from 'src/utils'

export const TourCard = (props: TourCardPropsType) => {
	const { image, header, text } = props.article
	const [isModalOpen, setModalOpen] = useState(false)

	return (
		<>
			<div className={styles.main} onClick={() => setModalOpen(true)}>
				<div className={styles.image_block}>
					<img src={image} alt='header' className={styles.image} />
					<p className={styles.header}>{header}</p>
					<p className={styles.read_more}>Read More...</p>
				</div>
				{/* <h3 className={styles.header}>{header}</h3> */}
				{/* <p className={styles.text}>{textShortener(text)}</p> */}
			</div>
			<TourCardModal isOpen={isModalOpen} close={() => setModalOpen(false)} article={props.article} />
		</>
	)
}

export type TourCardPropsType = {
	article: TourCardType
}
