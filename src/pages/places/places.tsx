import { clsx } from 'clsx'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import AbuSaidMeikheneMausoleum from 'assets/imgs/ahal/abu-said-meikhene-mausoleum.jpg'
import AkhalTeke from 'assets/imgs/ashgabat/akhal-teke.jpg'
import AltynAsyr from 'assets/imgs/ashgabat/altyn-asyr.jpg'
import AltynTepe from 'assets/imgs/ahal/altyn-tepe.jpg'
import Ashgabat from 'assets/imgs/ashgabat3.jpg'
import Berkarar from 'assets/imgs/ashgabat/berkarar.jpg'
import DarvazaGasCrater from 'assets/imgs/ahal/darvaza-gas-crater.jpg'
import DarvazaWaterCrater from 'assets/imgs/ahal/darvaza-water-crater.jpg'
import Dehistan from 'assets/imgs/carousel/dehistan.jpg'
import DinosaurPlateau from 'assets/imgs/carousel/dinosaur-plateau.jpg'
import Ekedeshik from 'assets/imgs/carousel/ekedeshik.jpg'
import ErtugrulGaziMosque from 'assets/imgs/ashgabat/ertugrul-gazi-mosque.jpg'
import GeokTepe from 'assets/imgs/ahal/geok-tepe.jpg'
import GonurDepe from 'assets/imgs/carousel/gonur-depe.jpg'
import HistoricalMonumentAbiward from 'assets/imgs/ahal/abiward.jpg'
import IndependenceMonument from 'assets/imgs/ashgabat/independence-monument.jpg'
import KowAta from 'assets/imgs/ahal/kow-ata.jpg'
import Merv from 'assets/imgs/mary/merv.jpeg'
import MonumentOfNeutrality from 'assets/imgs/ashgabat/neutrality-monument.jpg'
import NationalMuseumOfTurkmenistan from 'assets/imgs/ashgabat/national-museum-of-turkmenistan.jpg'
import Nisa from 'assets/imgs/ahal/nisa.jpeg'
import SeyitJemaletdinMosque from 'assets/imgs/ahal/seyit-jemaletdin-mosque.jpg'
import SoltanSanjar from 'assets/imgs/mary/soltan-sanjar-mausoleum.jpg'
import styles from './places.module.sass'
import TurkmenCarpetMuseum from 'assets/imgs/ashgabat/turkmen-carpet-museum.jpg'

type CITY = 'Ashgabat' | 'Ahal' | 'Mary'

type Places = {
	cityName: CITY
	cityImg: string
	places: {
		name: string
		img: string
	}[]
}
const places: Places[] = [
	{
		cityName: 'Ashgabat',
		cityImg: Ashgabat,
		places: [
			{
				name: 'Berkarar',
				img: Berkarar,
			},
			{
				name: 'Ertugrul Gazi Mosque',
				img: ErtugrulGaziMosque,
			},
			{
				name: 'Turkmen Carpet Museum',
				img: TurkmenCarpetMuseum,
			},
			{
				name: 'Altyn Asyr',
				img: AltynAsyr,
			},
			{
				name: 'National Museum of Turkmenistan',
				img: NationalMuseumOfTurkmenistan,
			},
			{
				name: 'Monument of Neutrality',
				img: MonumentOfNeutrality,
			},
			{
				name: 'Independence Monument',
				img: IndependenceMonument,
			},
			{
				name: 'Akhal-Teke',
				img: AkhalTeke,
			},
		],
	},
	{
		cityName: 'Ahal',
		cityImg: Ashgabat,
		places: [
			{
				name: 'Kow Ata',
				img: KowAta,
			},
			{
				name: 'Geok Tepe',
				img: GeokTepe,
			},
			{
				name: 'Historical monument Abiward',
				img: HistoricalMonumentAbiward,
			},
			{
				name: 'Nisa',
				img: Nisa,
			},
			{
				name: 'Abu Said Meikhene Mausoleum',
				img: AbuSaidMeikheneMausoleum,
			},
			{
				name: 'Seyit Jemaletdin Mosque',
				img: SeyitJemaletdinMosque,
			},
			{
				name: 'Altyn tepe',
				img: AltynTepe,
			},
			{
				name: 'Darvaza Gas Crater',
				img: DarvazaGasCrater,
			},
			{
				name: 'Darvaza Water Crater',
				img: DarvazaWaterCrater,
			},
		],
	},
	{
		cityName: 'Mary',
		cityImg: Ashgabat,
		places: [
			{
				name: 'Merv',
				img: Merv,
			},
			{
				name: 'Soltan Sanjar Mausoleum',
				img: SoltanSanjar,
			},
		],
	},
]

export const Places = () => {
	const [currentCity] = useState<CITY>('Mary')
	const currentPlace = places.find(({ cityName }) => cityName === currentCity)
	console.log(currentPlace)

	return (
		<div id='places' className={styles.main}>
			<div className={styles.row}>
				<div className={styles.image_block}>
					<img
						src={currentPlace.cityImg}
						alt={currentPlace.cityName}
						width={500}
						height={200}
						className={styles.image}
					/>
					<p className={styles.legend}>{currentPlace.cityName}</p>
				</div>
				<div className={styles.aaa}>
					<h2 className={styles.title}>Awesome places</h2>
					<p className={styles.subtitle}>
						Traveling is a great opportunity to get know
						<br /> fascinating countries and friendly people
					</p>
					<div className={styles.buttons}>
						<button className={clsx(styles.btn, styles.btn__light)}>CONTACT US</button>
						<button className={clsx(styles.btn, styles.btn__gray)}>
							<Link to='/gallery'>GALLERY</Link>
						</button>
					</div>
				</div>
			</div>
			<div className={styles.gallery}>
				{currentPlace.places.map((place) => (
					<div className={styles.gallery_image}>
						<img src={place.img} alt={place.name} className={styles.image} />
						<p className={styles.legend}>{place.name}</p>
					</div>
				))}
			</div>
		</div>
	)
}
