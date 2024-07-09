import { v4 } from 'uuid'
import AkAltynHotel from 'assets/imgs/ashgabat/ak-altyn-hotel.jpg'
import AkhalTeke from 'assets/imgs/ashgabat/akhal-teke.jpg'
import AlamberdarMausoleum from 'assets/imgs/lebap/alamberdar-mausoleum.jpg'
import AltynAsyr from 'assets/imgs/ashgabat/altyn-asyr.jpg'
import ashgabat1 from 'assets/imgs/ashgabat.jpg'
import AstanaBaba from 'assets/imgs/lebap/astana-baba.jpg'
import Awaza from 'assets/imgs/balkan/awaza.jpg'
import Berkarar from 'assets/imgs/ashgabat/berkarar2.jpg'
import CaspianSea from 'assets/imgs/balkan/caspian-sea.jpg'
import Darvaza from 'assets/imgs/ahal/darvaza-gas-crater.jpg'
import DarvazaWaterCrater from 'assets/imgs/ahal/darvaza-water-crater.jpg'
import Erbent from 'assets/imgs/ahal/erbent.jpg'
import GeokTepe from 'assets/imgs/ahal/geok-tepe.jpg'
import GozliAta from 'assets/imgs/ahal/gozli-ata.jpg'
import Kipchak from 'assets/imgs/ashgabat/kipchak.jpg'
import KowAta from 'assets/imgs/ahal/kow-ata.png'
import Koytendag from 'assets/imgs/lebap/dinosaur-plateau.jpg'
import Margiana from 'assets/imgs/mary/margiana.jpg'
import Margush from 'assets/imgs/mary/margush.jpg'
import Merv from 'assets/imgs/mary/merv.jpeg'
import MuhammadIbnZaydMausoleum from 'assets/imgs/mary/muhammad-ibn-zayd-mausoleum.jpg'
import NationalMuseum from 'assets/imgs/ashgabat/national-museum.jpg'
import NeutralityMonument from 'assets/imgs/ashgabat/neutrality-monument.jpg'
import Nisa from 'assets/imgs/ahal/nisa.png'
import RussianBaazar from 'assets/imgs/ashgabat/russian-baazar.jpg'
import SoltanSanjarMousoleum from 'assets/imgs/mary/soltan-sanjar-mausoleum.jpg'
import Turkmenabat from 'assets/imgs/lebap/turkmenabat.jpg'
import Yangykala from 'assets/imgs/balkan/yangykala-canyon.jpg'

export const tours: Tour[] = [
	{
		id: 408897,
		image: ashgabat1,
		title: 'Ashgabat Adventure',
		title_ru: 'Путишествие в Ашхабад',
		duration: '4 days / 3 nights',
		duration_ru: '4 дня / 3 ночи',
		description:
			'City tour, including visit to Nisa fortress and Kipchak complex. After fly to Turkmenbashy, to explore Yangykala Canyon. Back to Ashgabat, visit Kove Ata lake.',
		description_ru:
			'Обзорная экскурсия по городу, включающая посещение крепости Ниса и Кипчакского комплекса. После перелета в Туркменбаши, осмотр каньона Янгыкала. Возвращение в Ашхабад, посещение озера Кове.',
		days: [
			{
				description:
					'Meeting of the group at the airport Ashgabat. Transfer to the hotel. Early accommodation. Rest.',
				places: [
					{
						name: 'Ak Altyn Hotel',
						image: AkAltynHotel,
					},
				],
			},
			{
				description:
					'City tour Ashgabat. Familiarity with the sights of the capital, the main architectural structures of the city, the National Museum, historical monuments. After that, the group will go to the town of Bagir, to visit the Parthian fortress of Nisa, an excursion to the Kipchak memorial complex. Return to Ashgabat. Rest.',
				places: [
					{
						name: 'National Museum',
						image: NationalMuseum,
					},
					{
						name: 'Nisa',
						image: Nisa,
					},
					{
						name: 'Kipchak',
						image: Kipchak,
					},
				],
			},
			{
				description:
					'After breakfast, the group will go on a tour, to an equestrian base, to get acquainted with the pride of the Turkmen people - the Akhal-Teke horse, where you can try yourself in horse riding. Then we will make an excursion to the Geok Tepe mosque. We will visit the underground lake “Kov-Ata”, where we can take a hot bath (water temperature, 36-37 degrees C year-round). Return to Ashgabat. Rest.',
				places: [
					{
						name: 'Akhal-Teke',
						image: AkhalTeke,
					},
					{
						name: 'Geok-Tepe',
						image: GeokTepe,
					},
					{
						name: 'Kow Ata',
						image: KowAta,
					},
				],
			},
		],
	},
	{
		id: 568405,
		image: Darvaza,
		title: 'Darvaza Gaz Crater',
		title_ru: 'Газовый кратер Дарваза',
		duration: '4 days / 3 nights',
		duration_ru: '4 дня / 3 ночи',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aliquid doloribus veritatis quis aperiam beatae?',
		description_ru:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aliquid doloribus veritatis quis aperiam beatae?',
		days: [
			{
				description:
					'Meeting of the group at the airport Ashgabat. Transfer to the hotel. Early accommodation. Rest.',
				places: [
					{
						name: 'Ak Altyn Hotel',
						image: AkAltynHotel,
					},
				],
			},
			{
				description:
					'City tour Ashgabat. Acquaintance with the sights of the capital, the main architectural structures of the city, historical monuments. After that, the group will go to the town of Bagir, to visit the Parthian fortress of Nisa, an excursion to the Kipchak memorial complex. Return to Ashgabat. Rest. ',
				places: [
					{
						name: 'National Museum',
						image: NationalMuseum,
					},
					{
						name: 'Nisa',
						image: Nisa,
					},
					{
						name: 'Kipchak',
						image: Kipchak,
					},
				],
			},
			{
				description:
					'After breakfast, the group will go to the Tolkuchka Eastern Market (days of work Wednesday, Thursday, Saturday, Sunday), where in reality they will be able to feel the beauty of Turkmen carpets and silver jewelry, and purchase souvenirs. After lunch, the group will go from Ashgabat to the north to visit the fire crater in Darvaza, traveling by Jeep. On the way we will visit the mud and water craters, the village of Erbent, where we can get acquainted with the life of the Turkmen village. Dinner in nature. Overnight in tents. ',
				// TODO: ADD Tolkuchka
				places: [
					{ name: 'Darvaza Water Crater', image: DarvazaWaterCrater },
					{ name: 'Darvaza', image: Darvaza },
					{ name: 'Erbent', image: Erbent },
				],
			},
			{
				description:
					'Early in the morning our group will go back to the capital Ashgabat. Hotel accommodation. Rest. We can visit shops, buy souvenirs.',
				places: [{ name: 'Berkarar', image: Berkarar }],
			},
		],
	},
	{
		id: 111507,
		image: Yangykala,
		title: 'Yangykala Adventure',
		title_ru: 'Путишествие в Янгыкалу',
		duration: '5 days / 4 nights',
		duration_ru: '5 дней / 4 ночи',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aliquid doloribus veritatis quis aperiam beatae?',
		description_ru:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aliquid doloribus veritatis quis aperiam beatae?',
		days: [
			{
				description:
					'Meeting of the group at the airport Ashgabat. Transfer to the hotel. Early accommodation. Rest.',
				places: [
					{
						name: 'Ak Altyn Hotel',
						image: AkAltynHotel,
					},
				],
			},
			{
				description:
					'City tour Ashgabat. Acquaintance with the sights of the capital, the main architectural structures of the city, historical monuments. After that, the group will go to the town of Bagir, to visit the Parthian fortress of Nisa, an excursion to the Kipchak memorial complex. Return to Ashgabat. Rest',
				places: [
					{
						name: 'Nautrality Monument',
						image: NeutralityMonument,
					},
					{
						name: 'Bagir',
						image: Nisa,
					},
					{
						name: 'Kipchak',
						image: Kipchak,
					},
				],
			},
			{
				description:
					'Early in the morning we will fly Ashgabat-Turkmenbashy and go to the Yangykala Canyon, on the way we will visit the holy place Gozli-Ata, set up our tent camp or settle in yurts, from which a magnificent view of the limestone deposits. Dinner in nature.',
				places: [
					{
						name: 'Yangunkala Canyon',
						image: Yangykala,
					},
					{
						name: 'Gozli-Ata',
						image: GozliAta,
					},
				],
			},
			{
				description:
					'In the early morning, after breakfast in nature, we will go back to Ashgabat. On the way we will visit the underground lake Kove Ata, where we can take a hot bath (water temperature, 36-37 degrees C year-round). Return to Ashgabat. Accommodation hotel. Rest.',
				places: [
					{
						name: 'Kow-Ata',
						image: KowAta,
					},
				],
			},
		],
	},
	{
		id: 974522,
		image: Margush,
		title: 'Ancient beauty',
		title_ru: 'Древняя красота',
		duration: '5 days / 4 nights',
		duration_ru: '5 дней / 4 ночи',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aliquid doloribus veritatis quis aperiam beatae?',
		description_ru:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aliquid doloribus veritatis quis aperiam beatae?',
		days: [
			{
				description:
					'Meeting of the group at the airport Ashgabat. Transfer to the hotel.  Early accommodation.  Rest.',
				places: [
					{
						name: 'Ak Altyn Hotel',
						image: AkAltynHotel,
					},
				],
			},
			{
				description:
					'City tour Ashgabat. Acquaintance with the sights of the capital, the main architectural structures of the city, historical monuments. After that, the group will go to the town of Bagir, to visit the Parthian fortress of Nisa, an excursion to the Kipchak memorial complex. Return to Ashgabat. Rest',
				places: [
					{
						name: 'Nautrality Monument',
						image: NeutralityMonument,
					},
					{
						name: 'Bagir',
						image: Nisa,
					},
					{
						name: 'Kipchak',
						image: Kipchak,
					},
				],
			},
			{
				description:
					'This afternoon we fly Ashgabat - Mary. Accommodation in a hotel in the city of Mary.  Afterwards, we will go on a tour of Ancient Merv, explore its five cities, the largest mausoleum of the 12th century - the mausoleum of Sultan Sanjar, the mausoleum of Mohammed Ibn Zeid, as well as other significant objects. Excursion Museum of Mary. City tour of Mary. Return to the hotel. Rest.',
				places: [
					{
						name: 'Merv',
						image: Merv,
					},
					{
						name: 'Soltan Sanjar Mousoleum',
						image: SoltanSanjarMousoleum,
					},
					{
						name: 'Muhammad Ibn-Zayd Mausoleum',
						image: MuhammadIbnZaydMausoleum,
					},
				],
			},
			{
				description:
					'Early in the morning our group will go to the excavations of the ancient country of Margush in the sands of the Karakum. We will spend the whole day looking around the Necropolis, the palace, the temples and enjoying the 5000th history of Margiana. After a magnificent excursion a little tired, but happy, we return to Mary, where we will make a flight to Ashgabat. Accommodation at the hotel Ashgabat. Rest.',
				places: [
					{
						name: 'Margush',
						image: Margush,
					},
					{
						name: 'Margiana',
						image: Margiana,
					},
				],
			},
		],
	},
	{
		id: 518559,
		image: Awaza,
		title: 'Awaza',
		title_ru: 'Аваза',
		duration: '6 days / 5 nights',
		duration_ru: '6 дней / 5 ночей',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aliquid doloribus veritatis quis aperiam beatae?',
		description_ru:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aliquid doloribus veritatis quis aperiam beatae?',
		days: [
			{
				description:
					'Meeting of the group at the airport Ashgabat. Transfer to the hotel.  Early accommodation.  Rest.',
				places: [
					{
						name: 'Ak Altyn Hotel',
						image: AkAltynHotel,
					},
				],
			},
			{
				description:
					'City tour Ashgabat. Acquaintance with the sights of the capital, the main architectural structures of the city, historical monuments. After that, the group will go to the town of Bagir, to visit the Parthian fortress of Nisa, an excursion to the Kipchak memorial complex. Return to Ashgabat. Rest',
				places: [
					{
						name: 'Nautrality Monument',
						image: NeutralityMonument,
					},
					{
						name: 'Bagir',
						image: Nisa,
					},
					{
						name: 'Kipchak',
						image: Kipchak,
					},
				],
			},
			{
				description:
					'After breakfast, if desired, the group can go on an independent trip to the Russian bazaar, where we can purchase souvenirs and textile products Altyn Asyr. After lunch, the group will leave from Ashgabat to the north to visit the fire crater in Darvaza. On the way we will visit the mud and water craters, the village of Erbent, where we can get acquainted with the life of the Turkmen village. Return to Ashgabat. Rest in the hotel.',
				places: [
					{
						name: 'Russian Baazaar',
						image: RussianBaazar,
					},
					{
						name: 'Altyn Asyr',
						image: AltynAsyr,
					},
					{
						name: 'Darvaza water crater',
						image: DarvazaWaterCrater,
					},
					{
						name: 'Darvaza Crater',
						image: Darvaza,
					},
					{
						name: 'Erbent',
						image: Erbent,
					},
				],
			},
			{
				description:
					'Early in the morning we will fly Ashgabat-Turkmenbashy. Transfer to Avaza. Accommodation in one of the 5 * hotels on the coast. Rest. .',
				places: [
					{
						name: 'Awaza',
						image: Awaza,
					},
				],
			},
			{
				description:
					'Walking along the coast of the Caspian Sea. According to the season, swimming in the Caspian Sea. Flight Turkmenbashy - Ashgabat. Hotel accommodation. Rest',
				places: [{ name: 'Caspian Sea', image: CaspianSea }],
			},
		],
	},
	{
		id: 605070,
		image: Koytendag,
		title: 'In the footsteps of dinosaurs',
		title_ru: 'По следам динозавров',
		duration: '6 days / 5 nights',
		duration_ru: '6 дней / 5 ночей',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aliquid doloribus veritatis quis aperiam beatae?',
		description_ru:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aliquid doloribus veritatis quis aperiam beatae?',
		days: [
			{
				description:
					'Meeting of the group at the airport Ashgabat. Transfer to the hotel.  Early accommodation.  Rest. ',
				places: [
					{
						name: 'Ak Altyn Hotel',
						image: AkAltynHotel,
					},
				],
			},
			{
				description:
					'After breakfast we will fly Ashgabat -Turkmenabad. Meeting the group at the airport Turkmenabad. Transfer to the tour. base. Duration 8-10 hours. On the way we look Alamberdar, Astana Baba. Accommodation at the tour base. Rest. After dinner, walk through the magnificent park with millennial chinars.',
				places: [
					{ name: 'Turkmenabat', image: Turkmenabat },
					{
						name: 'Alamberdar Mausoleum',
						image: AlamberdarMausoleum,
					},
					{
						name: 'Astana Baba',
						image: AstanaBaba,
					},
				],
			},
		],
	},
]

export const getTour = (id: number): Tour => {
	return tours.find((tour) => tour.id === id)
}

export type Tour = {
	id: number
	image: string
	title: string
	title_ru: string
	duration: string
	duration_ru: string
	description: string
	description_ru: string
	days: Day[]
}

export type Day = {
	description: string
	places: Place[]
}

export type Place = {
	name: string
	image: string
}
