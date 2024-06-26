import 'react-international-phone/style.css'
import { Button } from 'components/button/button'
import { DateInput } from 'components/input/date-input/date-input'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { TextInput } from 'components/input/text-input/text-input'
import { NumberInput } from 'components/input/number-input/number-input'
import { PhoneInput } from 'react-international-phone'
import { Radio } from 'components/radio/radio'
import { Select } from 'components/select/select'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import clsx from 'clsx'
import email from 'assets/imgs/icons/email.png'
import locationMarker from 'assets/imgs/icons/location-marker.png'
import phoneImg from 'assets/imgs/icons/phone.png'
import styles from './contact-us.module.sass'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next'

const mapLocation = {
	center: [37.9869, 58.3608],
	zoom: 8,
}

type ContactValues = {
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
	const { t } = useTranslation()
	const [phone, setPhone] = useState('')
	const methods = useForm<ContactValues>()

	const onFormSubmit = (formData: ContactValues) => {
		console.log('Form data: ', formData)
	}

	return (
		<div className={styles.main}>
			<div>
				<YMaps>
					<Map defaultState={mapLocation} width='100%' height='600px'>
						<Placemark geometry={mapLocation.center} />
					</Map>
				</YMaps>
				<div className={styles.contacts}>
					<div className={styles.contact}>
						<img src={locationMarker} alt='Location Marker' className={styles.contact__icon} />
						<div className={styles.contact__text}>
							<p>Address: </p>
							<p
								onClick={(event: any) => {
									const address = event.target.innerText.trim().substring(1)
									navigator.clipboard.writeText(address)
									toast.success('Address copied', { position: 'bottom-right' })
								}}
								className={styles.text_copy}
							>
								- 744000, Туркменистан, город Ашхабад, улица Гарашсызлык 62
							</p>
						</div>
					</div>
					<div className={styles.contact}>
						<img src={email} alt='Email' className={clsx(styles.contact__icon, styles.email__icon)} />
						<div className={styles.contact__text}>
							<p>Email: </p>
							<p
								onClick={(event: any) => {
									const email = event.target.innerText.replace(/\s/g, '').substring(1)
									navigator.clipboard.writeText(email)
									toast.success('Email copied', { position: 'bottom-right' })
								}}
								className={styles.text_copy}
							>
								- info@cheshme@mail.ru
							</p>
							<p
								onClick={(event: any) => {
									const email = event.target.innerText.replace(/\s/g, '').substring(1)
									navigator.clipboard.writeText(email)
									toast.success('Email copied', { position: 'bottom-right' })
								}}
								className={styles.text_copy}
							>
								- bgeldyev7@gmail.com
							</p>
						</div>
					</div>
					<div className={styles.contact}>
						<img src={phoneImg} alt='Phone' className={clsx(styles.contact__icon, styles.phone__icon)} />
						<div className={styles.contact__text}>
							<p>Phone number: </p>
							<p
								onClick={(event: any) => {
									const phone = event.target.innerText.replace(/\s/g, '')
									navigator.clipboard.writeText(phone)
									toast.success('Phone copied', { position: 'bottom-right' })
								}}
								className={styles.text_copy}
							>
								+993 65 553461
							</p>
							<p
								onClick={(event: any) => {
									const phone = event.target.innerText.replace(/\s/g, '')
									navigator.clipboard.writeText(phone)
									toast.success('Phone copied', { position: 'bottom-right' })
								}}
								className={styles.text_copy}
							>
								+993 62 277213
							</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onFormSubmit)} className={styles.form}>
						<h3 className={styles.form__title}>{t('contact_us')}</h3>
						<div className={styles.flex}>
							<TextInput placeholder={t('page.contact_us.name')} name='name' />
							<TextInput placeholder={t('page.contact_us.country')} name='homeCountry' />
						</div>
						<div className={styles.flex}>
							<TextInput placeholder={t('page.contact_us.email')} name='email' />
							<TextInput placeholder={t('page.contact_us.phone')} name='homeCountry' />
							{/* 
							<div className={styles.test_block}>
								<PhoneInput
									defaultCountry='ru'
									value={phone}
									onChange={(phone) => setPhone(phone)}
									style={{ width: '100%', height: '100%' }}
									className={styles.input_phone__container}
									inputClassName={styles.input_phone__input}
									countrySelectorStyleProps={{ buttonClassName: styles.input_phone__country_btn }}
								/>
							</div> */}
						</div>
						<div>
							<TextInput
								placeholder='What is (are) the purpose of your travel to Turkmenistan?'
								name='purpose'
							/>
						</div>
						<div>
							<p className={styles.label}>Have you visited Turkmenistan before?</p>
							<Radio options={['Yes', 'No']} name='visitedBefore' />
						</div>
						<div>
							<p className={styles.label}>When do you intend to visit Turkmenistan? *</p>
							<DateInput />
						</div>
						{/* <div>
							<NumberInput
								placeholder='2'
								label='How many days do you wish to spend in Turkmenistan? *'
							/>
						</div> */}
						<div>
							<p className={styles.label}>Where do you plan to enter Turkmenistan? *</p>
							<Select options={entranceOptions} />
						</div>
						<div>
							<p className={styles.label}>Where do you plan to exit Turkmenistan? *</p>
							<Select options={entranceOptions} />
						</div>
						<div>
							<p className={styles.label}>What is your preferred type of accommodation? *</p>
							<Radio options={['Hotel', 'Camping', 'Combination']} name='accommodation-type' />
						</div>
						<div>
							<p className={styles.label}>What hotel category do you prefer?</p>
							<Radio options={['Budget', 'Standard', 'Comfort']} name='hotel-category' />
						</div>
						<div>
							<p className={styles.label}>What type of hotel rooms do you prefer?</p>
							<Radio options={['Single', 'Double', 'Triple']} name='hotel-rooms' />
						</div>
						<div>
							<p className={styles.label}>What meal plan do you prefer? *</p>
							<Radio
								options={['Bed and breakfast', 'Lunch only', 'Dinner only', 'Full board']}
								name='meal-plan'
							/>
						</div>
						<div>
							<p className={styles.label}>What type of transport do you prefer? *</p>
							<Radio options={['Road', 'Air', 'Off-road', 'Train', 'Combination']} name='transport' />
						</div>

						<div className={styles.send_btn__container}>
							<Button variant='contained'>Send</Button>
						</div>
					</form>
				</FormProvider>
			</div>
		</div>
	)
}
