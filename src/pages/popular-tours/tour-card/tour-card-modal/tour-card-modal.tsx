import { TourCard } from 'pages/popular-tours/popular-tours'
import Modal from 'react-modal'
import styles from './tour-card-modal.module.scss'

const modalStyles = {
	content: {
		// height: '500px',
		// width: '1000px',
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		boxShadow: '3px 3px 16px #000',
		backgroundColor: '#E8FBFF'
	},
}

export const TourCardModal = (props: Props) => {
	const { isOpen, close, article } = props

	return (
		<Modal isOpen={isOpen} onRequestClose={close} style={modalStyles} ariaHideApp={false}>
			<div className={styles.main}>
				<h1 className={styles.title}>{article.header}</h1>
				<img src={article.image} className={styles.image} />
				<br />
				<p className={styles.text}>{article.text}</p>
				<br />
				<h2>History:</h2>
				<p className={styles.history}>{article.history}</p>
			</div>
		</Modal>
	)
}

type Props = {
	isOpen: boolean
	close: VoidFunction
	article: TourCard
}
