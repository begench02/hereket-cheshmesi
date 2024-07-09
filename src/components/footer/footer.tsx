import Location from 'assets/imgs/icons/location.svg'
import Phone from 'assets/imgs/icons/phone.svg'
import styles from './footer.module.sass'

export const Footer = () => {
	return (
		<div className={styles.main}>
			<div>
				<h4 className={styles.icon}>Hereket Cheshmesi: </h4>
				<p className={styles.text}>- info@cheshme@mail.ru</p>
				<p className={styles.text}>- bgeldyev7@gmail.com</p>
			</div>
			<div>
				<h4 className={styles.icon}>
					<Phone /> Contacts:
				</h4>
				<ul>
					<p className={styles.text}>+ 993 65 553461</p>
					<p className={styles.text}>+ 993 62 277213</p>
				</ul>
			</div>
			<div>
				<h4 className={styles.icon}>
					<Location /> Location:
				</h4>
				<ul>
					<p className={styles.text}>
						744000, Туркменистан, город Ашхабад,
						<br /> улица Гарашсызлык 62
					</p>
				</ul>
			</div>
		</div>
	)
}
