import 'react-international-phone/style.css'
import { api } from 'src/api'
import { Button } from 'components/button/button'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { copy_text, is_phone_valid } from 'src/utils'
import { crossingBorders } from './crossing-borders'
import { DateInput } from 'components/input/date-input/date-input'
import { PhoneInput } from 'react-international-phone'
import { Radio } from 'components/radio/radio'
import { Select } from 'components/select/select'
import { Textarea } from 'components/input/textarea/textarea'
import { TextInput } from 'components/input/text-input/text-input'
import { useLayoutEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import clsx from 'clsx'
import email from 'assets/imgs/icons/email.png'
import locationMarker from 'assets/imgs/icons/location-marker.png'
import phoneImg from 'assets/imgs/icons/phone.png'
import styles from './contact-us.module.sass'

const mapLocation = {
	center: [37.9869, 58.3608],
	zoom: 8,
}

export const ContactUs = () => {
	const { t } = useTranslation()
	const methods = useForm<ContactValues>()

	useLayoutEffect(() => {
		window.scrollTo(0, 0)
	})

	const onFormSubmit = (formData: ContactValues) => {
		api.post('user', formData)
		console.log('Form data: ', formData)
	}

	return (
		<div className={styles.main}>
			<div>
				{/* <YMaps>
					<Map defaultState={mapLocation} width='100%' height='600px'>
						<Placemark geometry={mapLocation.center} />
					</Map>
				</YMaps> */}
				<div className={styles.contacts}>
					<div className={styles.contact}>
						<img src={locationMarker} alt='Location Marker' className={styles.contact__icon} />
						<div className={styles.contact__text}>
							<p className={styles['contact__text--bold']}>{t('address')}: </p>
							<p
								onClick={(event: any) => copy_text(event.target.innerText, 'address')}
								className={styles.text_copy}
							>
								- {t('location')}
							</p>
						</div>
					</div>
					<div className={styles.contact}>
						<img src={email} alt='Email' className={clsx(styles.contact__icon, styles.email__icon)} />
						<div className={styles.contact__text}>
							<p className={styles['contact__text--bold']}>{t('email')}: </p>
							<p
								onClick={(event: any) => copy_text(event.target.innerText, 'email')}
								className={styles.text_copy}
							>
								- info@cheshme@mail.ru
							</p>
							<p
								onClick={(event: any) => copy_text(event.target.innerText, 'email')}
								className={styles.text_copy}
							>
								- bgeldyev7@gmail.com
							</p>
						</div>
					</div>
					<div className={styles.contact}>
						<img src={phoneImg} alt='Phone' className={clsx(styles.contact__icon, styles.phone__icon)} />
						<div className={styles.contact__text}>
							<p className={styles['contact__text--bold']}>{t('phone')}: </p>
							<p
								onClick={(event: any) => copy_text(event.target.innerText, 'phone')}
								className={styles.text_copy}
							>
								+993 65 553461
							</p>
							<p
								onClick={(event: any) => copy_text(event.target.innerText, 'phone')}
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
							<TextInput placeholder={t('inputs.name')} name='name' required />
							<TextInput placeholder={t('inputs.email')} name='email' />
						</div>
						<div className={styles.flex}>
							<TextInput placeholder={t('page.contact_us.country')} name='home' />
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
												styles['input_phone__input--error'] &&
													methods.formState.errors['phone'],
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
							<p className={styles.label}>{t('page.contact_us.visit_time')}</p>
							<DateInput name='visitTime' required />
						</div>
						<div>
							<p className={styles.label}>{t('page.contact_us.enter')}</p>
							<Controller
								control={methods.control}
								name='enterFrom'
								render={({ field: { onChange, value } }) => (
									<Select
										options={crossingBorders}
										value={crossingBorders.find((c) => c.value === value)}
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
										options={crossingBorders}
										value={crossingBorders.find((c) => c.value === value)}
										onChange={onChange}
									/>
								)}
							/>
						</div>
						<div>
							<Textarea name='message' placeholder={t('page.contact_us.message')} />
						</div>
						<div className={styles.send_btn__container}>
							<Button variant='contained' fullWidth>
								{t('send')}
							</Button>
						</div>
					</form>
				</FormProvider>
			</div>
		</div>
	)
}

type ContactValues = {
	name: string
	homeCountry: string
	email: string
	phone: string
	enterFrom: string
	exitFrom: string
}
