import { FormProvider, useForm } from 'react-hook-form'
import { TextInput } from 'components/input/text-input/text-input'
import { useTranslation } from 'react-i18next'
import styles from './tour-enroll.module.sass'
import { Button } from 'components/button/button'
import { FC } from 'react'
import { api } from 'src/api'

export const TourEnroll: FC<TourEnrollProps> = (props) => {
	const { tourId } = props
	const methods = useForm()
	const { t } = useTranslation()

	const onFormSubmit = async (data: any) => {
		await api.post('tour-enroll', {
			...data,
			tour_id: tourId,
		})
	}

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onFormSubmit)}>
				<h2 className={styles.heading}>Enroll to Tour</h2>
				<div className={styles.input}>
					<TextInput placeholder={t('inputs.name')} name='name' />
				</div>
				<div className={styles.input}>
					<TextInput placeholder={t('inputs.email')} name='email' />
				</div>
				<Button fullWidth={true}>Enroll</Button>
			</form>
		</FormProvider>
	)
}

type TourEnrollProps = {
	tourId: string
}
