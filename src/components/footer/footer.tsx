import Location from 'assets/imgs/icons/location.svg'
import Phone from 'assets/imgs/icons/phone.svg'
import styles from './footer.module.sass'
import { copy_text } from 'src/utils'

export const Footer = () => {
	return (
		<footer className={styles.main}>
			<div>
				<h4 className={styles.icon}>Hereket Cheshmesi: </h4>
				<p className={styles.text} onClick={(e: any) => copy_text(e.target.innerText, 'email')}>
					- info@cheshme@mail.ru
				</p>
				<p className={styles.text} onClick={(e: any) => copy_text(e.target.innerText, 'email')}>
					- bgeldyev7@gmail.com
				</p>
			</div>
			<div>
				<h4 className={styles.icon}>
					<Phone /> Contacts:
				</h4>
				<ul>
					<p className={styles.text} onClick={(e: any) => copy_text(e.target.innerText, 'phone')}>
						+ 993 65 553461
					</p>
					<p className={styles.text} onClick={(e: any) => copy_text(e.target.innerText, 'phone')}>
						+ 993 62 277213
					</p>
				</ul>
			</div>
			<div>
				<h4 className={styles.icon}>
					<Location /> Location:
				</h4>
				<ul>
					<p className={styles.text} onClick={(e: any) => copy_text(e.target.innerText, 'address')}>
						744000, Туркменистан, город Ашхабад,
						<br /> улица Гарашсызлык 62
					</p>
				</ul>
			</div>
		</footer>
	)
}
