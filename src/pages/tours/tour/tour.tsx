import { Accordion } from 'components/accordion/accordion'
import { Timeline } from 'components/timeline/timeline'
import { Tour as TourType, getTour } from '../tours.data'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import styles from './tour.module.sass'

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
			<Timeline tour={tour} />
			<div className={styles.tour_description}>
				<h2 className={styles.tour_description__name}>{tour.title}</h2>
				<div>
					<p>Duration: {tour.duration}</p>
					<p>Pediod: Year routed</p>
					<p>Group size: 1 to 12 people</p>
				</div>
			</div>
			<div className={styles.accordion}>
				<Accordion options={{ title: 'Included services', elements: IncludedServices }} />
				<Accordion
					options={{ title: 'Not included services', elements: NotIncludedServices }}
					variant='error'
				/>
			</div>
		</div>
	)
}
