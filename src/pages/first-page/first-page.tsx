import DarvazaGazCrater from 'assets/imgs/carousel/darvaza_gas_crater.jpg'
import Dehistan from 'assets/imgs/carousel/dehistan.jpg'
import KarakumDesert from 'assets/imgs/carousel/karakum_desert.png'
import KonyeUrgench from 'assets/imgs/carousel/konye_urgench.jpg'
import Merv from 'assets/imgs/carousel/merv.jpeg'
import Nisa from 'assets/imgs/carousel/nisa.jpeg'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import styles from './first-page.module.sass'

const images = [
	{
		link: DarvazaGazCrater,
		legend: 'Darvaza Gas Crater',
	},
	{
		link: Dehistan,
		legend: 'Dehistan',
	},
	{
		link: KarakumDesert,
		legend: 'Karakum Desert',
	},
	{
		link: KonyeUrgench,
		legend: 'Konye Urgench',
	},
	{
		link: Merv,
		legend: 'Merv',
	},
	{
		link: Nisa,
		legend: 'Nisa',
	},
]

export const FirstPage = () => {
	return (
		<div className={styles.main}>
			<Carousel
				autoPlay
				infiniteLoop
				emulateTouch
				renderIndicator={null}
				renderThumbs={() => null}
				interval={30000}
			>
				{images.map((image) => (
					<div>
						<img src={image.link} alt={image.legend} className={styles.image} />
						{/* <p className={styles.legend}>{image.legend}</p> */}
					</div>
				))}
			</Carousel>
		</div>
	)
}
