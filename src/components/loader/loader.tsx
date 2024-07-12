import airplane from 'assets/imgs/gifs/airplane.gif'
import styles from './loader.module.sass'

export const Loader = () => {
	return (
		<div className={styles.main}>
			<img src={airplane} alt='Airplane' />
		</div>
	)
}
