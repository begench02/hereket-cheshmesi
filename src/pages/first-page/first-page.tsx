import styles from './first-page.module.sass'
import Ashgabat from 'assets/imgs/ashgabat5.jpg'

export const FirstPage = () => {
	return (
		<div className={styles.main}>
			<div className={styles.title}>Travel in Ashgabat</div>
			<div className={styles.subtitle}>The unique country known for its beauty</div>
			<img src={Ashgabat} alt='Ashgabat' className={styles.image} />
		</div>
	)
}
