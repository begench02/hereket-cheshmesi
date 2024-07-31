import { Accordion } from 'components/accordion/accordion'
import { Timeline } from 'components/timeline/timeline'
import { Tour as TourType, getTour } from '../tours.data'
import { TourEnroll } from './tour-enroll/tour-enroll'
import { useLayoutEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Calendar from 'assets/imgs/icons/calendar.svg'
import Clock from 'assets/imgs/icons/clock.svg'
import Group from 'assets/imgs/icons/group.svg'
import styles from './tour.module.sass'

export const Tour = () => {
	const { id } = useParams()
	const { i18n, t } = useTranslation()

	const IncludedServices = [
		t('included_services.visa_support'),
		t('included_services.transport'),
		t('included_services.guide'),
		t('included_services.additional'),
	]

	const NotIncludedServices = [
		t('not_included_services.international_flights'),
		t('not_included_services.visa_fees'),
		t('not_included_services.video_photo'),
		t('not_included_services.tips'),
		t('not_included_services.insurance'),
		t('not_included_services.meals'),
	]

	const tour = useMemo(() => {
		return getTour(+id)
	}, [id])

	useLayoutEffect(() => {
		window.scrollTo(0, 0)
	})

	return (
		<div className={styles.main}>
			<div className={styles.timeline}>
				<Timeline tour={tour} />
			</div>
			<div className={styles.tour_description}>
				<h2 className={styles.title}>{i18n.language === 'en' ? tour.title : tour.title_ru}</h2>
				<p className={styles['title--dimmed']}>* {t('tour_adjust')}</p>
				<div className={styles.line} />
				<div className={styles.tour_description__details}>
					<div>
						<Clock width={40} className={styles.tour_details__icon} />
						{t('duration')}: {i18n.language === 'en' ? tour.duration : tour.duration_ru}
					</div>
					<div>
						<Calendar width={40} className={styles.tour_details__icon} />
						{t('period')}: {t('year_round')}
					</div>
					<div>
						<Group width={40} className={styles.tour_details__icon} />
						{t('group_size')}
					</div>
				</div>
				<div className={styles.line} />
				<div className={styles.accordions}>
					<Accordion title={t('included_services.included_services')} elements={IncludedServices} />
					<Accordion
						title={t('not_included_services.not_included_services')}
						elements={NotIncludedServices}
						variant='error'
					/>
				</div>
				<div className={styles.line} />

				<div className={styles.enroll}>
					<TourEnroll tourId={id} />
				</div>
			</div>
		</div>
	)
}
