import ashgabat1 from 'assets/imgs/ashgabat.jpg'
import ashgabat2 from 'assets/imgs/ashgabat2.jpg'
import ashgabat3 from 'assets/imgs/ashgabat3.jpg'
import Dehistan from 'assets/imgs/balkan/dehistan.jpg'
import AkAltynHotel from 'assets/imgs/tours/ak-altyn-hotel.jpg'
import NationalMuseum from 'assets/imgs/ashgabat/national-museum.jpg'
import Kipchak from 'assets/imgs/ashgabat/kipchak.jpg'
import AkhalTeke from 'assets/imgs/ashgabat/akhal-teke.jpg'
import Nisa from 'assets/imgs/ahal/nisa.png'
import GeokTepe from 'assets/imgs/ahal/geok-tepe.jpg'
import KowAta from 'assets/imgs/ahal/kow-ata.png'
import { v4 } from 'uuid'

export const tours: Tour[] = [
	{
		id: '1',
		image: ashgabat1,
		title: 'Ashgabat Adventure',
		duration: '4 days / 3 nights',
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
		description:
			'City tour, including visit to Nisa fortress and Kipchak complex. After fly to Turkmenbashy, to explore Yangykala Canyon. Back to Ashgabat, visit Kove Ata lake.',
	},
	// {
	// 	id: v4(),
	// 	image: Dehistan,
	// 	title: 'Ashgabat Sights and Darvaza Crater',
	// 	duration: '4 days / 3 nights',
	// 	days: [
	// 		'Meeting of the group at the airport Ashgabat. Transfer to the hotel. Early accommodation. Rest.',
	// 		'City tour Ashgabat. Acquaintance with the sights of the capital, the main architectural structures of the city, historical monuments. After that, the group will go to the town of Bagir, to visit the Parthian fortress of Nisa, an excursion to the Kipchak memorial complex. Return to Ashgabat. Rest. ',
	// 		'After breakfast, the group will go to the Tolkuchka Eastern Market (days of work Wednesday, Thursday, Saturday, Sunday), where in reality they will be able to feel the beauty of Turkmen carpets and silver jewelry, and purchase souvenirs. After lunch, the group will go from Ashgabat to the north to visit the fire crater in Darvaza, traveling by Jeep. On the way we will visit the mud and water craters, the village of Erbent, where we can get acquainted with the life of the Turkmen village. Dinner in nature. Overnight in tents. ',
	// 		'Early in the morning our group will go back to the capital Ashgabat. Hotel accommodation. Rest. We can visit shops, buy souvenirs.',
	// 		'Transfer airport. Departure tourists',
	// 	],
	// 	description:
	// 		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aliquid doloribus veritatis quis aperiam beatae?',
	// },
	// {
	// 	id: v4(),
	// 	image: ashgabat3,
	// 	title: 'Ashgabat and Yangykala Adventure',
	// 	duration: '5 days / 4 nights',
	// 	days: [
	// 		'Meeting of the group at the airport Ashgabat. Transfer to the hotel. Early accommodation. Rest.',
	// 		'City tour Ashgabat. Acquaintance with the sights of the capital, the main architectural structures of the city, historical monuments. After that, the group will go to the town of Bagir, to visit the Parthian fortress of Nisa, an excursion to the Kipchak memorial complex. Return to Ashgabat. Rest.',
	// 		'Early in the morning we will fly Ashgabat-Turkmenbashy and go to the Yangykala Canyon, on the way we will visit the holy place Gozli-Ata, set up our tent camp or settle in yurts, from which a magnificent view of the limestone deposits. Dinner in nature.',
	// 		'In the early morning, after breakfast in nature, we will go back to Ashgabat. On the way we will visit the underground lake Kove Ata, where we can take a hot bath (water temperature, 36-37 degrees C year-round). Return to Ashgabat. Accommodation hotel. Rest.  ',
	// 		'Transfer airport. Departure tourists',
	// 	],
	// 	description:
	// 		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aliquid doloribus veritatis quis aperiam beatae?',
	// },
]

export const getTour = (id: string): Tour => {
	return tours.find((tour) => tour.id === id)
}

export type Tour = {
	id: string
	image: string
	title: string
	duration: string
	description: string
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
