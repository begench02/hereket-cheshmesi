import Location from 'assets/imgs/location.svg'
import Phone from 'assets/imgs/phone.svg'
import styles from './footer.module.sass'

export const Footer = () => {
	return (
		<div className={styles.main}>
			<div>
				<h4>Hereket Çeşmesi</h4>
				<p>ASDEWEREWSDFvxcv wefdewr gfde</p>
			</div>
			<div>
				<h4>Contacts</h4>
				<p>
					<Phone />
					+993 65553461
				</p>
				<p>example@gmail.com</p>
			</div>
			<div>
				<h4>
					<Location />
					Location
				</h4>
				<p>Lorem ipsum dolor sit</p>
			</div>
		</div>
	)
}
