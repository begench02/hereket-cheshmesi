import Phone from 'assets/imgs/phone.svg'
import Email from 'assets/imgs/email.svg'
import styles from './contacts.module.sass'

export const Contacts = () => {
	return (
		<div className={styles.main}>
			<div className={styles.content}>
				<h2 className={styles.title}>OUT CONTACTS</h2>
				<div className={styles.contact_block}>
					<Phone />
					<span className={styles.contact_text}>+993 65553461</span>
				</div>
				<div className={styles.contact_block}>
					<Phone />
					<span className={styles.contact_text}>+993 65553461</span>
				</div>
				<div className={styles.contact_block}>
					<Email />
					<span className={styles.contact_text}>info@cheshme@mail.ru</span>
				</div>
			</div>
		</div>
	)
}
