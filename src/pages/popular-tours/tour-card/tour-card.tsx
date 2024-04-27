import styles from './tour-card.module.sass'

export const TourCard = (props: TourCardPropsType) => {
	const { image, header, text } = props

	return (
		<div className={styles.main}>
			<div className={styles.image_block}>
				<img src={image} alt='header' className={styles.image} />
				<p className={styles.read_more}>Read More...</p>
			</div>
			<h3 className={styles.header}>{header}</h3>
			<p className={styles.text}>{text}</p>
		</div>
	)
}

export type TourCardPropsType = {
	image: string
	header: string
	text: string
}
