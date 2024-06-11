import Email from 'assets/imgs/email.svg'
import Phone from 'assets/imgs/phone.svg'
import styles from './contacts.module.sass'

export const Contacts = () => {
	return (
		<div id='contacts' className={styles.main}>
			<div className={styles.content}>
				<h2 className={styles.title}>OUT CONTACTS</h2>
				<div className={styles.contact_block}>
					<Phone />
					<span className={styles.contact_text}>+993 65553461</span>
				</div>
				<div className={styles.contact_block}>
					<Phone />
					<span className={styles.contact_text}>+993 62277213</span>
				</div>
				<div className={styles.contact_block}>
					<Email />
					<span className={styles.contact_text}>info@cheshme@mail.ru</span>
				</div>
				<div className={styles.contact_block}>
					<Email />
					<span className={styles.contact_text}>bgeldyev7@gmail.com</span>
				</div>
				<div className={styles.contact_block}>
					<Email />
					<span className={styles.contact_text}>
						744000, Туркменистан, город Ашхабад, улица Гарашсызлык 62
					</span>
				</div>
			</div>
		</div>
	)
}
