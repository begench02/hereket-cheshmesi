import { TourCard, TourCardPropsType } from './tour-card/tour-card'
import dayahatyn from 'assets/imgs/carousel/dayahatyn.jpg'
import dinosaurPlateau from 'assets/imgs/carousel/dinosaur-plateau.jpg'
import ekedeshik from 'assets/imgs/carousel/ekedeshik.jpg'
import garCrator from 'assets/imgs/carousel/darvaza_gas_crater.jpg'
import gonurDepe from 'assets/imgs/carousel/gonur-depe.jpg'
import KowAta from 'assets/imgs/carousel/Kow Ata.jpg'
import merv from 'assets/imgs/carousel/merv.jpeg'
import nisa from 'assets/imgs/carousel/nisa.jpeg'
import styles from './popular-tours.module.sass'
import tombOfAhmadSanhar from 'assets/imgs/carousel/Tomb of Ahmad Sanjar.jpg'

export type TourCard = {
	image: string
	header: string
	text: string
	history: string
}

const popularTours: TourCard[] = [
	{
		image: garCrator,
		header: 'Darvaza gas crater',
		text: 'The gas crater is near the village of Darvaza in the middle of the Karakum Desert, about 260 kilometres (160 mi) north of Ashgabat, the capital of Turkmenistan, it has a diameter of 60–70 metres (200–230 ft) and has a depth of about 30 metres (98 ft). Another nearby gas crater is fenced off and has a distinct odor.',
		history:
			"The early years of the crater's history are still being determined. Relevant records are either absent from the archives, classified, or inaccessible. Some local geologists have claimed that the collapse of a crater happened in the 1960s; it was set on fire only in the 1980s to prevent the emission of poisonous gases. Others assert that the site was drilled by Soviet engineers in 1971 as an oil field but collapsed within days, forming the crater, with the engineers choosing to flare the crater to prevent the emission of poisonous gases but underestimating the volume of the gas.",
	},
	{
		image: dayahatyn,
		header: 'Dayahatyn',
		text: 'Dayahatyn (also spelled Dayakhatyn or Daya-khatyn or Bai Khatyn in folk) is a medieval caravanserai, sitting on the left bank of the Amu Darya. It is around 170 km to the northwest of the modern city of Turkmenabat, Lebap welaýaty, near the border between Turkmenistan and Uzbekistan. It is a fortified square enclosure with sides 53 metres long. It is believed to have been originally a fortress built by Tahir ibn Husayn in the 9th century. In the 11th century, it was transformed into a caravanserai with fascinating brick-structures, providing shelter for not only caravans but also elites during their long journeys. The integrity of Dayahatyn is a typical example of the mastery of Seljuk architects in brickwork during the 11th and 12th centuries. Because of its artistic excellence, Dayahatyn is regarded as one of the most valuable examples, and perhaps the finest example, of a caravanserai extant in Central Asia, aside from that of Ribat of Sharaf.',
		history:
			'Several legends relate the construction of Dayahatyn. One is that the Rabat of Dayahatyn was built by a local ruler, who wished to hide from a beauty named Daya. Another version is about a rich man named Bay, who suspected his wife in infidelity and left home in the cloth of poor dervish. His wife Bay-Hatyn waited for him to return for many years. In order to ease his suspicion, she built the beautiful Dayahatyn to demonstrate her love and fidelity to her husband. After years of wandering, Bay finally returned to his homeland as a worker in the caravanserai construction. Bay-Hatyn recognized him and they lived happily ever after.',
	},
	{
		image: gonurDepe,
		header: 'Gonur Depe',
		text: 'Gonur Depe (Turkmen: Goňur depe) is an archaeological site, dated from 2400 to 1600 BCE, and located about 60 km north of Mary (ancient Merv), Turkmenistan consisting of a large early Bronze Age settlement. It is the "capital" or major settlement of the Bactria–Margiana Archaeological Complex',
		history: `Scholars believe that the ancient Oxus river culture (Bactria-Margiana) may have its origin at sites like Anau, on the northern slopes of the Kopet-Dag mountains. Anau dates back to 6500 BCE. Later settlements like Gonur may have been founded by people who moved there from the Kopet-Dag area because of changing climate.
		There were increasing incursions of nomadic encampments of the Andronovo culture at the site during the period 1800-1500 BCE. According to Lamberg-Karlovsky, the presence at Gonur of Andronovo pottery (the characteristic ceramics of the Eurasian steppes, where the modern horse was domesticated) certainly implies that the horse was known to the BMAC. However, Sarianidi disregards the steppe connection for the presence of the horse in BMAC.
		Mallory (1997) points out that the BMAC fortified settlements such as Gonur and Togolok resemble the qila, the type of fort known in this region in the historical period. They may be circular or rectangular and have up to three encircling walls. Within the forts are residential quarters, workshops and temples.`,
	},
	{
		image: nisa,
		header: 'Nisa',
		text: 'Nisa was an ancient settlement of the Parthians, located near the Bagyr neighborhood of Ashgabat, Turkmenistan, 18 km west of the city center. Nisa is described by some as the first seat of the Arsacid Empire. It is traditionally assumed to have been founded by Arsaces I (reigned c. 250 BC–211 BC) and was reputedly the royal residence of the Parthian kings, although it has not been established that the fortress at Nisa was either a royal residence or a mausoleum.',
		history: `Nisa was a major trading hub in the Parthian Empire. It was later renamed Mithradātkert (Parthian: 𐭌𐭕𐭓𐭃𐭕𐭊𐭓𐭕, lit. 'fortress of Mithradates') by Mithridates I of Parthia (reigned c. 171 BC–138 BC). The region was famous the beauty, agility and strength of its horses.
		Nisa was totally destroyed by an earthquake during the 1st decade BC.`,
	},
	{
		image: merv,
		header: 'Merv',
		text: "Merv (Turkmen: Merw, Мерв, مرو; Persian: مرو, romanized: Marv), also known as the Merve Oasis, formerly known as Alexandria (Greek: Ἀλεξάνδρεια), Antiochia in Margiana (Greek: Ἀντιόχεια ἡ ἐν τῇ Μαργιανῇ) and Marw al-Shāhijān (Persian: مرو شاهجان), was a major Iranian city in Central Asia, on the historical Silk Road, near today's Mary, Turkmenistan. Human settlements on the site of Merv existed from the 3rd millennium BC until the 18th century AD. It changed hands repeatedly throughout history. Under the Achaemenid Empire, it was the center of the satrapy of Margiana. It was subsequently ruled by the ancient Macedonians, Seleucids, Parthians, Sasanians, Arabs, Ghaznavids, Seljuqs, Khwarazmians and Timurids, among others.",
		history: `Merv has prehistoric roots: archaeological surveys have revealed many traces of village life as far back as the 3rd millennium BC and have associated the area culturally with the Bactria-Margiana Archaeological Complex. The geography of the Zend-Avesta (commentaries on the Avesta) mentions Merv (under the name of Mouru) along with Balkh. In Zoroastrianism, the god Ahura Mazda created Mouru as one of sixteen perfect lands.
		Under the Achaemenid Empire (c. 550–330 BC), the historical record mentions Merv as a place of some importance: under the name of Margu, it occurs as part of one satrapy in the Behistun inscriptions (ca. 515 BC) of the Persian monarch Darius the Great. The first city of Merv was founded in the 6th century BC as part of the Achaemenid expansion into the region of Cyrus the Great (559–530 BC), but later strata deeply cover the Achaemenid levels at the site.`,
	},
	{
		image: dinosaurPlateau,
		header: 'Dinosaur Plateau',
		text: "Dinosaur Plateau (Turkmen: Dinozawrlar platosy) is a large limestone slab lying on the slope of the Köýtendag mountains in the Lebap velayat of Turkmenistan. Its famous for having the world's largest number of dinosaur footprints found in one place.",
		history:
			'A local Turkmen legend says that the footprints of large animals belonged to the elephants from Alexander the Great\'s army which were left during his Asian campaign. Therefore, the nearby village was named Hojapil, which translates from the Turkmen as "sacred elephants".',
	},
	{
		image: ekedeshik,
		header: 'Ekedeshik',
		text: 'The cave city of Ekedeshik, located on the left bank of the Murghab River, has the status of a historical and cultural monument. It is dug in clay sandstone 100 m above the river and is a two-story labyrinth, united by a common gallery passage. The caves go 37 meters deep. The name translated from Turkmen means "one hole", and indicates that the huge complex had only one exit, which contributed to its invisibility and inaccessibility. Researchers believe that this architectural monument originated around the 1st century BC.',
		history:
			'Most archaeologists assume that the city was an underground abode of Christian or Buddhist monks who in ancient times lived in the territory of Central Asia. There are 44 separate rooms in Ekedeshik in total. Only a few of them have completely collapsed and are inaccessible for visiting. In some of the rooms, high staircases have been cut down to the second floor. Part of the premises on the first floor was used only for collecting water from underground sources, and the premises in the upper gallery served mainly for housing. Some of the "apartments" on the second floor were quite spacious and could accommodate entire families.',
	},
	{
		image: tombOfAhmadSanhar,
		header: 'Tomb of Ahmad Sanjar',
		text: 'The Tomb of Ahmad Sanjar is a mausoleum commemorating Ahmad Sanjar, a Seljuk ruler of Khorasan. It was built in 1157 in the medieval city of Merv in the Karakum Desert in Turkmenistan. Throughout his reign, Sanjar fought off several invasions and uprisings until finally being defeated by the Oghuz. After being sacked by the Oghuz, Merv declined and in 1221, the Mongols attacked it and burned down the mausoleum. It would later be restored by Soviet, Turkmen, and Turkish architects during the 20th and 21st centuries. The tomb is part of The State Historical and Cultural Park "Ancient Merv", a UNESCO World Heritage Site.',
		history: `In 1221, Mongols led by Tolui attacked Merv, which surrendered after a seven-day siege. Upon the city’s surrender, the Mongols massacred the city’s inhabitants and enslaved around four hundred artisans and a number of children. Arab historian Ali ibn al-Athir states that 700,000 people were killed during the Mongol sack of Merv. The Mongols burned most of the city’s buildings, including the Tomb of Ahmad Sanjar. According to ibn al-Athir, the Mongols “set fire to the city and burned down the mausoleum of Sultan Sanjar, having dug up his grave in the search of precious objects.”'The fire caused significant damage to the structure, destroying much of the mausoleum’s exterior brickwork and causing the building’s outer dome to collapse. Merv remained severely depopulated in the period following the Mongol invasion and the tomb deteriorated further due to centuries of neglect.`,
	},
	{
		image: KowAta,
		header: 'Kow Ata',
		text: 'Kow Ata (also The Bakharlyn) is an underground lake in an eponymous cave near Bäherden in Turkmenistan, at the foot of the Kopet Dag. It is the largest in Commonwealth of Independent States',
		history: `The landform was first documented by archaeologists in 1856. Coverage by the local press in 1896—noting the authorities of Bäherden rail-station to have had a wooden staircase installed for safe descent—led to tourists from Ashgabat flocking the site.
		In 1960s, a road was constructed to the cave, electricity supplied, and hotels built in nearby areas.`,
	},
]

export const PopularTours = () => {
	return (
		<div id='popular-tours' className={styles.main}>
			<h2 className={styles.header}>Popular Tours</h2>
			<div className={styles.content}>
				{popularTours.map((tour) => (
					<TourCard key={tour.header} article={tour} />
				))}
			</div>
		</div>
	)
}
