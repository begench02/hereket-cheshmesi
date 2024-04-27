import { TourCard, TourCardPropsType } from './tour-card/tour-card'
import a from 'assets/imgs/carousel/merv.jpeg'
import styles from './popular-tours.module.sass'

const popularTours: TourCardPropsType[] = [
	{
		image: a,
		header: 'Special tour "Highlights"',
		text: 'This 7-day tour is for people with a general interest in Turkmenistan, wanting to explore as many aspects of the...',
	},
	{
		image: a,
		header: 'A Week of Highlights"',
		text: 'This 7-day tour is for people with a general interest in Turkmenistan, wanting to explore as many aspects of the...',
	},
	{
		image: a,
		header: 'Special tour "Novruz holiday""',
		text: 'This 5-day tour is built around the celebration of the old Persian New Year called Nowruz (“now” meaning “new” and…',
	},
	{
		image: a,
		header: 'Heart of the Karakum',
		text: 'This 4-day tour tells the story of the Karakum Desert and the various roles it has played over time for…',
	},
	{
		image: a,
		header: 'Silk Road Revisited',
		text: 'This 3-day tour is ideal for those interested purely in the overall historical importance of the territory that nowadays is…',
	},
	{
		image: a,
		header: 'Special tour "Ahalteke Horses"',
		text: 'This 5-day tour is built around the celebration of the National Day of the Turkmen Race Horse, the famous thoroughbred…',
	},
]

export const PopularTours = () => {
	return (
		<div id='popular-tours'>
			<h2 className={styles.header}>Popular Tours</h2>
			<div className={styles.content}>
				{popularTours.map((tour) => (
					<TourCard key={tour.header} image={tour.image} header={tour.header} text={tour.text} />
				))}
			</div>
		</div>
	)
}
