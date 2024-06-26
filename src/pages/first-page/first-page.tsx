import { useTranslation } from 'react-i18next'
import styles from './first-page.module.sass'

export const FirstPage = () => {
	const { t } = useTranslation('')

	return (
		<section className={styles.main}>
			<div className={styles.content}>
				<div className={styles.title}>{t('turkmenistan')}</div>
			</div>
		</section>
	)
}
