import { NavLink } from 'react-router-dom'
import styles from './about-us.module.sass'

export const AboutUs = () => {
	return (
		<div id='about-us' className={styles.main}>
			<div className={styles.content}>
				<h2 className={styles.title}>ABOUT US</h2>
				<p className={styles.subtitle}>
					Out travel company specializes in creating
					<br /> unforgettable experience for out clients by
					<br /> offering personalized and unique travel
					<br /> packages tailored to their preferences
				</p>
				<a href='#contacts'>
					<button className={styles.btn}>CONTACT US</button>
				</a>
			</div>
		</div>
	)
}
