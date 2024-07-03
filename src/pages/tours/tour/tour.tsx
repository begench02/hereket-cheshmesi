import { useMemo } from 'react'
import { Tour as TourType, getTour } from '../tours.data'
import { useParams } from 'react-router-dom'
import styles from './tour.module.sass'
import { Accordion } from 'components/accordion/accordion'

export const Tour = () => {
	const { id } = useParams()

	const tour = useMemo(() => {
		return getTour(id)
	}, [id])

	return (
		<div className={styles.main}>
			<div className={styles.section_one}>
				<div className={styles.image}></div>
				<div className={styles.tour_details}></div>
			</div>
			{tour.days.map((day, index) => (
				<Accordion options={{ title: `Day ${index + 1}`, elements: [day] }} />
			))}
		</div>
	)
}
