import { Button } from 'components/button/button'
import { FormProvider, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { TextInput } from 'components/input/text-input/text-input'
import { useTranslation } from 'react-i18next'
import styles from './about-us.module.sass'

const onFormSubmit = (data: any) => {
	console.log('Data: ', data)
}

export const AboutUs = () => {
	const { t } = useTranslation()
	const methods = useForm<FormType>()

	return (
		<section id='about-us' className={styles.main}>
			<div className={styles.content}>
				<div className={styles.about_us}>
					<h2 className={styles.title}>{t('about_us')}</h2>
					<p className={styles.subtitle}>{t('section.about_us.subtitle')}</p>
					<Link to='/tours' className={styles.button}>
						<Button fullWidth>{t('view_tours')}</Button>
					</Link>
				</div>
				<div className={styles.vertical_line} />
				<div>
					<FormProvider {...methods}>
						<h2 className={styles.title}>{t('leave_contacts')}</h2>
						<p className={styles.subtitle}>{t('contact_later')}</p>
						<br />
						<form onSubmit={methods.handleSubmit(onFormSubmit)} className={styles.form}>
							<div>
								<TextInput placeholder={t('inputs.name')} name='name' />
							</div>
							<div>
								<TextInput placeholder={t('inputs.email')} name='email' />
							</div>
							<Button className={styles.button}>{t('send')}</Button>
						</form>
					</FormProvider>
				</div>
			</div>
		</section>
	)
}

type FormType = {
	name: string
	email: string
}
