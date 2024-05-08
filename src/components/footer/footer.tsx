import Location from 'assets/imgs/location.svg'
import Phone from 'assets/imgs/phone.svg'
import styles from './footer.module.sass'

export const Footer = () => {
	return (
		<div className={styles.main}>
			<div>
				<h4>Hereket Cheshmesi</h4>
				<p className={styles.text}>info@cheshme@mail.ru</p>
			</div>
			<div>
				<h4>Contacts</h4>
				<ul>
					{/* <Phone /> */}
					<p className={styles.text}>+99365553461</p>
					<p className={styles.text}>+99362277213</p>
				</ul>
			</div>
		</div>
	)
}
