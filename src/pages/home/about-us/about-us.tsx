import { api } from 'src/api'
import { Button } from 'components/button/button'
import { FormProvider, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { TextInput } from 'components/input/text-input/text-input'
import { useTranslation } from 'react-i18next'
import styles from './about-us.module.sass'

const onFormSubmit = (data: FormType) => {
	try {
		api.post('user', data)
	} catch (err) {
		console.error(err)
	}
}

export const AboutUs = () => {
	const { t } = useTranslation()
	const methods = useForm<FormType>()

	return (
		<section className={styles.main}>
			<div className={styles.content}>
				<h2 className={styles.content__title}>{t('about_us')}</h2>
				<p className={styles.content__subtitle}>{t('section.about_us.subtitle')}</p>
				<Link to='/tours' className={styles.content__button}>
					<Button fullWidth>{t('view_tours')}</Button>
				</Link>
			</div>
			{/* <div className={styles.vertical_line} /> */}
			<div className={styles.content}>
				<h2 className={styles.content__title}>{t('leave_contacts')}</h2>
				<p className={styles.content__subtitle}>{t('contact_later')}</p>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onFormSubmit)} className={styles.form}>
						<TextInput placeholder={t('inputs.name')} name='name' fullWidth />
						<TextInput placeholder={t('inputs.email')} name='email' fullWidth />
						<Button fullWidth>{t('send')}</Button>
					</form>
				</FormProvider>
			</div>
		</section>
	)
}

type FormType = {
	name: string
	email: string
}
