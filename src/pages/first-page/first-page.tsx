import styles from './first-page.module.sass'

export const FirstPage = () => {
	return (
		<div className={styles.main}>
			<div className={styles.content}>
				<div className={styles.title}>Turkmenistan</div>
				<div className={styles.subtitle}>Hereket Cheshmesi</div>
			</div>
		</div>
	)
}
