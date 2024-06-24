import 'react-international-phone/style.css'
import { Button } from 'components/button/button'
import { Input } from 'components/input/input'
import { NumberInput } from 'components/input/number-input/number-input'
import { PhoneInput } from 'react-international-phone'
import { Radio } from 'components/radio/radio'
import { Select } from 'components/select/select'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import email from 'assets/imgs/icons/email.png'
import locationMarker from 'assets/imgs/icons/location-marker.png'
import phoneImg from 'assets/imgs/icons/phone.png'
import styles from './contact-us.module.sass'

const AnyReactComponent = ({ text }) => <div>{text}</div>
const MapMarkerLocation = {
	center: [37.9869, 58.3608],
	zoom: 12,
}

type ContactForm = {
	name: string
	homeCountry: string
	email: string
	phone: string
}

const entranceOptions = [
	{ value: 'Ashgabat Airport', label: 'Ashgabat Airport' },
	{ value: 'Farap border post (Turkmen-Uzbek border)', label: 'Farap border post (Turkmen-Uzbek border)' },
	{ value: 'Garabogaz border post (Turkmen-Kazakh border)', label: 'Garabogaz border post (Turkmen-Kazakh border)' },
	{ value: 'Gaudan border post (Turkmen-Iranian border)', label: 'Gaudan border post (Turkmen-Iranian border)' },
	{
		value: 'Gudurolum border post (Turkmen-Iranian border)',
		label: 'Gudurolum border post (Turkmen-Iranian border)',
	},
	{ value: 'Khojeyli border post (Turkmen-Uzbek border)', label: 'Khojeyli border post (Turkmen-Uzbek border)' },
	{ value: 'Serags border post (Turkmen-Iranian border)', label: 'Serags border post (Turkmen-Iranian border)' },
	{ value: 'Shavat border bost (Turkmen-Uzbek border)', label: 'Shavat border bost (Turkmen-Uzbek border)' },
	{
		value: 'Turkmenbashi harbor (Turkmen-Azerbaijan border)',
		label: 'Turkmenbashi harbor (Turkmen-Azerbaijan border)',
	},
]

export const ContactUs = () => {
	const [phone, setPhone] = useState('')
	const { register, handleSubmit } = useForm()

	return (
		<div className={styles.main}>
			<div className={styles.map__container}>
				<YMaps>
					<Map defaultState={MapMarkerLocation} width='900px' height='600px'>
						<Placemark geometry={[37.9869, 58.3608]} />
					</Map>
				</YMaps>
				<div className={styles.contacts__container}>
					<div className={styles.contacts__location}>
						<div className={styles.contacts__location_icon}>
							<img src={locationMarker} alt='Location Marker' />
						</div>
						<div className={styles.contacts__location_text}>
							<p>Address: </p>
							<p>- 744000, Туркменистан, город Ашхабад, улица Гарашсызлык 62</p>
						</div>
					</div>
					<div className={styles.contacts__email}>
						<div className={styles.contacts__email_icon}>
							<img src={email} alt='Email' />
						</div>
						<div className={styles.contacts__email_text}>
							<p>Email: </p>
							<p>- info@cheshme@mail.ru</p>
							<p>- bgeldyev7@gmail.com</p>
						</div>
					</div>
					<div className={styles.contacts__phone}>
						<div className={styles.contacts__phone_icon}>
							<img src={phoneImg} alt='Phone' />
						</div>
						<div className={styles.contacts__phone_text}>
							<p>Phone number: </p>
							<p>- 993 65 553461</p>
							<p>- 993 62 277213</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className={styles.form_container}>
					<h3 className={styles.form_title}>Let's Get in touch</h3>
					<div className={styles.row}>
						<Input placeholder='What is your name?' {...register('name')} className={styles.input} />
						<Input placeholder='Your home country' {...register('home-country')} className={styles.input} />
					</div>
					<div className={styles.row}>
						<input placeholder='Your email address' {...register('email')} className={styles.input} />
						<PhoneInput
							defaultCountry='ru'
							value={phone}
							onChange={(phone) => setPhone(phone)}
							style={{ width: '100%' }}
							inputClassName={styles.input_phone}
							countrySelectorStyleProps={{ buttonClassName: styles.input_phone__country_btn }}
						/>
					</div>
					<div className={styles.row}>
						<input
							placeholder='What is (are) the purpose of your travel to Turkmenistan?'
							className={styles.input}
						/>
					</div>
					<div>
						<Radio options={['Yes', 'No']} label='Have you visited Turkmenistan before?' />
					</div>
					<div>
						<h2>When do you intend to visit Turkmenistan? *</h2>
						<input type='date' placeholder='mm/dd/yyyy' />
					</div>
					<div>
						<div>
							<NumberInput placeholder='2' />
						</div>
						<div></div>
					</div>
					<div>
						<Select options={entranceOptions} />
					</div>
					<div>
						<Select options={entranceOptions} />
					</div>
					<div>
						<Radio
							label='What is your preferred type of accommodation? *'
							options={['Hotel', 'Camping', 'Combination']}
						/>
					</div>
					<div>
						<Radio label='What hotel category do you prefer?' options={['Budget', 'Standard', 'Comfort']} />
					</div>
					<div>
						<Radio
							label='What type of hotel rooms do you prefer?'
							options={['Single', 'Double', 'Triple']}
						/>
					</div>
					<div>
						<Radio
							label='What meal plan do you prefer? *'
							options={['Bed and breakfast', 'Lunch only', 'Dinner only', 'Full board']}
						/>
					</div>
					<div>
						<Radio
							label='What type of transport do you prefer? *'
							options={['Road', 'Air', 'Off-road', 'Train', 'Combination']}
						/>
					</div>
					<div className={styles.send_btn__container}>
						<Button variant='contained'>Send</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
