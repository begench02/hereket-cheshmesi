import 'react-international-phone/style.css'
import { PhoneInput } from 'react-international-phone'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import styles from './contact-us.module.sass'
import { Button } from 'components/button/button'
import { Input } from 'components/input/input'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'

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

export const ContactUs = () => {
	const [phone, setPhone] = useState('')
	const { register, handleSubmit } = useForm()

	return (
		<div className={styles.main}>
			<div className={styles.map_container}>
				<YMaps>
					<Map defaultState={MapMarkerLocation} width='900px' height='600px'>
						<Placemark geometry={[37.9869, 58.3608]} />
					</Map>
				</YMaps>
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
						<div className={styles.custom_radios}>
							<h4>Have you visited Turkmenistan before?</h4>
							<div>
								<input type='radio' id='yes' className={styles.yes} name='color' value='yes' checked />
								<label htmlFor='yes'>
									<span>
										<p>Yes</p>
										<img
											src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg'
											alt='Checked Icon'
										/>
									</span>
								</label>
							</div>

							<div>
								<input type='radio' id='no' className={styles.no} name='color' value='no' />
								<label htmlFor='no'>
									<span>
										<p>No</p>
										<img
											src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg'
											alt='Checked Icon'
										/>
									</span>
								</label>
							</div>
						</div>
					</div>
					<div className={styles.send_btn__container}>
						<Button variant='contained'>Send</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
