import { copy_text } from 'src/utils'
import { useTranslation } from 'react-i18next'
import Location from 'assets/imgs/icons/location.svg'
import Phone from 'assets/imgs/icons/phone.svg'
import styles from './footer.module.sass'

export const Footer = () => {
	const { t } = useTranslation()

	return (
		<footer className={styles.main}>
			<div className={styles.info}>
				<h4 className={styles.info__icon}>Hereket Cheshmesi: </h4>
				<li className={styles.info__text} onClick={(e: any) => copy_text(e.target.innerText, 'email')}>
					- info.cheshme@mail.ru
				</li>
				<li className={styles.info__text} onClick={(e: any) => copy_text(e.target.innerText, 'email')}>
					- bgeldyev7@gmail.com
				</li>
			</div>
			<div className={styles.info}>
				<h4 className={styles.info__icon}>
					<Phone /> Contacts:
				</h4>
				<ul>
					<li className={styles.info__text} onClick={(e: any) => copy_text(e.target.innerText, 'phone')}>
						+993 65 553461
					</li>
					<li className={styles.info__text} onClick={(e: any) => copy_text(e.target.innerText, 'phone')}>
						+993 62 277213
					</li>
				</ul>
			</div>
			<div className={styles.info}>
				<h4 className={styles.info__icon}>
					<Location /> Location:
				</h4>
				<ul>
					<p className={styles.info__text} onClick={(e: any) => copy_text(e.target.innerText, 'address')}>
						{t('location')}
					</p>
				</ul>
			</div>
		</footer>
	)
}
