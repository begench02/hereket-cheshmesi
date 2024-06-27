import 'react-international-phone/style.css'
import { Button } from 'components/button/button'
import { DateInput } from 'components/input/date-input/date-input'
import { useState } from 'react'
import { Controller, FormProvider, useForm } from 'react-hook-form'
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
import { api } from 'src/api'
import { is_phone_valid } from 'src/utils'
import { Textarea } from 'components/input/textarea/textarea'

const mapLocation = {
	center: [37.9869, 58.3608],
	zoom: 8,
}

type ContactValues = {
	name: string
	homeCountry: string
	email: string
	phone: string
	enterFrom: string
	exitFrom: string
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
	// const is_phone_valid = ;
	const [phone, setPhone] = useState('')
	const methods = useForm<ContactValues>()

	const onFormSubmit = (formData: ContactValues) => {
		api.post('user', formData)
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
							<TextInput placeholder={t('page.contact_us.name')} name='name' required />
							<TextInput placeholder={t('page.contact_us.country')} name='homeCountry' />
						</div>
						<div className={styles.flex}>
							<TextInput placeholder={t('page.contact_us.email')} name='email' />

							<div className={styles.test_block}>
								<Controller
									name='phone'
									control={methods.control}
									rules={{ required: true, validate: is_phone_valid }}
									render={({ field: { onChange, value } }) => (
										<PhoneInput
											defaultCountry='ru'
											value={value}
											onChange={onChange}
											required={true}
											style={{ width: '100%', height: '100%' }}
											inputStyle={{ width: '100%', height: '100%', boxSizing: 'border-box' }}
											className={styles.input_phone__container}
											inputClassName={clsx(
												styles.input_phone__input,
												methods.formState.errors['phone'] &&
													styles['input_phone__input--error'],
											)}
											countrySelectorStyleProps={{
												buttonClassName: styles.input_phone__country_btn,
											}}
										/>
									)}
								/>
							</div>
						</div>
						<div>
							<TextInput placeholder={t('page.contact_us.purpose')} name='purpose' />
						</div>
						<div>
							<p className={styles.label}>{t('page.contact_us.visited_before')}</p>
							<Radio options={[t('yes'), t('no')]} name='visitedBefore' />
						</div>
						<div>
							<p className={styles.label}></p>
							<DateInput name='visitTime' required placeholder={t('page.contact_us.date')} />
						</div>
						{/* <div>
							<NumberInput
								placeholder='2'
								label='How many days do you wish to spend in Turkmenistan? *'
							/>
						</div> */}
						<div>
							<p className={styles.label}>{t('page.contact_us.enter')}</p>
							<Controller
								control={methods.control}
								name='enterFrom'
								render={({ field: { onChange, value } }) => (
									<Select
										options={entranceOptions}
										value={entranceOptions.find((c) => c.value === value)}
										onChange={onChange}
									/>
								)}
							/>
						</div>
						<div>
							<p className={styles.label}>{t('page.contact_us.exit')}</p>
							<Controller
								control={methods.control}
								name='exitFrom'
								render={({ field: { onChange, value } }) => (
									<Select
										options={entranceOptions}
										value={entranceOptions.find((c) => c.value === value)}
										onChange={onChange}
									/>
								)}
							/>
						</div>
						<div>
							<p className={styles.label}>{t('page.contact_us.accommodation_type')}</p>
							<Radio
								options={[
									t('page.contact_us.hotel'),
									t('page.contact_us.camping'),
									t('page.contact_us.combination'),
								]}
								name='accommodationType'
							/>
						</div>
						<div>
							<p className={styles.label}>{t('page.contact_us.hotel_category')}</p>
							<Radio
								options={[
									t('page.contact_us.budget'),
									t('page.contact_us.standard'),
									t('page.contact_us.comfort'),
								]}
								name='hotelCategory'
							/>
						</div>
						<div>
							<p className={styles.label}>{t('page.contact_us.hotel_rooms')}</p>
							<Radio
								options={[
									t('page.contact_us.single'),
									t('page.contact_us.double'),
									t('page.contact_us.triple'),
								]}
								name='hotelRooms'
							/>
						</div>
						<div>
							<p className={styles.label}>{t('page.contact_us.meal')}</p>
							<Radio
								options={[
									t('page.contact_us.lunch_only'),
									t('page.contact_us.dinner_only'),
									t('page.contact_us.full_board'),
								]}
								name='mealPlan'
							/>
						</div>
						<div>
							<p className={styles.label}>{t('page.contact_us.transport_type')}</p>
							<Radio
								options={[
									t('page.contact_us.road'),
									t('page.contact_us.air'),
									t('page.contact_us.off_road'),
									t('page.contact_us.train'),
									t('page.contact_us.combination'),
								]}
								name='transport'
							/>
						</div>

						<div>
							<Textarea placeholder={t('page.contact_us.message')} />
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
