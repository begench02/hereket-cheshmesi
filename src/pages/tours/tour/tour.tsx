import { Accordion } from 'components/accordion/accordion'
import { Timeline } from 'components/timeline/timeline'
import { Tour as TourType, getTour } from '../tours.data'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import styles from './tour.module.sass'
import Clock from 'assets/imgs/icons/clock.svg'
import Calendar from 'assets/imgs/icons/calendar.svg'
import Group from 'assets/imgs/icons/group.svg'

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

	const tour = useMemo(() => {
		return getTour(id)
	}, [useParams])

	return (
		<div className={styles.main}>
			<h2 className={styles.title}>{tour.title}</h2>
			<div className={styles.tour_description}>
				<div className={styles.tour_description__details}>
					<div>
						<Clock width={40} />
						Duration: {tour.duration}
					</div>
					<div>
						<Calendar width={40} />
						Pediod: Year routed
					</div>
					<div>
						<Group width={40} /> Group size: 1 to 12 people
					</div>
				</div>
				<div className={styles.accordions}>
					<Accordion options={{ title: 'Included services', elements: IncludedServices }} />
					<Accordion
						options={{ title: 'Not included services', elements: NotIncludedServices }}
						variant='error'
					/>
				</div>
			</div>
			<Timeline tour={tour} />
		</div>
	)
}
