import { v4 as uuidv4 } from 'uuid'
import AbuSaidMeikheneMausoleum from 'assets/imgs/ahal/abu-said-meikhene-mausoleum.jpg'
import Ahal from 'assets/imgs/ahal/ahal.jpg'
import AkhalTeke from 'assets/imgs/ashgabat/akhal-teke.jpg'
import AltynAsyr from 'assets/imgs/ashgabat/altyn-asyr.jpg'
import AltynTepe from 'assets/imgs/ahal/altyn-tepe.jpg'
import Ashgabat from 'assets/imgs/ashgabat3.jpg'
import AstanaBaba from 'assets/imgs/lebap/astana-baba.jpg'
import Balkan from 'assets/imgs/balkan/balkan.jpg'
import Berkarar from 'assets/imgs/ashgabat/berkarar.jpg'
import CaveTownYekedeshik from 'assets/imgs/mary/cave-town-yekedeshik.jpg'
import DarvazaGasCrater from 'assets/imgs/ahal/darvaza-gas-crater.jpg'
import DarvazaWaterCrater from 'assets/imgs/ahal/darvaza-water-crater.jpg'
import Dashoguz from 'assets/imgs/dashoguz/dashoguz.jpg'
import Dehistan from 'assets/imgs/balkan/dehistan.jpg'
import DinosaurPlateau from 'assets/imgs/carousel/dinosaur-plateau.jpg'
import Ekedeshik from 'assets/imgs/carousel/ekedeshik.jpg'
import ErtugrulGaziMosque from 'assets/imgs/ashgabat/ertugrul-gazi-mosque.jpg'
import GeokTepe from 'assets/imgs/ahal/geok-tepe.jpg'
import GonurDepe from 'assets/imgs/mary/gonur-depe.jpg'
import GozliAta from 'assets/imgs/balkan/gozli-ata.jpg'
import HistoricalMonumentAbiward from 'assets/imgs/ahal/abiward.jpg'
import IndependenceMonument from 'assets/imgs/ashgabat/independence-monument.jpg'
import KapKutan from 'assets/imgs/lebap/kap-kutan.jpg'
import Karakum from 'assets/imgs/balkan/karakum.jpg'
import KaynarBaba from 'assets/imgs/lebap/kaynar-baba.jpg'
import KowAta from 'assets/imgs/ahal/kow-ata.png'
import Kyrkgyz from 'assets/imgs/lebap/kyrkgyz.jpg'
import KyzKala from 'assets/imgs/mary/kyz-kala.jpg'
import Lebap from 'assets/imgs/lebap/lebap.jpg'
import MausoleumOfAlamberdar from 'assets/imgs/lebap/mausoleum-of-lamberdar.jpg'
import Merv from 'assets/imgs/mary/merv.jpeg'
import MonumentOfNeutrality from 'assets/imgs/ashgabat/neutrality-monument.jpg'
import NationalMuseumOfTurkmenistan from 'assets/imgs/ashgabat/national-museum.jpg'
import Nisa from 'assets/imgs/ahal/nisa.png'
import OasisDampla from 'assets/imgs/lebap/oasis-dampla.jpg'
import ParauBibi from 'assets/imgs/balkan/parau-bibi.jpg'
import SeyitJemaletdinMosque from 'assets/imgs/ahal/seyit-jemaletdin-mosque.jpg'
import SoltanSanjar from 'assets/imgs/mary/soltan-sanjar-mausoleum.jpg'
import TombOfKhojaYusufHamadani from 'assets/imgs/mary/tomb-of-khoja-yusuf-hamadani.jpg'
import TurkmenCarpetMuseum from 'assets/imgs/ashgabat/turkmen-carpet-museum.jpg'
import UmbarWaterfall from 'assets/imgs/lebap/umbar.jpg'
import YangykalaCanyon from 'assets/imgs/balkan/yangykala-canyon.jpg'

export type CITY = 'Ashgabat' | 'Ahal' | 'Mary' | 'Lebap' | 'Dashohuz' | 'Balkan'

type Places = {
	id: string
	cityName: CITY
	cityImg: string
	cityHistory: string
	places: {
		name: string
		img: string
		history: string
		id: string
	}[]
}

export const places: Places[] = [
	{
		id: uuidv4(),
		cityName: 'Ashgabat',
		cityImg: Ashgabat,
		cityHistory:
			'Ashgabat is the capital of Turkmenistan, the largest administrative, political, industrial, scientific and cultural center',
		places: [
			{
				id: uuidv4(),
				name: 'Berkarar',
				img: Berkarar,
				history:
					'The Berkarar shopping center is the largest shopping and entertainment center in Turkmenistan. The complex is located in the southern part of Ashgabat, at the intersection of 10 YilAbadanchylyk and Ataturk avenues. Built in 2014]. The total area is 17.5 hectares. Next to the shopping and entertainment center there is also an adjacent 12-story round tower of the Berkarar business center',
			},
			{
				id: uuidv4(),
				name: 'Ertugrul Gazi Mosque',
				img: ErtugrulGaziMosque,
				history:
					'Ertogrulgazy Mosque is one of the most beautiful mosques in Ashgabat, built in the Turkish style, and is the largest in the city. The mosque has four minarets. One of the first mosques built after Turkmenistan gained independence, in the early 1990s. Named after the Turkic ruler Ertogrul.',
			},
			{
				id: uuidv4(),
				name: 'Turkmen Carpet Museum',
				img: TurkmenCarpetMuseum,
				history:
					'The carpet in Turkmenistan is a state symbol. In order to preserve, revive and creatively develop the ancient traditions of Turkmen carpet weaving, in 1993, by decree of the President of Turkmenistan, the National Carpet Museum was created. It is located in the center of Ashgabat. The total area of ​​the museum is 15,000 sq.m. A third of this area – 5000 sq.m. – is allocated for exhibition halls. The exhibition consists of 8,000 exhibits, the main part of which dates back to the 17th-19th centuries. The collection is replenished annually. It presents the smallest carpet, in the form of a key holder, and the largest, with an area of ​​301 sq.m., which is included in the Guinness Book of Records.',
			},
			{
				id: uuidv4(),
				name: 'Altyn Asyr',
				img: AltynAsyr,
				history: 'Тrade center of Turkmen textiles',
			},
			{
				id: uuidv4(),
				name: 'National Museum of Turkmenistan',
				img: NationalMuseumOfTurkmenistan,
				history:
					'The capital of Turkmenistan is famous throughout the world for its white marble architecture; many structures, including not only buildings, but also monuments or sculptures, have already become the main attractions of the city, and some have even been included as “the very best” in the Guinness Book of Records. One of these attractions in Ashgabat is the State Museum of the State Cultural Center of Turkmenistan.Previously, this museum was simply called the Main National Museum. Everything about this museum is remarkable: its location, its history, its architecture, and the exhibits stored in it. It is the first and largest of the 26 museums created after Turkmenistan gained independence. The official opening of the museum took place on November 12, 1998. The flag of Turkmenistan is installed directly in front of the building on one of the tallest flagpoles in the world. The State Museum of the State Cultural Center of Turkmenistan is equipped with the latest museum equipment, autonomous power and water supply systems, restoration rooms, laboratories, computer systems that control lighting, humidity and air temperature.',
			},
			{
				id: uuidv4(),
				name: 'Monument of Neutrality',
				img: MonumentOfNeutrality,
				history:
					'A monument to neutrality, the three-legged arch, which became known as the "Tripod", was 75 meters (246 ft) high and was built in 1998. by order of the first president of Turkmenistan, SaparmuratNiyazov, to commemorate the country\'s official position: neutrality. Its construction cost 12 million dollars. The monument was topped by a 12-meter (39 ft) gilded statue of Niyazov, which rotated so as to always face the sun.',
			},
			{
				id: uuidv4(),
				name: 'Independence Monument',
				img: IndependenceMonument,
				history:
					"Independence Monument is a monumental complex. In its magnificence and scope, for a long time it has no analogues not only in Ashgabat, but throughout Central Asia. The monument is located in the south of Ashgabat. The grand opening took place in 2000. The monument represents the unity of the five largest Turkmen tribes embodied in five stars crowning the peak of the monument. The lower part of the monument has the shape of a hemisphere, representing a Turkmen yurt - the warmth of a home, the comfort of a hearth. In the building of the Monument of Independence of Turkmenistan houses the Museum of Independence of Turkmenistan, where historical exhibits related to the origins of the country's sovereignty are presented. Around the Monument of Independence there is a monumental ensemble consisting of 27 sculptures of national heroes. A gilded sculpture of the first President of Turkmenistan, SaparmuratTurkmenbashi, was erected at the head of the ensemble. The entire monumental complex is surrounded by a forest park area.",
			},
			{
				id: uuidv4(),
				name: 'Akhal-Teke',
				img: AkhalTeke,
				history:
					'The Akhal-Teke horse, or Akhal-Teke, is a riding horse breed, bred in the territory of modern Turkmenistan, presumably about 5,000 years ago. This is the oldest of the cultivated breeds, which influenced many breeds - Arabian, thoroughbred and others. Akhal-Teke horses are among the most expensive horses in the world. They are distinguished by their special style, beautiful mane, strength and smooth running.',
			},
		],
	},
	{
		id: uuidv4(),
		cityName: 'Ahal',
		cityImg: Ahal,
		cityHistory:
			'Ahalvelayat- is an administrative unit in the south of Turkmenistan. Initially, the administrative center of the velayat was the city of Ashgabat, but later it was transferred to a separate administrative unit, and Anau became the center.',
		places: [
			{
				id: uuidv4(),
				name: 'Kow Ata',
				img: KowAta,
				history:
					'One of the most famous and visited tourist sites in Turkmenistan. The Baharden Cave is a 250-meter hall, the height of which decreases from 26 meters at the entrance to 3 meters near the lake itself, located at a depth of 55 meters. Air temperature is 20-25°C in winter and 27-32°C in summer. And the water temperature is 37 °C. The underground lake is considered healing because its water is rich in hydrogen sulfide and 26 other chemical elements. Archaeologists claim that the cave has been visited by people for more than 2,000 years. Today it is equipped with a concrete descent, an observation deck and lighting. This negatively impacted the bat colony. Of more than 400 thousand individuals, only a few tens of thousands remain.',
			},
			{
				id: uuidv4(),
				name: 'Geok Tepe',
				img: GeokTepe,
				history:
					'Located 40 km. west of Ashgabat. The famous Battle of Geoktepe took place on the territory of the fortress. The siege of the fortress passed under the command of the Russian general Mikhail DmitrievichSkobelev. The Turkmens were led by Nurberdi Khan and his son Magtymguly Khan. Today, on the territory of the fortress, one of the most beautiful mosques and an open museum dedicated to the bloody battle of Geok-Tepehave been built. At the entrance to the city, a few kilometers away, rise slender 60-meter minarets and the turquoise dome of the Geok-Tepe Mosque, 40 meters high.The Geok-Tepe fortress was built by the French company Bouygues. The Geok-Tepe fortress is a significant spectacle that played a corresponding role in the history of Turkmenistan. It became the last bastion on the path of Tsarist Russia in the conquest of Central Asia.',
			},
			{
				id: uuidv4(),
				name: 'Historical monument Abiward',
				img: HistoricalMonumentAbiward,
				history:
					'The ruins of Abiverd are located halfway between Ashgabat and Mary. In ancient times, Abiverd (it went down in history under different names - Baverd, Abaverd, Paart, Pavart, Peshtak) was one of the major centers of Northern Khorasan, repeatedly mentioned in written sources as “... a city with fertile land and rich harvests, famous for its lush bazaar and mosque." At that time, Abiverd was an impregnable fortress, saving townspeople from the attacks of nomads. The fortress had a single gate from the southwest. Inside, in the center, there was a mosque building, erected at the beginning of the 15th century, and a square was located not far from it. Starting from the reign of Caliph Osman in 652.Abiverd becomes a “bone of discord” between various Arab caliphs. During the reign of the Abbasids, Abiverd was subordinate to Khorasan. At one time, Abiverdwas ruled by such high-profile dynasties as the Tahirids, Saffarids, and Samanids. In the 12th centuryAbiverd fell under the invasion of the Mongols. The eldest son of Genghis Khan, Tulikhan, literally razed the flourishing city, surrounded by powerful fortress walls, to the ground.',
			},
			{
				id: uuidv4(),
				name: 'Nisa',
				img: Nisa,
				history:
					'Nisa is the capital of the once powerful Parthian kingdom; its ruins stretch 18 km west of Ashgabat. The ruined settlement is divided into two parts - the fortresses of Old Nisa and New Nisa. In the 3rd century BC. New Nisa was its capital, and Old Nisa was the royal residence. During the heyday of the Parthian Empire, old Nisawas calledMithridatkert, named after King Mithridates I, by whose order it was built. The city had a large number of temple and palace buildings, there were also treasuries, wine storages, numerous houses and warehouses.The fortress walls, up to 9 meters thick, were fortified with 43 high towers. Subsequently, the rulers of Parthia moved the capital to Asia Minor, but a special relationship with Old Nysa was preserved: here were the graves of members of the ruling Arsacid dynasty; on major holidays, kings came to Nysa and made sacrifices. The fortress at Nisa was declared a World Heritage Site by UNESCO in 2007.',
			},
			{
				id: uuidv4(),
				name: 'Abu Said Meikhene Mausoleum',
				img: AbuSaidMeikheneMausoleum,
				history:
					'Meana-baba erected over the ashes of the famous Muslim religious figure of the Middle Ages, Sheikh AbulsagytAbulhaira, who lived in the 10th - 11th centuries.The mausoleum is located approximately 40 km southeast of the village of Dushak, Ahal region of Turkmenistan and 200 km southeast of Ashgabat. The mausoleum was built in the 11th century, and in the 14th century major reconstruction work was carried out on it.',
			},
			{
				id: uuidv4(),
				name: 'Seyit Jemaletdin Mosque',
				img: SeyitJemaletdinMosque,
				history:
					'The SeyitDzhemal ad-Din Mosque is the ruins of a grandiose mosque in Turkmenistan, in the foothills of the Kopet Dag, on the territory of the medieval settlement of Anau, east of the modern city of Anau, the administrative center of the Ahal region, 12 kilometers east of Ashgabat. Monument of medieval architecture of Central Asia[. Built in 1446-1457 in honor of Sheikh Jalal ad-Dunya-va-d-din. The mosaic decoration of the mosque portal has no analogues in the Muslim architecture of Central Asia.On the arch of the portal were depicted two azhdarch dragons with their heads facing each other. The monument is visited by tourists interested in history and culture, and the saint’s grave near the Anau mosque is a place of pilgrimage. Destroyed by the Ashgabat earthquake in 1948.',
			},
			{
				id: uuidv4(),
				name: 'Altyn tepe',
				img: AltynTepe,
				history:
					"Altyn-Depe is a Bronze Age settlement (2300-1900 BC), discovered in the south of Turkmenistan. The name translated from Turkmen means “golden hill”. The city arose from the local agricultural community. It was surrounded by a fortress wall made of raw brick. In the center of the settlement there was a Sumerian-looking ziggurat temple with an image of a bull's head. Artifacts (ivory items, seals, earthenware beads) indicate close ties between the settlers and the carriers of the Harappancivilization.Clay figurines indicate the existence of wheeled transport. During the excavations of Altyn-Depe, signs were discovered that resembled Proto-Elamite and Proto-Sumerian pictography, as well as Harappan writing. The culture of the settlement declined without traces of external influence. In the 3rd millennium BC. e. in two centers of early urban civilization in the south of Central Asia - Altyn-Depe and Namazga-Tepe - lived from 5,000 to 10,000 people",
			},
			{
				id: uuidv4(),
				name: 'Darvaza Gas Crater',
				img: DarvazaGasCrater,
				history:
					'The Darwaza Gas Crater, known as the "Gate of Hell", is a man-made geological wonder in the heart of the Kyzylkum Desert, and has been burning for more than 50 years. Tourists can see this mesmerizing spectacle in the evening and at night, and even stay in a nearby yurt camp for a complete immersion in the atmosphere of the mysterious desert. This flaming crater is the most unusual creation of human intervention in the forces of nature.',
			},
			{
				id: uuidv4(),
				name: 'Darvaza Water Crater',
				img: DarvazaWaterCrater,
				history:
					"The water crater of Darvaza is located 24 km south of the main gas crater. Just like the mud crater, the water crater is located close to the road - only 150 meters. It has a diameter of 50 meters and sheer walls. At around 15 meters below ground level there is a lake with water of a rich turquoise color. But no one knows how deep it is. You won't be able to swim there, not only because it will be difficult to get out, but also because of the natural gas escaping. This is a beautiful crater, but the impression is spoiled by garbage stains from plastic bottles.",
			},
		],
	},
	{
		id: uuidv4(),
		cityName: 'Mary',
		cityImg: Ashgabat,
		cityHistory:
			'Mary velayat - is an administrative unit in the southeast of Turkmenistan. The administrative center of the velayat is the city of Mary',
		places: [
			{
				id: uuidv4(),
				name: 'Merv',
				img: Merv,
				history:
					'The most majestic architectural monument of Merv is the mausoleum of Sultan Sanjar called “Dar-al-Akhyre” (“The Other World”). With its entire appearance it reflects the highest achievements and flourishing of the Seljuk power. The mausoleum of Sultan Sanjar is located in the center of the Sultan-Kala settlement. Nearby there are large monumental buildings - the palaces of the Seljuk rulers and a mosque. The thickness of the walls at the base is 5 m. The walls of the mausoleum stretch 27 meters in length. The total height of the mausoleum is 38 m.',
			},
			{
				id: uuidv4(),
				name: 'Soltan Sanjar Mausoleum',
				img: SoltanSanjar,
				history:
					'The Mausoleum of Muhammadibn Zeidis located west of Sultan-Kalaandis a remarkable monument of theearly 11th century. The name of the mausoleum is known as the Mausoleum of Muhammad Hanapya. Muhammad Khanapya was a real person and ancestor of Khoja Ahmed Yassawi',
			},
			{
				id: uuidv4(),
				name: 'Gonur Depe',
				img: GonurDepe,
				history:
					'Not so long ago, in the 90s, among the sands of the eastern Karakum, archaeological scientists discovered a huge necropolis in the Mary oasis dating back to the 2nd-1st millennium BC. There was a capital city here, now called Gonur-Depe (translated from Turkmen as Gray Hill), with its own palace and several temples that could compete with the buildings of Assyria and Babylon. Excavations of this place brought scientists and historians many amazing discoveries. The temple city kept its secrets in the desert sands for several millennia. Gonur-Depe was the largest settlement in all of Margiana.The complex was located on a low hill on the right bank of the Murghab riverbed. Excavations are still ongoing, and there are no exact figures yet, but according to preliminary data, the area of ​​the ancient settlement ranges from 30 to 50 hectares. In this supposed “capital” there was not a ruler with certain powers who ruled the entire country, but rather a spiritual leader - a high priest. People revered him not out of coercion, but out of their own free will, driven by faith.',
			},
			{
				id: uuidv4(),
				name: 'Tomb of Khoja Yusuf Hamadani',
				img: TombOfKhojaYusufHamadani,
				history:
					'The oldest city in the southeastern part of Turkmenistan - Merv, with its rich historical monuments, is known as one of the most important civilizational and cultural centers of Turkic-Islamic history. The city of Merv had many libraries, tombs and castles, and was home to many respected people, scientists and Seljuk sultans.The oldest castle in the region is Erk Kala Castle, built in the fifth century BC and spread over an area of ​​20 hectares, with 25-meter walls.Gavur Castle, which covers the periphery of Erk Castle, is protected as a historical part of the Merv lands with a length of 2 kilometers and an area of ​​400 hectares. The mosque, located in the area where the tomb of Khoja Yusuf Hamadani, the great religious figure of the East, is located, the tombs of famous religious alims, attract great attention from religious pilgrims from all over the world.',
			},
			{
				id: uuidv4(),
				name: 'Big and Small Kyz-Kala',
				img: KyzKala,
				history:
					'Big and Small Kyz-Kala are small fortresses with corrugated walls, as if folded like an accordion. They are placed on earthen ramps with a slight slope. Small windows are hidden in the folds of the walls. At the top, the walls end in jagged battlements, which have hardly survived.The rooms on the first floor were illuminated by five windows. The stairs leading down passed through an arched corridor. The layout of the second floor can only be imagined from the surviving fragments. The second floor also had no less than five rooms located around a courtyard. Small Kyz-Kala is located about a hundred meters south of Big Kyz-Kala, built according to the same plan, but much worse preserved. The corrugated façade is preserved only on the southern and eastern sides of the building.',
			},
			{
				id: uuidv4(),
				name: 'Cave town Yekedeshik',
				img: CaveTownYekedeshik,
				history:
					'The cave city of Ekedeshik, located in the Tagta-Bazar region, is a truly unique and original ancient monument, miraculously preserved on the territory of Turkmenistan. It has the status of a State Historical and Architectural Reserve. The word “ekedeshik” itself in Turkmen means “one hole”. Indeed, the huge cave complex has a single entrance, which ensured its inaccessibility. The origin of the complex is shrouded in mystery. According to one legend, the cave was dug by the hoplites of Alexander the Great, according to another, genies worked here. Be that as it may, excavations have confirmed the use of caves for housing dating back to at least the 1st century BC.The cave itself consists of two floors. On the lower floors, a peculiar natural system of watercourses collected water from underground sources, and on the upper floors there are living rooms, kitchens, halls and even some kind of altar - there are 44 rooms in total. There is an assumption that Ekedeshik served as a monastery. This is indicated by the fact that all more or less extensive cave complexes in Central Asia are used precisely as monasteries - usually Buddhist, and sometimes Christian.',
			},
		],
	},
	{
		id: uuidv4(),
		cityName: 'Lebap',
		cityImg: Lebap,
		cityHistory:
			'Lebap velayat is an administrative-territorial unit in the east of Turkmenistan. The administrative center of the velayat is the city of Turkmenabad.',
		places: [
			{
				id: uuidv4(),
				name: 'Mausoleum of Alamberdar',
				img: MausoleumOfAlamberdar,
				history:
					"Today Astana Baba, located in the city of Kerki, is a modern village located just two kilometers from the Amu Darya. At the beginning of the last century, Ersar Turkmens lived here, engaged in agriculture, silkworm breeding, and making boats for fishermen. Local residents were excellent woodcarvers, potters, gunsmiths and blacksmiths. Workshops and shops of traders were located in large numbers around the busy bazaar, mosque and the main local shrine - the Alamberdar mausoleum. The city of Kerki, the first mention of which dates back to the 7th century and is associated with the Arab invasion of Central Asia.And next to Zemm stood the town of Maymarg, the obvious predecessor of Astana Baba. The ruins of the ancient citadel, called Omar-kala in Turkmen, were examined by another famous archaeologist, Viktor Pilipko. One of the most interesting finds made as a result of the excavations by Pilipko's team was a terracotta figurine of a goddess with cult attributes.",
			},
			{
				id: uuidv4(),
				name: 'Astana-Baba Mausoleum',
				img: AstanaBaba,
				history:
					'Мавзолей Астана-баба, находится в нескольких километрах к западу от города Керки. Он объявлен историческим и культурным достоянием республики. Происхождение названия памятника точно неизвестно, как неизвестно и то, кем был Астана-баба. Возможно, оно происходит от арабских слов «астана» - «порог» и «баба» - «отец, святой человек». В Туркменистане используется и другое название – мавзолей Зейда Али и Зубейды Али. Памятник принято относить примерно к XI-XII векам.Внутри мавзолея находятся пять гробниц, появившихся в разные годы. Одни из них связана с историей дочери правителя БалхаЗейда Али – Зубейды. Она скончалась вскоре после свадьбы и отец решил увековечить ее память, построив мавзолей. Однако три попытки строительства не увенчались успехом, здание рушилось. Однажды к отцу во сне явился старец, который посоветовал строить мавзолей с использованием воды и глины из Мекки. Он послушался, к местной глине примешали глину, привезенную из святыни всех мусульман, а в колодец подлили воды из Мекки. Это помогло и мавзолей стоит по сей день.',
			},
			{
				id: uuidv4(),
				name: '«Кыркгыз» — место исполнения желаний',
				img: Kyrkgyz,
				history:
					'Один из уникальных природных памятников Койтендага – знаменитый грот «Кыркгыз» («Сорок девушек»). Он расположен по пути к посёлку Ходжапиль. Здесь всегда много паломников и туристов. Десятки тысяч длинных лент украшают это священное место. По рассказам старцев, каждый, кто побывает в этом месте, может загадать желание. Для этого нужно обмакнуть лоскуток в глину и подкинуть к каменному своду. Если лента «приклеится» к своду горы, заветное желание непременно исполнится. По легенде из далёкого прошлого, когда-то в плодородной речной долине было селение, и трудолюбивые землепашцы не знали бед и печалей. Но пришли времена невзгод, враг вторгся в эти края. Спасти селение не удалось. Но и поработить дух сельчан никто не смог. Девушек, живших в этом селении, землепашцы отвели по горным тропам в ущелье. Но враги узнали их тайну и бросились на поиски юных красавиц. Скрываясь от врагов, каждую ночь девушки просили помощи у Неба. Небеса услышали их просьбу и, словно призрачный дым, девушки растворились в воздухе и чужеземцы никого не нашли. Лишь слегка заметные очертания горных скал, в чём-то напоминавшие силуэты юных красавиц, да ещё каменные чаши проступили на горных плитах, а родники наполнились кристально чистой водой. Это были слёзы растворившихся в дыме красавиц.',
			},
			{
				id: uuidv4(),
				name: 'Водопад Умбар-дере в Койтендаге',
				img: UmbarWaterfall,
				history:
					'Водопад Умбар высотой в 27 метров, один из самых высоких в Туркменистане. Раскатистый гул падающей воды разносится далеко по ущелью. Хрустальная мантия горного водопада не похожа ни на один другой водный каскад страны. Несмотря на трудности пути, сюда съезжаются желающие увидеть достопримечательность необычайной красоты. Названием ущелье и водопад обязаны юноше по имени Умбар, которого отвесные стены укрыли от преследовавших врагов. Как гласит легенда, юноша был искусным воином и проявлял особое мужество, но в одной из схваток потерял всех товарищей. Пытаясь скрыться от преследователей, Умбар вышел на край глубокого ущелья и стал просить защиты у родных гор. Койтендаг, оценив смелость юноши, приблизил к нему противоположный край пропасти. Умбар, перепрыгнул бурлящий поток на высоте десятков метров над землёй. Повторить его поступок враги не осмелились, а ущелье так и осталось узким каньоном, рассекающим скалу.',
			},
			{
				id: uuidv4(),
				name: 'Пещера Кап-Кутан',
				img: KapKutan,
				history:
					'Пещера Кап-Кутан располагается на юго-востоке Туркменистана, на склоне хребта Кугитангтау (юго-западный отрог Гиссарского хребта). Хребет вытянут с юга на север, постепенно повышаясь с 1000 до 3000 м; он представляет собой куэсту с пологим западным и крутым восточным склонами, сложенную верхнеюрскими известняками кугитангской свиты мощностью до 500 м. Стратиграфически выше известняков залегают гипсы и ангидриты гаурдакской свиты, которые сохранились фрагментарно в виде останков только у подножья южной части хребта.',
			},
			{
				id: uuidv4(),
				name: 'Dinosaur Plateau',
				img: DinosaurPlateau,
				history:
					'Высоко в горах Койтендага расположено плато Динозавров, на котором можно найти множество огромных, леденящих душу, застывших навечно отпечатков этих огромных животных. Уверенность в том, что это не народный вымысел и не очередная сказка, дают заключения палеонтологов, нашедших при раскопках в прошлом веке останки этих существ на туркменской земле. У многих вызывает сомнение тот факт, что по истечении сотен миллионов лет следы древних ящеров не пропали, а продолжают четко вырисовываться на земле, удивляя своими размерами и глубиной. Объяснения ученых базируются на том, что ранее плато представляло собой дно водоема, и служило водопоем для животных. Поэтому и сохранились такие глубокие отпечатки. В настоящее время горное плато стало местом паломничества туристов из разных стран мира.',
			},
			{
				id: uuidv4(),
				name: 'Озеро Кайнар баба',
				img: KaynarBaba,
				history:
					'Озеро Кайнар баба - известное место в предгорьях Хребта Кугитангтау, находящегося на юго-востоке Туркменистана в поселке Гарлык. Здесь находится сероводородный источник, а также небольшое озеро. Озеро Кайнар баба – настоящее место паломничества. Неподалёку оказываются святые мавзолеи, и путники сначала поклоняются святым, происходят омовения в озере. Оно сильно минерализовано, и издавна названо в народе «кипящий родник». Озеро в диаметре всего двадцать пять метров, вода в нем такая чистая, кажется будто дно озера усыпано жемчужинами.Озеро Кайнар баба – средство неразгаданных тайн и настоящих чудес, снискавших ему явную популярность. Температура воды в роднике, питающем озеро, сохраняется постоянной на отметке 22 С. Недалеко от источника находится культовое захоронение старца Кайнара баба. Людская молва бережно хранит память о его добрых деяниях. Говорят, Кайнар баба в совершенстве владел искусством исцелять недуги, и у всех вернулось здоровье и радость жизни.',
			},
		],
	},
	{
		id: uuidv4(),
		cityName: 'Dashohuz',
		cityImg: Dashoguz,
		cityHistory:
			'Dashoguzvelayat- is an administrative-territorial unit in the north of Turkmenistan, one of the five velayats of the country. It borders in the northwest, north and northeast with Karakalpakstan and the Khorezm region of Uzbekistan, in the south with Ahalvelayat, in the southeast with Lebapvelayat and in the southwest with Balkan velayat.',
		places: [
			{
				id: uuidv4(),
				name: 'Oasis Damla',
				img: OasisDampla,
				history:
					"Damla Oasis is one of the most remote oases of the Yomud and Teke tribes in the heart of the Karakum Desert. Away from the main road, this breathtaking place is characterized by flat-roofed villages and yurts that can be found in almost every home. You can witness the simple and beautiful traditions of nomads, transporting a rare visitor to the past. To get to a small settlement, you need to cross to the Northern Karakum Desert and cross the Uzboy - the former bed of the Amu Darya River. The challenging route through dunes and salt marshes tests even the most experienced driver, who makes a refreshing stop at the oasis of Bekouri halfway. This venture gives the Silk Road explorer an authentic experience of what travel and life in the desert have always meant to its nomadic inhabitants. Damla is approximately 4 hours' drive from the main Ashgabat-Dashoguz highway and can be visited on a two-day trek from Ashgabat with an overnight stay in tents or with nomadic families",
			},
		],
	},
	{
		id: uuidv4(),
		cityName: 'Balkan',
		cityImg: Balkan,
		cityHistory:
			'Balkan velayat- is an administrative unit in the west of Turkmenistan. The administrative center is the city of Balkanabat. It borders in the north-east with the Republic of Karakalpakstan as part of Uzbekistan, in the north with the Mangystau region of Kazakhstan, in the east with Ahal and Dashoguzvelayats, in the south with Iran.',
		places: [
			{
				id: uuidv4(),
				name: 'Yangykala Canyon',
				img: YangykalaCanyon,
				history:
					'Yangi-Kala Canyon is one of the most picturesque places in Turkmenistan. Translated from the Turkmen language, its name means “Fire Fortresses”. The unique attraction is located 165 km north of Balkanabat and 160 km east of Turkmenbashi and is popular with both local residents and tourists. According to scientists, the bottom of the canyon was once flooded by Kara-Bogaz-Gol in ancient times. The color of the rocks in the canyon is predominantly red, which is why locals call it “Gyzyldag” (Red Mountains). The canyon cliffs reach a height of 60 m to 100 m.',
			},
			{
				id: uuidv4(),
				name: 'Dehistan',
				img: Dehistan,
				history:
					'Dehistan - on the flat, waterless clay plain of the Balkan velayat, rise the mysterious and mystical ruins of the ancient city of Dehistan. It was a prosperous medieval city on the caravan route between Khorezm and Persian Giokani. This city arose at the turn of the 8th-9th centuries. The area of ​​the city was about 200 hectares, and it was protected by a double ring of walls.Nowadays, the famous Shir-Kabir mausoleum, two minarets 25 meters high, the portal of the cathedral mosque, and the remains of the mud-clay city walls remind us of the city’s former greatness. There is an archaeological reserve on the territory of Dehistan. There are unique monuments of ancient architecture, including the Mashad necropolis and the Mashad-ata mosque, which has crossed the 1000-year mark.',
			},
			{
				id: uuidv4(),
				name: 'Karakum desert',
				img: Karakum,
				history:
					'The Karakum desert is a sandy desert, one of the largest in Central Asia, one of the largest on earth. It occupies almost 3/4 of the territory of the Republic of Turkmenistan. It is located between the foothills of Kopetdag, Karabil and Vankhyz in the south, the Khorezm lowland in the north, the Amu Darya valley in the east and the bed of the Western Uzboy in the west. The length of the Karakum along the parallel is about 800 km, along the meridian - about 450 km, the total area is more than 350 thousand. sq. km. It exceeds the territory of states such as Great Britain, Italy or Norway',
			},
			{
				id: uuidv4(),
				name: 'Parau-bibi',
				img: ParauBibi,
				history:
					'The small white mosque of Parau-bibi is one of the most revered pilgrimage sites in Turkmenistan. She stands alone on one of the rocks of the Kopetdag. According to legend, Parau-bibi was a beautiful Turkmen woman who lived in one of the villages. Somehow they promised to hand it over to the advancing enemies. To escape, she ran into the mountains and prayed. Then the rock moved apart and hid Parau-Bibi forever. A mosque arose on this site.Parau-bibi was the patroness of pregnant women and children in Turkmen mythology. Before giving birth, women performed a special ceremony in her honor. Today, women from all over Turkmenistan come to her temple and pray to her for help: they ask for beauty, a good husband and many children. A crooked staircase leads to the mosque. Halfway along you can see the imprints in the rock that Parau-bibi left: from the knee, elbow, finger and forehead. Young pilgrims kiss them and pray.',
			},
			{
				id: uuidv4(),
				name: 'Mausoleum of Gozli-ata',
				img: GozliAta,
				history:
					'Gozli-ata Mausoleum is located in the Balkan region in western Turkmenistan. Located 157 kilometers from Turkmenbashi. The Mausoleum of Gozli Ata is the most remote place of pilgrimage in Turkmenistan. The mausoleum is located in a picturesque place, surrounded by pink, greenish, reddish mountains of amazing shape and beauty. On these lands, Turkmen warriors courageously defended themselves against the troops of the Khiva Khan, gradually increasing their strengthyour independence. A visit to the holy place - the Gozli-Ata cemetery and the grave of the classical ancestor Turkmen-ata - a good friend. At the mausoleum and the grave of the saint, external rites are held, legends are pronounced about the great commander, after whom this place is named. Gozli-ata, or Uzynkhasan - a mystical personality and spiritual leader of the Balkan Turkmen tribes during the Middle Ages.',
			},
		],
	},
]
