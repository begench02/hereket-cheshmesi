import { useTranslation } from 'react-i18next'
import styles from './about-us.module.sass'

export const AboutUs = () => {
	const { t } = useTranslation()

	return (
		<section id='about-us' className={styles.main}>
			<div className={styles.content}>
				<div className={styles.content__text}>
					<h2 className={styles.title}>{t('about_us')}</h2>
					<p className={styles.subtitle}>{t('section.about_us.subtitle')}</p>
					<ul className={styles.accordion}>
						<li>
							<input type='checkbox' name='accordion' id='included services' />
							<label htmlFor='included services'>
								<button className={styles.accordion_button}>
									<span></span>
									<span></span>
								</button>
								Included services:
							</label>
							<div className={styles.accordion_content}>
								<p>- Visa support (Letter of Invitation, State Registration, Travel Pass)</p>
								<p>- Airport and train station transfers as mentioned in the table under “program”</p>
								<p>
									- Overland transport as per program per AC vehicles as in the table under
									“itinerary”; 1-3 passengers per regular sedan car; 4-7 passengers per regular
									minibus; 1-4 passengers per jeep
								</p>
								<p>
									- Domestic airline tickets (economy seats, Boeing 737 aircraft) as in the table
									under “itinerary”
								</p>
								<p>- Domestic train tickets (bunk bed in sleeper compartment with 4 bunk beds)</p>
								<p>
									- Accommodation based on twin-shared hotel room, including breakfast as in the table
									under “accommodation”
								</p>
								<p>
									- Accommodation based on private trekking tent, including sleeping mat, sleeping bag
									and pillow, including breakfast as in the table under “itinerary”
								</p>
								<p>
									- Fixed meals (lunch and/or dinner) where such meals are otherwise unavailable,
									indicated in table under “meals”
								</p>
								<p>
									- English-speaking local guide-interpreter services as mentioned in the table under
									“guide”
								</p>
								<p>
									- Entrance fees to sites mentioned in the table under “program” (museum visits are
									excluding guided museum tour)
								</p>
								<p>- Bottled drinking water en route 1,5l pppd</p>
							</div>
						</li>
						<li>
							<input type='checkbox' name='accordion' id='Services included in extension tour prices:' />
							<label htmlFor='Services included in extension tour prices:'>
								<button className={styles.accordion_button}>
									<span></span>
									<span></span>
								</button>
								Services included in extension tour prices:
							</label>
							<div className={styles.accordion_content}>
								<p>Visa support (Letter of Invitation, State Registration, Travel Pass)</p>
								<p>Airport and train station transfers as mentioned in the table under “program”</p>
								<p>
									Overland transport as per program per AC vehicles as in the table under “itinerary”;
									1-3 passengers per regular sedan car; 4-7 passengers per regular minibus; 1-4
									passengers per jeep
								</p>
								<p>
									Domestic airline tickets (economy seats, Boeing 737 aircraft) as in the table under
									“itinerary”
								</p>
								<p>Domestic train tickets (bunk bed in sleeper compartment with 4 bunk beds)</p>
								<p>
									Accommodation based on twin-shared hotel room, including breakfast as in the table
									under “accommodation”
								</p>
								<p>
									Accommodation based on private trekking tent, including sleeping mat, sleeping bag
									and pillow, including breakfast as in the table under “itinerary”
								</p>
								<p>
									Fixed meals (lunch and/or dinner) where such meals are otherwise unavailable,
									indicated in table under “meals”
								</p>
								<p>
									English-speaking local guide-interpreter services as mentioned in the table under
									“guide”
								</p>
								<p>
									Entrance fees to sites mentioned in the table under “program” (museum visits are
									excluding guided museum tour)
								</p>
								<p>Bottled drinking water en route 1,5l pppd</p>
							</div>
						</li>
						<li>
							<input
								type='checkbox'
								name='accordion'
								id='Supplementary (“comfort”) services available for standard tours:'
							/>
							<label htmlFor='Supplementary (“comfort”) services available for standard tours:'>
								<button className={styles.accordion_button}>
									<span></span>
									<span></span>
								</button>
								Supplementary (“comfort”) services available for standard tours:
							</label>
							<div className={styles.accordion_content}>
								<p>
									Early check-in (before 13:00 on first day of tour) and/or late check-out (after
									12:00 on last day of tour) of hotel accommodation in Ashgabat. Price on request.
								</p>
								<p>
									Darwaza trip with return to Ashgabat (overland transport to Ashgabat; overnight in
									3* standard tourist hotel, airport transfer Ashgabat, flight to Dashoguz and airport
									transfer in Dashoguz to connect with main group)
								</p>
							</div>
						</li>
					</ul>
					<a href='#contacts'>
						<button className={styles.btn}>CONTACT US</button>
					</a>
				</div>
				<div className={styles.content__img}></div>
			</div>
		</section>
	)
}
