import { Accordion } from 'components/accordion/accordion'
import { Timeline } from 'components/timeline/timeline'
import { Tour as TourType, getTour } from '../tours.data'
import { TourEnroll } from './tour-enroll/tour-enroll'
import { useLayoutEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import Calendar from 'assets/imgs/icons/calendar.svg'
import Clock from 'assets/imgs/icons/clock.svg'
import Group from 'assets/imgs/icons/group.svg'
import styles from './tour.module.sass'
import { useTranslation } from 'react-i18next'

const IncludedServices = [
	'Visa support (Invitation) and registration in Turkmenistan on arrival.',
	'Transport throughout the tour',
	'Accompanied by an English-speaking tour guide',
	'Registration in Ashgabat city; Entrance fees: Horse Hippodrome, Nisa Fortress, National Museum, Merv Museum and Kone Urgench Museum Complex; 1.5lt of water per person per day; Tourist Fee',
]

const NotIncludedServices = [
	'International flights',
	'Turkmenistan tourist visa per person (subject to change; depends on nationality) and migration tax per person (subject to change; depends on nationality)',
	'Payment for video and photos in historical places',
	'Tips for guides and drivers',
	'Medical and travel insurance',
	'Meals: Lunch, Dinner',
]

export const Tour = () => {
	const { id } = useParams()
	const { i18n, t } = useTranslation()

	const tour = useMemo(() => {
		return getTour(+id)
	}, [useParams])

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
				<div className={styles.line} />
				<div className={styles.tour_description__details}>
					<div>
						<Clock width={40} />
						{t('duration')}: {i18n.language === 'en' ? tour.duration : tour.title_ru}
					</div>
					<div>
						<Calendar width={40} />
						Pediod: Year routed
					</div>
					<div>
						<Group width={40} />
						{t('group_size')}: 1 to 12 people
					</div>
				</div>
				<div className={styles.line} />
				<div className={styles.accordions}>
					<Accordion title='Included services' elements={IncludedServices} />
					<Accordion title='Not included services' elements={NotIncludedServices} variant='error' />
				</div>
				<div className={styles.line} />

				<div className={styles.enroll}>
					<TourEnroll tourId={id} />
				</div>
			</div>
		</div>
	)
}
