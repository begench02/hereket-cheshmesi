import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import styles from './about-us.module.sass'
import { Link } from 'react-router-dom'

export const AboutUs = () => {
	const { t } = useTranslation()

	return (
		<section id='about-us' className={styles.main}>
			<div className={styles.content}>
				<motion.div className={styles.content__text}>
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
								{t('section.about_us.included_services')}
							</label>
							<div className={styles.accordion_content}>
								<p>- {t('section.about_us.visa_support')}</p>
								<p>- {t('section.about_us.transfers')}</p>
								<p>- {t('section.about_us.transfers')}</p>
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
								Services never included in standard tour and extension tour prices:
							</label>
							<div className={styles.accordion_content}>
								<p>
									- Turkmenistan tourist visa up to 10 days, from 85+4 USD per person, when obtained
									at Ashgabat Airport (subject to change and nationality-dependent)
								</p>
								<p>
									- Turkmenistan tourist visa with validity of 11-20 days, from 105+4 USD per person,
									when obtained at Ashgabat Airport (subject to change and nationality-dependent)
								</p>
								<p>
									- Turkmenistan migration tax 10+4 USD per person, to be paid at Ashgabat Airport or
									any other point of entering Turkmenistan territory (subject to change)
								</p>
								<p>- Meals not indicated in itinerary-program table</p>
								<p>- Soft drinks and alcoholic drinks</p>
								<p>- Camera usage fees in historical parks and museums</p>
								<p>- Tips for local guides and drivers</p>
								<p>- Souvenirs and other personal items</p>
								<p>
									- All other charges and services not mentioned under “Services included in tour and
									extension tour prices”
								</p>
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
					<Link to='/contact-us'>
						<button className={styles.btn}>{t('contact_us')}</button>
					</Link>
				</motion.div>
				<motion.div
					initial={{ x: '100%', opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1.5 }}
					className={styles.content__img}
				></motion.div>
			</div>
		</section>
	)
}
