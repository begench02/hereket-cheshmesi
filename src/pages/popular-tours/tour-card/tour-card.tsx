import { TourCard as TourCardType } from '../popular-tours'
import { TourCardModal } from './tour-card-modal/tour-card-modal'
import { useState } from 'react'
import styles from './tour-card.module.sass'
import { textShortener } from 'src/utils'
import clsx from 'clsx'

export const TourCard = (props: TourCardPropsType) => {
	const { image, header, id } = props.article
	const [isModalOpen, setModalOpen] = useState(false)

	return (
		<>
			<div className={styles.main} onClick={() => setModalOpen(true)}>
				<div className={clsx(styles.image_block, id === props.index && styles.image_block__current)}>
					<img src={image} alt='header' className={styles.image} />
					<p className={styles.header}>{header}</p>
				</div>
			</div>
			<TourCardModal isOpen={isModalOpen} close={() => setModalOpen(false)} article={props.article} />
		</>
	)
}

export type TourCardPropsType = {
	article: TourCardType
	index: number
}
