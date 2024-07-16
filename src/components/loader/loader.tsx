import loader from 'assets/imgs/gifs/loader.gif'
import styles from './loader.module.sass'

export const Loader = () => {
	return (
		<div className={styles.main}>
			<img src={loader} alt='Loader' />
		</div>
	)
}
