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
import ConstitutionMonument from 'assets/imgs/ashgabat/constitution-monument.jpg'
import DarvazaGasCrater from 'assets/imgs/ahal/darvaza-gas-crater.jpg'
import DarvazaWaterCrater from 'assets/imgs/ahal/darvaza-water-crater.jpg'
import Dashoguz from 'assets/imgs/dashoguz/dashoguz.jpg'
import Dehistan from 'assets/imgs/balkan/dehistan.jpg'
import DinosaurPlateau from 'assets/imgs/lebap/dinosaur-plateau.jpg'
import Ekedeshik from 'assets/imgs/carousel/ekedeshik.jpg'
import ErtugrulGaziMosque from 'assets/imgs/ashgabat/ertugrul-gazi-mosque.jpg'
import GeokTepe from 'assets/imgs/ahal/geok-tepe.jpg'
import GonurDepe from 'assets/imgs/mary/gonur-depe.jpg'
import GozliAta from 'assets/imgs/balkan/gozli-ata.jpg'
import HistoricalMonumentAbiward from 'assets/imgs/ahal/abiward.jpg'
import ilArslanMausolem from 'assets/imgs/dashoguz/il-arslan-mausoleum.jpg'
import IndependenceMonument from 'assets/imgs/ashgabat/independence-monument.jpg'
import KapKutan from 'assets/imgs/lebap/kap-kutan.jpg'
import Karakum from 'assets/imgs/balkan/karakum.jpg'
import KaynarBaba from 'assets/imgs/lebap/kaynar-baba.jpg'
import KowAta from 'assets/imgs/ahal/kow-ata.png'
import KutlugTimurMinaret from 'assets/imgs/dashoguz/kutlug-timur-minaret.jpg'
import Kyrkgyz from 'assets/imgs/lebap/kyrkgyz.jpg'
import KyzKala from 'assets/imgs/mary/kyz-kala.jpg'
import Lebap from 'assets/imgs/lebap/lebap.jpg'
import MausoleumOfAlamberdar from 'assets/imgs/lebap/alamberdar-mausoleum.jpg'
import Merv from 'assets/imgs/mary/merv.jpeg'
import MonumentOfNeutrality from 'assets/imgs/ashgabat/neutrality-monument.jpg'
import najmAlDinKubraMausoleum from 'assets/imgs/dashoguz/najm-al-din-kubra-ausoleum.jpg'
import NationalMuseumOfTurkmenistan from 'assets/imgs/ashgabat/national-museum.jpg'
import Nisa from 'assets/imgs/ahal/nisa.png'
import OasisDampla from 'assets/imgs/lebap/oasis-dampla.jpg'
import ParauBibi from 'assets/imgs/balkan/parau-bibi.jpg'
import SeyitJemaletdinMosque from 'assets/imgs/ahal/seyit-jemaletdin-mosque.jpg'
import SoltanSanjar from 'assets/imgs/mary/soltan-sanjar-mausoleum.jpg'
import SoltanTekeshMausoleum from 'assets/imgs/dashoguz/sultan-tekesh-mausoleum.jpg'
import TombOfKhojaYusufHamadani from 'assets/imgs/mary/tomb-of-khoja-yusuf-hamadani.jpg'
import turabekKhanumMausoleum from 'assets/imgs/dashoguz/turabek-khanum-mausoleum.jpg'
import CarpetMuseum from 'assets/imgs/ashgabat/carpet-museum.jpg'
import UmbarWaterfall from 'assets/imgs/lebap/umbar.jpg'
import YangykalaCanyon from 'assets/imgs/balkan/yangykala-canyon.jpg'

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
				name_ru: 'Беркарар',
				img: Berkarar,
				history:
					'The Berkarar shopping center is the largest shopping and entertainment center in Turkmenistan. The complex is located in the southern part of Ashgabat, at the intersection of 10 YilAbadanchylyk and Ataturk avenues. Built in 2014]. The total area is 17.5 hectares. Next to the shopping and entertainment center there is also an adjacent 12-story round tower of the Berkarar business center',
				history_ru:
					'ТЦ «Беркарар» — крупнейший в Туркменистане торгово-развлекательный центр. Комплекс расположен в южной части Ашхабада, на пересечении проспектов 10 йылАбаданчылык и Ататюрка. Построен в 2014 году]. Общая площадь составляет 17,5 га. Рядом с торгово-развлекательным центром разместилась и смежная с ним 12-этажная круглая башня делового центра «Беркарар».',
			},
			{
				id: uuidv4(),
				name: 'Ertugrul Gazi Mosque',
				name_ru: 'Мечеть Эртогрулгазы',
				img: ErtugrulGaziMosque,
				history:
					'Ertogrulgazy Mosque is one of the most beautiful mosques in Ashgabat, built in the Turkish style, and is the largest in the city. The mosque has four minarets. One of the first mosques built after Turkmenistan gained independence, in the early 1990s. Named after the Turkic ruler Ertogrul.',
				history_ru:
					'Мечеть Эртогрулгазы—одна из самых красивых мечетей Ашхабада, построенная в турецком стиле, является самой большой в городе. Мечеть насчитывает четыре минарета. Одна из первых мечетей, построенных после обретения независимости Туркменистана, в начале 1990-х годов. Названа в честь тюркского правителя Эртогрула.',
			},
			{
				id: uuidv4(),
				name: 'Turkmen Carpet Museum',
				name_ru: 'Музей туркменского ковра',
				img: CarpetMuseum,
				history:
					'The carpet in Turkmenistan is a state symbol. In order to preserve, revive and creatively develop the ancient traditions of Turkmen carpet weaving, in 1993, by decree of the President of Turkmenistan, the National Carpet Museum was created. It is located in the center of Ashgabat. The total area of ​​the museum is 15,000 sq.m. A third of this area – 5000 sq.m. – is allocated for exhibition halls. The exhibition consists of 8,000 exhibits, the main part of which dates back to the 17th-19th centuries. The collection is replenished annually. It presents the smallest carpet, in the form of a key holder, and the largest, with an area of ​​301 sq.m., which is included in the Guinness Book of Records.',
				history_ru:
					'Ковёр в Туркменистане является государственным символом. С целью сохранения, возрождения и творческого развития древних традиций туркменского ковроткачества, в 1993 году, по указу президента Туркменистана, был создан Национальный музей ковров. Он расположен в центре Ашхабада.Общая площадь музея насчитывает 15 000 кв.м. Под выставочные залы отведена треть этой площади – 5000 кв.м. Экспозиция состоит из 8000 экспонатов, основная часть которых датируется XVII-XIX вв. Коллекция ежегодно пополняется. В ней представлены - самый маленький ковёр, в виде ключницы и самый большой, площадью 301 кв.м., который внесён в Книгу Рекордов Гинесса.',
			},
			{
				id: uuidv4(),
				name: 'Altyn Asyr',
				name_ru: 'ТЦ «Алтын Асыр»',
				img: AltynAsyr,
				history: 'Тrade center of Turkmen textiles',
				history_ru: 'Торговый центр туркменского текстиля',
			},
			{
				id: uuidv4(),
				name: 'National Museum of Turkmenistan',
				name_ru: 'Государственный музей государственного культурного центра',
				img: NationalMuseumOfTurkmenistan,
				history:
					'The capital of Turkmenistan is famous throughout the world for its white marble architecture; many structures, including not only buildings, but also monuments or sculptures, have already become the main attractions of the city, and some have even been included as “the very best” in the Guinness Book of Records. One of these attractions in Ashgabat is the State Museum of the State Cultural Center of Turkmenistan.Previously, this museum was simply called the Main National Museum. Everything about this museum is remarkable: its location, its history, its architecture, and the exhibits stored in it. It is the first and largest of the 26 museums created after Turkmenistan gained independence. The official opening of the museum took place on November 12, 1998. The flag of Turkmenistan is installed directly in front of the building on one of the tallest flagpoles in the world. The State Museum of the State Cultural Center of Turkmenistan is equipped with the latest museum equipment, autonomous power and water supply systems, restoration rooms, laboratories, computer systems that control lighting, humidity and air temperature.',
				history_ru:
					'Столица Туркменистана славится на весь мир беломраморной архитектурой, многие сооружения, в числе которых не только здания, но и памятники или скульптуры, уже стали главными достопримечательностями города, а некоторые даже попали как «самые-самые» в Книгу рекордов Гиннеса. Одной из таких достопримечательностей Ашхабада является Государственный музей Государственного культурного центра Туркменистана. Раньше этот музей просто назывался Главным национальным музеем. В этом музее примечательно все: и его местоположение, и его история, и архитектура, и экспонаты, хранящиеся в нем.Он первый и крупнейший из 26 музеев, созданных после обретения Туркменистаном независимости. Официальное открытие музея состоялось 12 ноября 1998 года. Прямо перед зданием на одном из самых высоких флагштоков в мире установлен флаг Туркменистана. Государственный музей Государственного культурного центра Туркменистана оборудован новейшей музейной техникой, автономными системами энергопитания и водоснабжения, залами для реставрации, лабораториями, компьютерными системами, контролирующими освещение, влажность и температуру воздуха',
			},
			{
				id: uuidv4(),
				name: 'Monument of Neutrality',
				name_ru: 'Памятник нейтралитета',
				img: MonumentOfNeutrality,
				history:
					'A monument to neutrality, the three-legged arch, which became known as the "Tripod", was 75 meters (246 ft) high and was built in 1998 by order of the first president of Turkmenistan, Saparmurat Niyazov, to commemorate the country\'s official position: neutrality. Its construction cost 12 million dollars. The monument was topped by a 12-meter (39 ft) gilded statue of Niyazov, which rotated so as to always face the sun',
				history_ru:
					'Памятник нейтралитета трехногая арка, которая стала называться «Трехножка», имеет высоту 75 метров (246 футов) и была построена в 1998 году по приказу первого президента Туркменистана Сапармурата Ниязова в ознаменование официальной позиции страны: нейтралитет. Его строительство обошлось в 12 миллионов долларов. Монумент был увенчан позолоченной статуей Ниязова высотой 12 метров (39 футов), которая вращалась так, чтобы всегда смотрела на солнце',
			},
			{
				id: uuidv4(),
				name: 'Independence Monument',
				name_ru: 'Монумент Независимости',
				img: IndependenceMonument,
				history:
					"Independence Monument is a monumental complex. In its magnificence and scope, for a long time it has no analogues not only in Ashgabat, but throughout Central Asia. The monument is located in the south of Ashgabat. The grand opening took place in 2000. The monument represents the unity of the five largest Turkmen tribes embodied in five stars crowning the peak of the monument. The lower part of the monument has the shape of a hemisphere, representing a Turkmen yurt - the warmth of a home, the comfort of a hearth. In the building of the Monument of Independence of Turkmenistan houses the Museum of Independence of Turkmenistan, where historical exhibits related to the origins of the country's sovereignty are presented. Around the Monument of Independence there is a monumental ensemble consisting of 27 sculptures of national heroes. A gilded sculpture of the first President of Turkmenistan, SaparmuratTurkmenbashi, was erected at the head of the ensemble. The entire monumental complex is surrounded by a forest park area.",
				history_ru:
					'Монумент Независимости монументальный комплекс. По своему великолепию и размаху долгое время не имеющий аналогов не только в Ашхабаде, но и во всей Средней Азии. Монумент расположен на юге Ашхабада. Торжественное открытие состоялось в 2000 году. Монумент представляет собой единение пяти крупнейших туркменских племен воплощенных в пять звезд, венчающих пик монумента. Нижняя часть монумента имеет форму полусферы, представляющая собой туркменскую юрту - тепло родного дома, уют очага. В здании Монумента Независимости Туркменистана расположен Музей Независимости Туркменистана, где представлены исторические экспонаты связанные с истоками становления суверенитета страны.Вокруг монумента Независимости расположен монументальный ансамбль состоящий из 27 скульптур народных героев. Во главе ансамбля воздвигнута позолоченная скульптура первого Президента Туркменистана Сапармурата Туркменбаши. Весь монументальный комплекс взят в кольцо лесопарковой зоной. ',
			},
			{
				id: uuidv4(),
				name: 'Akhal-Teke horse',
				name_ru: 'Ахалтекинская лошадь',
				img: AkhalTeke,
				history:
					'The Akhal-Teke horse, or Akhal-Teke, is a riding horse breed, bred in the territory of modern Turkmenistan, presumably about 5,000 years ago. This is the oldest of the cultivated breeds, which influenced many breeds - Arabian, thoroughbred and others. Akhal-Teke horses are among the most expensive horses in the world. They are distinguished by their special style, beautiful mane, strength and smooth running.',
				history_ru:
					'Ахалтекинская лошадь, или ахалтекинец, — верховая порода лошадей, выведенная на территории современного Туркменистана предположительно около 5000 лет назад. Это древнейшая из культурных пород, оказавшая влияние на многие породы — арабскую, чистокровную верховую и другие. Ахалтекинские лошади входят в число самых дорогих скакунов в мире. Они отличаются особой статью, красивой гривой, силой и плавностью хода.',
			},
			{
				id: uuidv4(),
				name: 'Constitution Monument',
				name_ru: 'Монумент Конституции',
				img: ConstitutionMonument,
				history:
					'The Monument to the Constitution of Turkmenistan is a marble-clad monument dedicated to the Constitution of Turkmenistan. The monument is located in Ashgabat. The total height of the center is 185 meters, which is the second tallest building in Turkmenistan.',
				history_ru:
					'Монумент Конституции Туркменистана — облицованный мрамором памятник, посвящённый Конституции Туркменистана. Монумент расположен в Ашхабаде. Общая высота центра составляет — 185 метров, является вторым по высоте сооружением в Туркменистане.',
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
				name_ru: 'Подземное озеро KowAta',
				img: KowAta,
				history:
					'One of the most famous and visited tourist sites in Turkmenistan. The Baharden Cave is a 250-meter hall, the height of which decreases from 26 meters at the entrance to 3 meters near the lake itself, located at a depth of 55 meters. Air temperature is 20-25°C in winter and 27-32°C in summer. And the water temperature is 37 °C. The underground lake is considered healing because its water is rich in hydrogen sulfide and 26 other chemical elements. Archaeologists claim that the cave has been visited by people for more than 2,000 years. Today it is equipped with a concrete descent, an observation deck and lighting. This negatively impacted the bat colony. Of more than 400 thousand individuals, only a few tens of thousands remain.',
				history_ru:
					'Один из самых известных и посещаемых туристических объектов Туркменистана. Бахарденская пещера — это 250-метровый зал, высота которого снижается с 26 метров у входа до 3 метров возле самого озера, расположенного на глубине 55 метров. Температура воздуха — 20-25°С зимой и 27-32°С летом. А температура воды — 37 °С. Подземное озеро считается целебным, поскольку его вода богата сероводородом и еще 26 химическими элементами. Археологи утверждают, что пещера посещается людьми более 2000 лет. Сегодня она оборудована бетонным спуском, смотровой площадкой и освещением. Это негативно повлияло на колонию летучих мышей. Из более 400 тысяч особей осталось всего несколько десятков тысяч.',
			},
			{
				id: uuidv4(),
				name: 'Geok Tepe',
				name_ru: 'Крепость Геок Тепе',
				img: GeokTepe,
				history:
					'Located 40 km. west of Ashgabat. The famous Battle of Geoktepe took place on the territory of the fortress. The siege of the fortress passed under the command of the Russian general Mikhail DmitrievichSkobelev. The Turkmens were led by Nurberdi Khan and his son Magtymguly Khan. Today, on the territory of the fortress, one of the most beautiful mosques and an open museum dedicated to the bloody battle of Geok-Tepehave been built. At the entrance to the city, a few kilometers away, rise slender 60-meter minarets and the turquoise dome of the Geok-Tepe Mosque, 40 meters high.The Geok-Tepe fortress was built by the French company Bouygues. The Geok-Tepe fortress is a significant spectacle that played a corresponding role in the history of Turkmenistan. It became the last bastion on the path of Tsarist Russia in the conquest of Central Asia.',
				history_ru:
					'Расположен в 40 км. к западу от Ашгабады . На территории крепости произошла знаменитая Геоктепинскаябитва . Осада крепости прохождения под командованием русского генерала Михаила Дмитриевича Скобелева .Во главе туркменов стояли Нурберди Хан и его сын Махтумкули Хан. Сегодня на территории крепости построена одна из красивейших мечетей и открытый музей, посвященный кровопролитной битве при ГеокТепе .При подъезде к городу, за несколько километров, возвышаются стройные 60-метровые минареты и бирюзовый купол  Геоктепинской мечети высотой 40 метров. Крепость Геок-Тепе была построена французкой компанией Буиг.Крепость Геок-Тепе является знаменательным зрелищем, сыгравшим в истории Туркменистана соответствующую роль. Она стала последним бастионом на пути Царской России в завоевании Средней Азии.',
			},
			{
				id: uuidv4(),
				name: 'Historical monument Abiward',
				name_ru: 'Исторический памятник Абиверда',
				img: HistoricalMonumentAbiward,
				history:
					'The ruins of Abiverd are located halfway between Ashgabat and Mary. In ancient times, Abiverd (it went down in history under different names - Baverd, Abaverd, Paart, Pavart, Peshtak) was one of the major centers of Northern Khorasan, repeatedly mentioned in written sources as “... a city with fertile land and rich harvests, famous for its lush bazaar and mosque." At that time, Abiverd was an impregnable fortress, saving townspeople from the attacks of nomads. The fortress had a single gate from the southwest. Inside, in the center, there was a mosque building, erected at the beginning of the 15th century, and a square was located not far from it. Starting from the reign of Caliph Osman in 652.Abiverd becomes a “bone of discord” between various Arab caliphs. During the reign of the Abbasids, Abiverd was subordinate to Khorasan. At one time, Abiverdwas ruled by such high-profile dynasties as the Tahirids, Saffarids, and Samanids. In the 12th centuryAbiverd fell under the invasion of the Mongols. The eldest son of Genghis Khan, Tulikhan, literally razed the flourishing city, surrounded by powerful fortress walls, to the ground.',
				history_ru:
					'Развалины Абиверда находятся на середине пути между Ашхабадом и Мары. В древности Абиверд (в историю он вошел под разными названиями – Баверд, Абаверд, Паарт, Паварт, Пештак) был одним из крупных центров Северного Хорасана, неоднократно упоминаемый в письменных источниках как «…город с плодородной землей и богатыми урожаями, славящийся пышным базаром и мечетью». В то время Абиверд представлял собой неприступную крепость, спасающую горожан от набегов кочевников. Крепость имела единственные ворота с юго-запада. Внутри, в центре, стояло здание мечети, воздвигнутое в начале XV в., неподалеку от нее располагалась площадь.Начиная со времени правления халифа Османа в 652 г. Абиверд становится «яблоком раздора» между различными арабскими халифами. Во время правления АббасидовАбиверд находился в подчинении у Хорасана. В свое время Абивердом правили такие громкие династии как Тахириды, Саффариды, Саманиды. В XII в. Абиверд пал под нашествием монголов. Старший сын Чингизхана – Тулихан - буквально сравнял цветущий, окруженный мощными крепостными стенами, город с землей.',
			},
			{
				id: uuidv4(),
				name: 'Nisa',
				name_ru: 'Древняя Ниса',
				img: Nisa,
				history:
					'Nisa is the capital of the once powerful Parthian kingdom; its ruins stretch 18 km west of Ashgabat. The ruined settlement is divided into two parts - the fortresses of Old Nisa and New Nisa. In the 3rd century BC. New Nisa was its capital, and Old Nisa was the royal residence. During the heyday of the Parthian Empire, old Nisawas calledMithridatkert, named after King Mithridates I, by whose order it was built. The city had a large number of temple and palace buildings, there were also treasuries, wine storages, numerous houses and warehouses.The fortress walls, up to 9 meters thick, were fortified with 43 high towers. Subsequently, the rulers of Parthia moved the capital to Asia Minor, but a special relationship with Old Nysa was preserved: here were the graves of members of the ruling Arsacid dynasty; on major holidays, kings came to Nysa and made sacrifices. The fortress at Nisa was declared a World Heritage Site by UNESCO in 2007.',
				history_ru:
					'Ниса – столица некогда могущественного Парфянского царства, это ее руины простираются в 18 км западнее Ашхабада. Разрушенное городище разделено на две части – крепости Старая Ниса и Новая Ниса. В 3 веке до н.э. Новая Ниса являлась его столицей, а Старая – была царской резиденцией. Во времена расцвета Парфянской империи старая Ниса называлась Митридаткертом, по имени царя Митридата I, по приказу которого она и была построена. В городе располагалось большое количество храмовых и дворцовых построек, здесь же были сокровищницы, винохранилища, многочисленные дома и склады. Крепостные стены, толщиной до 9 метров, были укреплены 43 высокими башнями.Впоследствии правители Парфии перенесли столицу в Малую Азию, но особое отношение к Старой Нисе сохранилось: здесь находились могилы членов правящей династии Арсакидов, в большие праздники цари приезжали в Нису и устраивали жертвоприношения. Крепость в Нисе была объявлена ЮНЕСКО объектом Всемирного наследия в 2007 году.',
			},
			{
				id: uuidv4(),
				name: 'Abu Said Meikhene Mausoleum',
				name_ru: 'Мавзолей Абу-Сайда Меана баба',
				img: AbuSaidMeikheneMausoleum,
				history:
					'Meana-baba erected over the ashes of the famous Muslim religious figure of the Middle Ages, Sheikh AbulsagytAbulhaira, who lived in the 10th - 11th centuries.The mausoleum is located approximately 40 km southeast of the village of Dushak, Ahal region of Turkmenistan and 200 km southeast of Ashgabat. The mausoleum was built in the 11th century, and in the 14th century major reconstruction work was carried out on it.',
				history_ru:
					'Меана-баба воздвигнутый над прахом известного мусульманского религиозного деятеля средневековья шейха АбулсагытаАбулхайры, жившего в X - XI в.в.Мавзолей расположен примерно в 40 км юго-восточнее поселка ДушакАхалскоговелаята Туркменистана и в 200 км юго-восточнее Ашхабата. Мавзолей был построен в XI веке, а в XIV веке на нем были выполнены работы по капитальной реконструкции.',
			},
			{
				id: uuidv4(),
				name: 'Seyit Jemaletdin Mosque',
				name_ru: 'Мечеть СейитДжемал ад-Дина',
				img: SeyitJemaletdinMosque,
				history:
					'The SeyitDzhemal ad-Din Mosque is the ruins of a grandiose mosque in Turkmenistan, in the foothills of the Kopet Dag, on the territory of the medieval settlement of Anau, east of the modern city of Anau, the administrative center of the Ahal region, 12 kilometers east of Ashgabat. Monument of medieval architecture of Central Asia[. Built in 1446-1457 in honor of Sheikh Jalal ad-Dunya-va-d-din. The mosaic decoration of the mosque portal has no analogues in the Muslim architecture of Central Asia.On the arch of the portal were depicted two azhdarch dragons with their heads facing each other. The monument is visited by tourists interested in history and culture, and the saint’s grave near the Anau mosque is a place of pilgrimage. Destroyed by the Ashgabat earthquake in 1948.',
				history_ru:
					'Мечеть СейитДжемал ад-Дина — развалины грандиозной мечети в Туркменистане, в предгорьях Копетдага, на территории средневекового городища Анау, к востоку от современного города Аннау, административного центра Ахалскоговелаята, в 12 километрах к востоку от Ашхабада. Памятник средневекового зодчества Средней Азии[. Построена в 1446—1457 годах в честь шейха Джелал-ад-дунья-ва-д-дина. Мозаичная декорация портала мечети не имеет аналогий в мусульманской архитектуре Средней Азии. На арке портала были изображены два обращённых головами друг к другу дракона-аждарха. Памятник посещают туристы, увлекающиеся историей и культурой, а могила святого возле мечети Анау является местом паломничества. Разрушена Ашхабадским землетрясением в 1948 году.',
			},
			{
				id: uuidv4(),
				name: 'Altyn tepe',
				name_ru: 'Алтын-Депе',
				img: AltynTepe,
				history:
					"Altyn-Depe is a Bronze Age settlement (2300-1900 BC), discovered in the south of Turkmenistan. The name translated from Turkmen means “golden hill”. The city arose from the local agricultural community. It was surrounded by a fortress wall made of raw brick. In the center of the settlement there was a Sumerian-looking ziggurat temple with an image of a bull's head. Artifacts (ivory items, seals, earthenware beads) indicate close ties between the settlers and the carriers of the Harappancivilization.Clay figurines indicate the existence of wheeled transport. During the excavations of Altyn-Depe, signs were discovered that resembled Proto-Elamite and Proto-Sumerian pictography, as well as Harappan writing. The culture of the settlement declined without traces of external influence. In the 3rd millennium BC. e. in two centers of early urban civilization in the south of Central Asia - Altyn-Depe and Namazga-Tepe - lived from 5,000 to 10,000 people",
				history_ru:
					'Алтын-Депе — городище бронзового века (2300—1900 годы до н. э.), обнаруженное на юге Туркменистана. Название в переводе с туркменского языка означает «золотой холм». Город возник на основе местной земледельческой общины. Он был обнесён крепостной стеной из кирпича-сырца. В центре поселения находился храм-зиккурат шумерского вида с изображением головы быка. Артефакты (изделия из слоновой кости, печати, фаянсовые бусы) свидетельствуют о тесных связях поселенцев с носителями Хараппской цивилизации. Глиняные статуэтки свидетельствуют о существовании колёсного транспорта. При раскопках Алтын-Депе обнаружены знаки, напоминающие протоэламскую и протошумерскую пиктографию, а также харапскую письменность. Культура поселения приходила в упадок без следов внешнего воздействия.В III тысячелетии до н. э. в двух центрах раннегородской цивилизации на юге Средней Азии — Алтын-Депе и Намазга-Тепе — проживало от 5000 до 10 000 человек.',
			},
			{
				id: uuidv4(),
				name: 'Darvaza Gas Crater',
				name_ru: 'Газовый кратер Дарваза (врата ада)',
				img: DarvazaGasCrater,
				history:
					'The Darwaza Gas Crater, known as the "Gate of Hell", is a man-made geological wonder in the heart of the Kyzylkum Desert, and has been burning for more than 50 years. Tourists can see this mesmerizing spectacle in the evening and at night, and even stay in a nearby yurt camp for a complete immersion in the atmosphere of the mysterious desert. This flaming crater is the most unusual creation of human intervention in the forces of nature.',
				history_ru:
					'Газовый кратер Дарваза, известный как «Врата Ада», является рукотворным геологическим чудом в сердце пустыни Кызылкум, и горит уже более 50 лет. Туристы могут увидеть это завораживающее зрелище вечером и ночью, и даже остановиться в близлежащем юртовом лагере для полного погружения в атмосферу таинственной пустыни. Этот пылающий кратер – самое необычное творение вмешательства человека в силы природы.',
			},
			{
				id: uuidv4(),
				name: 'Darvaza Water Crater',
				name_ru: 'Грязевой и водный кратер',
				img: DarvazaWaterCrater,
				history:
					"The water crater of Darvaza is located 24 km south of the main gas crater. Just like the mud crater, the water crater is located close to the road - only 150 meters. It has a diameter of 50 meters and sheer walls. At around 15 meters below ground level there is a lake with water of a rich turquoise color. But no one knows how deep it is. You won't be able to swim there, not only because it will be difficult to get out, but also because of the natural gas escaping. This is a beautiful crater, but the impression is spoiled by garbage stains from plastic bottles.",
				history_ru:
					'Водный кратер Дарвазы расположен в 24 км на юг главного газового кратера. Так же, как и грязевой, водный кратер расположен близко к дороге - всего 150 метров. Он имеет диаметр 50 метров и отвесные стены. На отметке 15 метров ниже уровня земли расположено озерцо с водой насыщенного бирюзового цвета. Но насколько там глубоко – никто не знает. Искупаться там не получится, не только потому что будет сложно выбраться, но и из-за выходящего природного газа. Это красивый кратер, но впечатление портят мусорные пятна из пластиковых бутылок',
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
			// {
			// 	id: uuidv4(),
			// 	name: 'Merv',
			// 	name_ru: ''
			// 	img: Merv,
			// 	history:
			// 		'The most majestic architectural monument of Merv is the mausoleum of Sultan Sanjar called “Dar-al-Akhyre” (“The Other World”). With its entire appearance it reflects the highest achievements and flourishing of the Seljuk power. The mausoleum of Sultan Sanjar is located in the center of the Sultan-Kala settlement. Nearby there are large monumental buildings - the palaces of the Seljuk rulers and a mosque. The thickness of the walls at the base is 5 m. The walls of the mausoleum stretch 27 meters in length. The total height of the mausoleum is 38 m.',
			// },
			{
				id: uuidv4(),
				name: 'Soltan Sanjar Mausoleum',
				name_ru: 'Мавзолей Султана Санжара, Мерв',
				img: SoltanSanjar,
				history:
					'The Mausoleum of Muhammadibn Zeidis located west of Sultan-Kalaandis a remarkable monument of theearly 11th century. The name of the mausoleum is known as the Mausoleum of Muhammad Hanapya. Muhammad Khanapya was a real person and ancestor of Khoja Ahmed Yassawi',
				history_ru:
					'Самым величественным архитектурным памятником Мерва является мавзолей султана Санджара под названием «Дар-ал-Ахыре» («Потусторонний мир»). Всем своим видом он отражает наивысшие достижения и расцвет державы сельджукидов. Мавзолей султана Санджара расположен в центре городища Султан-Кала. Поблизости находятся крупные монументальные здания — дворцы сельджукидских правителей и мечеть. Стены в толщину у основания - 5 м . В длину стены мавзолея протянулись на 27 метров . Общая высота мавзолея составляет 38 м.',
			},
			{
				id: uuidv4(),
				name: 'Gonur Depe',
				name_ru: 'Исторический город Гонур-Депе',
				img: GonurDepe,
				history:
					'Not so long ago, in the 90s, among the sands of the eastern Karakum, archaeological scientists discovered a huge necropolis in the Mary oasis dating back to the 2nd-1st millennium BC. There was a capital city here, now called Gonur-Depe (translated from Turkmen as Gray Hill), with its own palace and several temples that could compete with the buildings of Assyria and Babylon. Excavations of this place brought scientists and historians many amazing discoveries. The temple city kept its secrets in the desert sands for several millennia. Gonur-Depe was the largest settlement in all of Margiana.The complex was located on a low hill on the right bank of the Murghab riverbed. Excavations are still ongoing, and there are no exact figures yet, but according to preliminary data, the area of ​​the ancient settlement ranges from 30 to 50 hectares. In this supposed “capital” there was not a ruler with certain powers who ruled the entire country, but rather a spiritual leader - a high priest. People revered him not out of coercion, but out of their own free will, driven by faith.',
				history_ru:
					'Не так давно, в 90-х годах, среди песков восточного Каракума ученые-археологи вскрыли в Марыйском оазисе огромный некрополь, относящийся к II-I тыс. до н.э. Здесь был столичный город, ныне именуемый Гонур-Депе (в переводе с туркменского — Серый холм), со своим дворцом и несколькими храмами, способными конкурировать с сооружениями Ассирии и Вавилона. Раскопки этого места принесли ученым и историкам немало удивительных открытий. Храмовый город хранил свои тайны в песках пустыни несколько тысячелетий. Гонур-Депе был самым крупным поселением во всей Маргиане. Располагался комплекс на невысоком холме правого берега русла Мургаба. Раскопки ведутся до сих пор, и точных цифр пока нет, но по предварительным данным площадь древнего городища колеблется от 30 до 50 гектаров. В этой предполагаемой «столице» находился скорее не правитель с определенными властными полномочиями, управлявший всей страной, а духовный лидер - верховный жрец. Люди почитали его не по принуждению, а по доброй воле, движимые верой.',
			},
			{
				id: uuidv4(),
				name: 'Tomb of Khoja Yusuf Hamadani',
				name_ru: 'Могила Ходжи Юсуфа Хамадани',
				img: TombOfKhojaYusufHamadani,
				history:
					'The oldest city in the southeastern part of Turkmenistan - Merv, with its rich historical monuments, is known as one of the most important civilizational and cultural centers of Turkic-Islamic history. The city of Merv had many libraries, tombs and castles, and was home to many respected people, scientists and Seljuk sultans.The oldest castle in the region is Erk Kala Castle, built in the fifth century BC and spread over an area of ​​20 hectares, with 25-meter walls.Gavur Castle, which covers the periphery of Erk Castle, is protected as a historical part of the Merv lands with a length of 2 kilometers and an area of ​​400 hectares. The mosque, located in the area where the tomb of Khoja Yusuf Hamadani, the great religious figure of the East, is located, the tombs of famous religious alims, attract great attention from religious pilgrims from all over the world.',
				history_ru:
					'Древнейший город  в юго-восточной части Туркменистана - Мерв,  с его богатыми историческими памятниками, известен как один из важнейших цивилизационных и культурных центров тюрко-исламской истории. В городе Мерв было много библиотек, гробниц и замков, проживали многие уважаемые люди, ученые и сельджукские султаны. Самый старый замок региона - замок Эрк Кала, построенный в пятом веке до нашей эры и раскинувшийся на площади 20 гектаров, имеет 25-метровые стены. Замок Гавур, который охватывает периферию замка Эрк, охраняется как историческая часть Мервских земель протяженностью 2 километра и площадью 400 га.Мечеть, расположенная в районе, где находится могила Ходжи Юсуфа Хамадани, великого религиозного деятеля Востока, усыпальницы известных религиозных алимов, привлекают большое внимание религиозных паломников со всего мира.',
			},
			{
				id: uuidv4(),
				name: 'Big and Small Kyz-Kala',
				name_ru: 'Большая и Малая Кыз-Кала',
				img: KyzKala,
				history:
					'Big and Small Kyz-Kala are small fortresses with corrugated walls, as if folded like an accordion. They are placed on earthen ramps with a slight slope. Small windows are hidden in the folds of the walls. At the top, the walls end in jagged battlements, which have hardly survived.The rooms on the first floor were illuminated by five windows. The stairs leading down passed through an arched corridor. The layout of the second floor can only be imagined from the surviving fragments. The second floor also had no less than five rooms located around a courtyard. Small Kyz-Kala is located about a hundred meters south of Big Kyz-Kala, built according to the same plan, but much worse preserved. The corrugated façade is preserved only on the southern and eastern sides of the building.',
				history_ru:
					'Большая и Малая Кыз-Кала - небольшие крепости с гофрированными, словно сложенными в складку, наподобие гармошки, стенами. Они поставлены на земляные пандусы с легким наклоном. Небольшие окна скрыты в складках стен. Наверху стены оканчиваются зубчатыми бойницами, которые почти не сохранились. Комнаты на первом этаже освещались пятью окнами. Ведущая вниз лестница проходила через аркообразный коридор. Планировку второго этажа можно лишь вообразить по сохранившимся фрагментам. Второй этаж имел также не менее пяти комнат, расположенных вокруг внутреннего двора. Малая Кыз-Кала расположена примерно в ста метрах южнее Большой Кыз-Калы, построена по тому же плану, но сохранилась гораздо хуже. Гофрированный фасад сохранился только на южной и восточной сторонах строения.',
			},
			{
				id: uuidv4(),
				name: 'Cave town Yekedeshik',
				name_ru: 'Пешерный город Екедешик',
				img: CaveTownYekedeshik,
				history:
					'The cave city of Ekedeshik, located in the Tagta-Bazar region, is a truly unique and original ancient monument, miraculously preserved on the territory of Turkmenistan. It has the status of a State Historical and Architectural Reserve. The word “ekedeshik” itself in Turkmen means “one hole”. Indeed, the huge cave complex has a single entrance, which ensured its inaccessibility. The origin of the complex is shrouded in mystery. According to one legend, the cave was dug by the hoplites of Alexander the Great, according to another, genies worked here. Be that as it may, excavations have confirmed the use of caves for housing dating back to at least the 1st century BC.The cave itself consists of two floors. On the lower floors, a peculiar natural system of watercourses collected water from underground sources, and on the upper floors there are living rooms, kitchens, halls and even some kind of altar - there are 44 rooms in total. There is an assumption that Ekedeshik served as a monastery. This is indicated by the fact that all more or less extensive cave complexes in Central Asia are used precisely as monasteries - usually Buddhist, and sometimes Christian.',
				history_ru:
					'Пещерный город Екедешик, расположенный в районе Тагта-Базар, поистине уникальный и самобытный памятник старины, чудесным образом сохранившийся на территории Туркменистана. Он имеет статус Государственного исторического и архитектурного заповедника. Само слово "екедешик" по-туркменски означает "одно отверстие". И действительно, огромный пещерный комплекс имеет один-единственный вход, что и обеспечивало ему неприступность. Происхождение комплекса овеяно тайной. По одной из легенд, пещера вырыта гоплитами Александра Македонского, по другой - здесь потрудились джины. Как бы то ни было, раскопки подтвердили использование пещер под жилье начиная, как минимум, с 1 века до н.э. Сама пещера состоит из двух этажей. На нижних этажах своеобразная естественная система водотоков собирала воду из подземных источников, а на верхних этажах расположены жилые комнаты, кухни, залы и даже некое подобие алтаря - всего здесь 44 помещения. Есть предположение, что Екедешик служил монастырем. На это указывает тот факт, что все более или менее обширные пещерные комплексы используются в Средней Азии именно как монастыри - обычно буддистские, а иногда и христианские. ',
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
				name_ru: 'Мавзолей Аламбердара',
				img: MausoleumOfAlamberdar,
				history:
					"Today Astana Baba, located in the city of Kerki, is a modern village located just two kilometers from the Amu Darya. At the beginning of the last century, Ersar Turkmens lived here, engaged in agriculture, silkworm breeding, and making boats for fishermen. Local residents were excellent woodcarvers, potters, gunsmiths and blacksmiths. Workshops and shops of traders were located in large numbers around the busy bazaar, mosque and the main local shrine - the Alamberdar mausoleum. The city of Kerki, the first mention of which dates back to the 7th century and is associated with the Arab invasion of Central Asia.And next to Zemm stood the town of Maymarg, the obvious predecessor of Astana Baba. The ruins of the ancient citadel, called Omar-kala in Turkmen, were examined by another famous archaeologist, Viktor Pilipko. One of the most interesting finds made as a result of the excavations by Pilipko's team was a terracotta figurine of a goddess with cult attributes.",
				history_ru:
					'Сегодня Астана–баба, расположенный в городе Керки– современный посёлок, расположенный всего в двух километрах от Амударьи. В начале прошлого века здесь жили туркмены–эрсары, занимавшиеся земледелием, шелководством, изготовлением лодок для рыбаков. Местные жители были прекрасными резчиками по дереву, гончарами, оружейниками и кузнецами. Мастерские и лавки торговцев в большом количестве располагались вокруг оживленного базара, мечети и главной местной святыни — мавзолея Аламбердара. Город Керки первые упоминания о котором относятся к VII веку и связаны с вторжением арабов в Среднюю Азию. А рядом с Земмом стоял городок Маймарг, очевидный предшественник Астана-баба.Руины древней цитадели, именуемой по-туркменски Омар-кала, обследовал другой известный археолог, Виктор Пилипко. Одной из самых интересных находок, сделанных в результате раскопок команды Пилипко, стала терракотовая статуэтка богини с культовыми атрибутами.',
			},
			{
				id: uuidv4(),
				name: 'Astana-Baba Mausoleum',
				name_ru: 'Мавзолей Астана-баба',
				img: AstanaBaba,
				history:
					'The Astana Baba mausoleum is located a few kilometers west of the city of Kerki. It has been declared a historical and cultural heritage of the republic. The origin of the name of the monument is unknown, just as it is unknown who Astana Baba was. Perhaps it comes from the Arabic words “astana” - “threshold” and “baba” - “father, holy man”. In Turkmenistan, another name is used - the mausoleum of Zeyd Ali and Zubeyda Ali. The monument is usually dated back to approximately the 11th-12th centuries. Inside the mausoleum there are five tombs that appeared in different years. One of them is connected with the story of the daughter of the ruler of BalkhaZeid Ali, Zubeida. She died shortly after the wedding and her father decided to perpetuate her memory by building a mausoleum. However, three attempts at construction were unsuccessful and the building collapsed. One day an old man appeared to his father in a dream and advised him to build a mausoleum using water and clay from Mecca. He obeyed, clay brought from the shrine of all Muslims was mixed with the local clay, and water from Mecca was added to the well. This helped and the mausoleum stands to this day.',
				history_ru:
					'Мавзолей Астана-баба, находится в нескольких километрах к западу от города Керки. Он объявлен историческим и культурным достоянием республики. Происхождение названия памятника точно неизвестно, как неизвестно и то, кем был Астана-баба. Возможно, оно происходит от арабских слов «астана» - «порог» и «баба» - «отец, святой человек». В Туркменистане используется и другое название – мавзолей Зейда Али и Зубейды Али. Памятник принято относить примерно к XI-XII векам.Внутри мавзолея находятся пять гробниц, появившихся в разные годы. Одни из них связана с историей дочери правителя БалхаЗейда Али – Зубейды. Она скончалась вскоре после свадьбы и отец решил увековечить ее память, построив мавзолей. Однако три попытки строительства не увенчались успехом, здание рушилось. Однажды к отцу во сне явился старец, который посоветовал строить мавзолей с использованием воды и глины из Мекки. Он послушался, к местной глине примешали глину, привезенную из святыни всех мусульман, а в колодец подлили воды из Мекки. Это помогло и мавзолей стоит по сей день.',
			},
			{
				id: uuidv4(),
				name: '«Kyrgyz» - a place of fulfillment of desires',
				name_ru: '«Кыркгыз» — место исполнения желаний',
				img: Kyrkgyz,
				history:
					'One of the unique natural monuments of Koytendag is the famous Kyrkgyz grotto (Forty Girls). It is located on the way to the village of Khojapil. There are always a lot of pilgrims and tourists here. Tens of thousands of long ribbons decorate this sacred place. According to the stories of the elders, everyone who visits this place can make a wish. To do this, you need to dip the scrap in clay and throw it to the stone vault. If the tape “sticks” to the arch of the mountain, your cherished wish will certainly come true.According to a legend from the distant past, there was once a village in a fertile river valley, and hardworking farmers did not know troubles and sorrows. But times of adversity came, the enemy invaded these lands. It was not possible to save the village. But no one was able to enslave the spirit of the villagers. The girls who lived in this village were taken by the farmers along mountain paths to the gorge. But their enemies found out their secret and rushed in search of the young beauties. Hiding from enemies, every night the girls asked Heaven for help. Heaven heard their request and, like ghostly smoke, the girls disappeared into the air and the strangers did not find anyone.Only slightly noticeable outlines of mountain rocks, somewhat reminiscent of the silhouettes of young beauties, and even stone bowls appeared on the mountain slabs, and the springs were filled with crystal clear water. These were the tears of beauties dissolved in smoke.',
				history_ru:
					'Один из уникальных природных памятников Койтендага – знаменитый грот «Кыркгыз» («Сорок девушек»). Он расположен по пути к посёлку Ходжапиль. Здесь всегда много паломников и туристов. Десятки тысяч длинных лент украшают это священное место. По рассказам старцев, каждый, кто побывает в этом месте, может загадать желание. Для этого нужно обмакнуть лоскуток в глину и подкинуть к каменному своду. Если лента «приклеится» к своду горы, заветное желание непременно исполнится. По легенде из далёкого прошлого, когда-то в плодородной речной долине было селение, и трудолюбивые землепашцы не знали бед и печалей. Но пришли времена невзгод, враг вторгся в эти края. Спасти селение не удалось. Но и поработить дух сельчан никто не смог. Девушек, живших в этом селении, землепашцы отвели по горным тропам в ущелье. Но враги узнали их тайну и бросились на поиски юных красавиц. Скрываясь от врагов, каждую ночь девушки просили помощи у Неба. Небеса услышали их просьбу и, словно призрачный дым, девушки растворились в воздухе и чужеземцы никого не нашли. Лишь слегка заметные очертания горных скал, в чём-то напоминавшие силуэты юных красавиц, да ещё каменные чаши проступили на горных плитах, а родники наполнились кристально чистой водой. Это были слёзы растворившихся в дыме красавиц.',
			},
			{
				id: uuidv4(),
				name: 'Umbar-dere waterfall in Koytendag',
				name_ru: 'Водопад Умбар-дере в Койтендаге',
				img: UmbarWaterfall,
				history:
					'Umbar waterfall is 27 meters high, one of the highest in Turkmenistan. The booming roar of falling water spreads far across the gorge. The crystal mantle of the mountain waterfall is unlike any other water cascade in the country. Despite the difficulties of the journey, people who want to see this landmark of extraordinary beauty come here. The name of the gorge and the waterfall is due to a young man named Umbar, whom the steep walls sheltered from pursuing enemies. As the legend says, the young man was a skilled warrior and showed special courage, but in one of the battles he lost all his comrades.Trying to hide from his pursuers, Umbar went to the edge of a deep gorge and began to ask for protection from his native mountains. Koytendag, appreciating the young man’s courage, brought the opposite edge of the abyss closer to him. Umbar jumped over the seething stream at a height of tens of meters above the ground. The enemies did not dare to repeat his act, and the gorge remained a narrow canyon cutting through the rock.',
				history_ru:
					'Водопад Умбар высотой в 27 метров, один из самых высоких в Туркменистане. Раскатистый гул падающей воды разносится далеко по ущелью. Хрустальная мантия горного водопада не похожа ни на один другой водный каскад страны. Несмотря на трудности пути, сюда съезжаются желающие увидеть достопримечательность необычайной красоты. Названием ущелье и водопад обязаны юноше по имени Умбар, которого отвесные стены укрыли от преследовавших врагов. Как гласит легенда, юноша был искусным воином и проявлял особое мужество, но в одной из схваток потерял всех товарищей. Пытаясь скрыться от преследователей, Умбар вышел на край глубокого ущелья и стал просить защиты у родных гор. Койтендаг, оценив смелость юноши, приблизил к нему противоположный край пропасти. Умбар, перепрыгнул бурлящий поток на высоте десятков метров над землёй. Повторить его поступок враги не осмелились, а ущелье так и осталось узким каньоном, рассекающим скалу.',
			},
			{
				id: uuidv4(),
				name_ru: 'Пещера Кап-Кутан',
				name: 'Cap Coutant Cave',
				img: KapKutan,
				history:
					'The Cap-Kutan cave is located in the southeast of Turkmenistan, on the slope of the Kugitangtau ridge (the southwestern spur of the Gissar ridge). The ridge stretches from south to north, gradually rising from 1000 to 3000 m; it is a cuesta with gentle western and steep eastern slopes, composed of Upper Jurassic limestones of the Kugitang formation up to 500 m thick. Stratigraphically above the limestones lie gypsum and anhydrites of the Gaurdak formation, which are preserved fragmentarily in the form of remains only at the foot of the southern part of the ridge.',
				history_ru:
					'Пещера Кап-Кутан располагается на юго-востоке Туркменистана, на склоне хребта Кугитангтау (юго-западный отрог Гиссарского хребта). Хребет вытянут с юга на север, постепенно повышаясь с 1000 до 3000 м; он представляет собой куэсту с пологим западным и крутым восточным склонами, сложенную верхнеюрскими известняками кугитангской свиты мощностью до 500 м. Стратиграфически выше известняков залегают гипсы и ангидриты гаурдакской свиты, которые сохранились фрагментарно в виде останков только у подножья южной части хребта.',
			},
			{
				id: uuidv4(),
				name: 'Dinosaur Plateau',
				name_ru: 'Плато Динозавров',
				img: DinosaurPlateau,
				history:
					"High in the mountains of Koitendagara there is a plateau of Dinosaurs, on which you can find many huge, chilling, forever-frozen imprints of these huge animals. The confidence that this is not folk fiction and not just another fairy tale is provided by the conclusions of paleontologists who found the remains of these creatures during excavations in the last century on Turkmen soil. Many people doubt the fact that after hundreds of millions of years, the traces of ancient lizards have not disappeared, but continue to clearly appear on the ground, surprising with their size and depth. Scientists' explanations are based on the fact that previously the plateau was the bottom of a reservoir and served as a watering hole for animals. That is why such deep imprints have been preserved. Currently, the mountain plateau has become a place of pilgrimage for tourists from around the world.",
				history_ru:
					'Высоко в горахКойтендагарасположено плато Динозавров, на котором можно найти множество огромных, леденящих душу, застывших навечно отпечатков этих огромных животных.Уверенность в том, что это не народный вымысел и не очередная сказка, дают заключения палеонтологов, нашедших при раскопках в прошлом веке останки этих существ на туркменской земле.У многих вызывает сомнение тот факт, что по истечении сотен миллионов лет следы древних ящеров не пропали, а продолжают четко вырисовываться на земле, удивляя своими размерами и глубиной.Объяснения ученых базируются на том, что ранее плато представляло собой дно водоема, и служило водопоем для животных. Поэтому и сохранились такие глубокие отпечатки.В настоящее время горное плато стало местом паломничества туристов из разных стран мира.',
			},
			{
				id: uuidv4(),
				name: 'Озеро Кайнар баба',
				name_ru: 'Lake Kainar Baba',
				img: KaynarBaba,
				history:
					'Lake Kainar Baba is a famous place in the foothills of the Kugitangtau Range, located in the southeast of Turkmenistan in the village of Garlyk. There is a hydrogen sulfide spring here, as well as a small lake. Lake Kainar Baba is a real place of pilgrimage.There are holy mausoleums nearby, and travelers first worship the saints, and ablutions take place in the lake. It is highly mineralized, and has long been popularly called a “boiling spring.”The lake is only twenty-five meters in diameter, the water in it is so clear, it seems as if the bottom of the lake is strewn with pearls. Lake Kainar Baba is a means of unsolved mysteries and real miracles, which have gained it obvious popularity. The water temperature in the spring feeding the lake remains constant at 22 C. Not far from the source there is the cult burial of the elder Kaynar Baba. Human rumor carefully preserves the memory of his good deeds. They say that Kainar Baba perfectly mastered the art of healing ailments, and everyone regained their health and joy of life.',
				history_ru:
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
				name: 'Najm al-Din Kubra Mausoleum',
				name_ru: 'Мавзолей Наджм ад-дин аль-Кубра',
				img: najmAlDinKubraMausoleum,
				history:
					'A unique architectural structure, built around the 12th-13th centuries, is the main monument of the “360” memorial complex; it is also popularly called “Sih-Kabirmazary”, which literally means “Tomb of the Great Sheikh”. This is a tombstone, installed, according to legend, over the grave of the great sheikh of Sufism Najemeddin Kubra (1145-1221), who founded the khanaka and the Sufi brotherhood “Kubrawiyya” in Gurganj. Nadzhimetdinwas called “Kubra”, i.e. the greatest of the great, close to God, a friend of the Almighty, which is why Muslims consider this building sacred. Therefore, this place still attracts a lot of religious pilgrims.The mausoleum has survived to us, reaching almost intact. Historical evidence speaks of the glorious fall of the Sufi sheikh Nadzhimetdin Kubra. It says that Khorezmshah Muhammad II, based on a false denunciation, gave the order to execute one of Kubra’s best students, after which Saint Kubra became very angry and sent a terrible curse on Khorezm. The curse soon came true - the once powerful and invincible state fell in a matter of months as a result of the Mongol invasion.Kubra himself and his 360 disciples came out to defend the city from the invaders, who died in a nervous battle. This battle was Najimetdin’s last feat for the glory of Islam: the Mongol warrior cut off the head of the great saint with a sword. On the site of the patriotic feat, the martyr’s cemetery was founded, where the mausoleum of Nadzhimetdin Kubra now stands.',
				history_ru:
					'Уникальное архитектурное сооружение, построенное примерно в 12-13 веках, является главным памятником мемориального комплекса «360», также в народе имеет название «Sih-Kabirmazary», что дословно означает «Могила великого шейха». Это надгробие, установленное, по преданию, над могилой великого шейха суфизма НаджемеддинаКубра (1145-1221), основавшего в Гургандже ханаку и суфийское братство «кубравийа». Наджиметдина называли «Кубра», т.е. великий из великих, близкий к Богу, друг Всевышнего, поэтому мусульмане считают это здание священным. Поэтому до сих пор это место привлекает массу религиозных паломников. Мавзолей сохранился и до нас, дошёл почти в целости.Исторические свидетельства говорят о славном падении суфийского шейха НаджиметдинаКубры. В ней говорится, что Хорезмшах Мухаммед II по ложному доносу отдал приказ казнить одного из лучших учеников Кубры, после чего святой Кубра сильно разгневался и наслал страшное проклятие на Хорезм. Проклятие вскоре сбылось – когда-то мощное и непобедимое государство за считанные месяцы пало в результате нашествия монголов. Сам Кубра и его 360 учеников вышли защищать город от захватчиков, которые погибли в нервном бою. Этот бой был последним подвигом Наджиметдина во славу ислама: монгольский воин снес мечом голову великому святому. На месте патриотического подвига и было основано кладбище мученика, где ныне высится мавзолей НаджиметдинаКубры.',
			},
			{
				id: uuidv4(),
				name: 'Turabek Khanum Mausoleum',
				name_ru: 'Мавзолей Тюрабек-ханим',
				img: turabekKhanumMausoleum,
				history:
					'Mausoleum of Tyurabek-Khanym (also: Mausoleum of Torebeg-Khanym) is a medieval mausoleum located on the territory of the Kone-Urgench National Historical and Cultural Museum-Reserve in the city of Kone-Urgench, Turkmenistan. The mausoleum was built in honor of TyurabekKhanum, who was the daughter of the Golden Horde khan Uzbek Khan and the wife of his Khorezm governor from the Kungrat family Kutlug-Timur, which later became the tomb of the Sufi-Kungrat dynasty (1359-1388).',
				history_ru:
					'Мавзолей Тюрабек-ханым (также: Мавзолей Торебег-Ханым) — средневековый мавзолей, расположенный на территории Кёнеургенчского национального историко-культурного музея-заповедника в г. Кёнеургенч, Туркменистан. Мавзолей построен в честь Тюрабек-ханым, которая была дочерью золотоордыского хана Узбек-хана и женой его хорезмийского наместника из рода кунгратКутлуг-Тимура, позже ставший усыпальницей династии Суфи - кунгратов (1359—1388).',
			},
			{
				id: uuidv4(),
				name: 'Il-Arslan Mausoleum',
				name_ru: 'Мавзолей Иль-Арслан',
				img: ilArslanMausolem,
				history:
					'Tajad-DinIl-Arslan (fullname - Tajad-Duniyawa-d-DinAbu-l-FathIlArslanibnAtsyz; d. March 7, 1172) - Khorezmshah, sonofKhorezmshahAlaad-DinAtsyzfromtheAnushtegeniddynasty. Reignedfrom 1156 to 1172. ThenicknameIlArslan, translatedfromTurkic, meanslionofthepeople. In 1152, Il-ArslanbecametherulerofthecityofJenda, conqueredbyhisfatherinthelowerreachesoftheSyrDarya. In 1156, afterthedeathofShahAtsiz, Il-ArslanascendedthethroneofKhorezm. Like his father, he did not pay tribute to the Seljuk Sultan Sanjar and the Karakitays.Just a few months after Il-Arslan came to power, in 1157, Sanjar died, which allowed Khorezm to be completely freed from Seljuk influence. Inthe 1160s, Il-ArslanannexedDehistanandthesurroundingareatothepossessionsofKhorezm. HemanagedtosubjugateseveralcitiesofKhorasan, hetriedtosubjugatepartofthecitiesoftheIraqiSultanate, Transoxiana. In 1172, hesuccessfullyrepelledtheKarakitaicampaignagainstKhorezm. Soonafterthis, Il-Arslandied, andhissonsAlaad-DinTekeshandJalalad-DinSultanShahbegantofightforthethrone.',
				history_ru:
					'Тадж ад-Дин Иль-Арслан (полное имя — Тадж ад-Дунийава-д-Дин Абу-л-Фатх Иль Арслан ибн Атсыз; ум. 7 марта 1172) - хорезмшах, сын хорезмшаха Ала ад-Дина Атсыза из династии Ануштегенидов. Правил с 1156 по 1172 годы. Прозвище Иль Арслан, в переводе с тюркского означает - лев народа.В 1152 году Иль-Арслан стал правителем города Дженда, завоёванного его отцом в низовьях Сырдарьи. В 1156 году, после смерти шаха Атсыза, Иль-Арслан вступил на престол Хорезма. Как и отец, он не платил дань сельджукскому султану Санджару и каракитаям. Всего через несколько месяцев после прихода Иль-Арслана к власти, в 1157 году, Санджар умер, что позволило Хорезму полностью освободиться от сельджукского влияния.В 1160-х годах Иль-Арслан присоединил к владениям Хорезма Дехистан с окрестностями. Ему удалось подчинить несколько городов Хорасана, он пытался подчинить себе часть городов Иракского султаната, Мавераннахра. В 1172 году он успешно отразил поход каракитаев на Хорезм. Вскоре после этого Иль-Арслан умер, а его сыновья Ала ад-Дин Текеш и Джелал ад-Дин Султан-шах начали борьбу за престол.',
			},
			{
				id: uuidv4(),
				name: 'Minaret of Kutlug-Timur',
				name_ru: 'Минарет Кутлуг-Тимура',
				img: KutlugTimurMinaret,
				history:
					'Reaching a height of 60 meters, the minaret of Kutlug-Timuris considered the tallest in all of Central Asia. It was built in 1011 under the governor of the khans of the Golden Horde.The minaret is a conical column. The slender, thinning round trunk is dissected by eighteen belts (stripes) painted with ornaments and three belts of inscriptions in “Kufi”. At the top of the minaret, nests from wooden beams have been preserved, on which a lantern facing in all directions, topped with a decorative cornice, was once installed.From here the muezzin called the faithful to prayer. The top of the minaret is reached by 145 steps of an internal spiral staircase, which begins at a height of about 7 meters from ground level, which probably corresponded to the level of the flat roof of the mosque. Scientists are still arguing about the age of the minaret. Some believe that the foundation and construction of the minaret were carried out during the reign of Kutlug-Timur, by order of the ruler himself. Others that began to build it under Shah Mamus (11th century). There is also information that it was built during the time of Sultan Mahmud of Ghazni (998-1030).It has only been established that it was he who survived the destruction of the city by the Mongols in 1221, but the dome of the minaret, which represents a valuable example of architecture, was badly damaged and was subsequently restored. The Kutlug-Timur minaret lacks the rich decor of Central Asian minarets of the 11th-12th centuries, but surpasses them in the boldness of its designs : height and slender proportions.',
				history_ru:
					'Достигающий в высоту 60 метров минарет Кутлуг-Тимура считается самым высоким во всей Средней Азии. Он построен в 1011 году при наместнике ханов Золотой Орды. Минарет представляет собой коническую колонну. Стройный, утончающийся кверху круглый ствол расчленен восемнадцатью поясами (полосами) расписанными орнаментом и тремя поясами надписей на "куфи". На вершине минарета сохранились гнезда от деревянных балок, на которых когда-то был установлен обращенный во все стороны фонарь, увенчанный декоративным карнизом. Отсюда муэдзин призывал правоверных на молитву.На вершину минарета ведут 145 ступеней внутренней винтовой лестницы, которая начинается на высоте около 7 метров от уровня земли, что, вероятно, соответствовало уровню плоской крыши мечети.О возрасте минарета до сих пор спорят ученые. Одни полагают, что закладка и строительство минарета были произведены в правление Кутлуг-Тимура, по приказу самого правителя. Другие, что начали его строить еще при шахе Мамусе (11 век). Также имеются сведения, что он построен во времена султана Махмуда Газневи (998-1030 годы). Установлено лишь, что именно он уцелел после разрушения города монголами в 1221 году, но купол минарета, представляющий ценный образец архитектуры, сильно пострадал и был впоследствии отреставрирован.МинаретКутлуг-Тимура лишен богатого декора среднеазиатских минаретов 11-12 веков, но превосходит их смелостью конструкций: высотой и стройностью пропорций',
			},
			{
				id: uuidv4(),
				name: 'Soltan Tekesh Mausoleum',
				name_ru: 'Мавзолей СолтанТекеш',
				img: SoltanTekeshMausoleum,
				history:
					'One of the few surviving monuments of pre-Mongol Urgench - the mausoleum of KhorezmshahTekesh (Sultan-Tekesh) - was built in 1220 according to the type of tombs that was then very common in Khorezm. This is the mausoleum of the ruler of Gurganj - Tekesh, who died in 1200. KhorezmshahTekesh was a very odious person, he managed to unite a huge territory, stretching from the Aral Sea in the north to the Persian Gulf in the south and from the Pamirs in the east to the Iranian Plateau in the west. In 1172, in order to take the throne, he turned to his former enemies - the Karakitai - for help, who agreed in exchange for an annual tribute help him overthrow his brother from the throne, and then, having already received power over Khorezm, he ordered the death of his mother.The mausoleum of KhorezmshahTekesh once towered over the city to a height of 30 meters and was a kind of beacon in the desert. Weary travelers wandering through the hot desert saw him from afar and thus received a signal to end the difficult journey.',
				history_ru:
					'Один из немногих уцелевших памятников домонгольского Ургенча - мавзолей Хорезмшаха Текеша (Султан-Текеш) - построен в 1220 году по очень распространенному тогда в Хорезме типу гробниц. Это мавзолей правителя Гурганджа - Текеша, который умер 1200 году. Хорезмшах Текеш был весьма одиозной личностью, сумел объединить огромную территорию, простиравшуюся от Аральского моря на севере до Персидского залива на юге и от Памира на востоке до Иранского нагорья на западе.В 1172 году, для того чтобы занять трон, он обратился за помощью к своим бывшим врагам - каракитаям, которые согласились в обмен на ежегодную дань помочь ему свергнуть с престола родного брата, а затем, уже получив власть над Хорезмом, он же приказал умертвить свою мать. Мавзолей Хорезмшаха Текеша когда-то возвышался над городом на высоту 30 метров и был своеобразным маяком в пустыне. Утомленные путники, бредущие по раскаленной пустыне, видели его издалека и, таким образом, получали сигнал к окончанию тяжелого путешествия.',
			},
			{
				id: uuidv4(),
				name: 'Oasis Damla',
				name_ru: 'Оазис Дамла',
				img: OasisDampla,
				history:
					"Damla Oasis is one of the most remote oases of the Yomud and Teke tribes in the heart of the Karakum Desert. Away from the main road, this breathtaking place is characterized by flat-roofed villages and yurts that can be found in almost every home. You can witness the simple and beautiful traditions of nomads, transporting a rare visitor to the past. To get to a small settlement, you need to cross to the Northern Karakum Desert and cross the Uzboy - the former bed of the Amu Darya River. The challenging route through dunes and salt marshes tests even the most experienced driver, who makes a refreshing stop at the oasis of Bekouri halfway. This venture gives the Silk Road explorer an authentic experience of what travel and life in the desert have always meant to its nomadic inhabitants. Damla is approximately 4 hours' drive from the main Ashgabat-Dashoguz highway and can be visited on a two-day trek from Ashgabat with an overnight stay in tents or with nomadic families.",
				history_ru:
					'Оазис Дамла — один из самых дальних оазисов племен ёмуд и теке в самом сердце пустыни Каракумы. Вдали от главной дороги это захватывающее дух место характеризуют деревни с плоскими крышами и юрты, которые можно найти почти в каждом доме. Вы можете стать свидетелем простых и красивых традиций кочевников, переносящих редкого гостя в прошлое. Чтобы добраться до небольшого поселения, нужно переправиться в Северные Каракумы и пересечь Узбой - бывшее русло реки Амударьи. Сложная трасса через дюны и солончаки является испытанием даже для самого опытного водителя, который делает освежающую остановку в оазисе Бекури на полпути. Это предприятие дает исследователю Шелкового пути подлинное впечатление о том, что путешествие и жизнь в пустыне всегда значили для ее кочевых обитателей.Дамла находится примерно в 4 часах езды от главного шоссе Ашхабад-Дашогуз, и ее можно посетить во время двухдневного похода из Ашхабада, ночуя в палатках или с семьями кочевников.',
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
				name_ru: 'Каньон Янгыкала',
				img: YangykalaCanyon,
				history:
					'Yangi-Kala Canyon is one of the most picturesque places in Turkmenistan. Translated from the Turkmen language, its name means “Fire Fortresses”. The unique attraction is located 165 km north of Balkanabat and 160 km east of Turkmenbashi and is popular with both local residents and tourists. According to scientists, the bottom of the canyon was once flooded by Kara-Bogaz-Gol in ancient times. The color of the rocks in the canyon is predominantly red, which is why locals call it “Gyzyldag” (Red Mountains). The canyon cliffs reach a height of 60 m to 100 m.',
				history_ru:
					'Каньон Янги-Кала – одно из самых живописных мест Туркменистана. В переводе с туркменского языка его название означает «Огненные крепости». Уникальная достопримечательность расположена в 165 км к северу от Балканабада и в 160 км к востоку от Туркменбаши и пользуется популярностью, как у местных жителей, так и туристов.По мнению ученых, дно каньона в глубокой древности когда-то заливал Кара-Богаз-Гол. В цвете пород каньона преобладает красный, поэтому местные жители именует его «Гызылдаг» (Красные горы). Скалы каньона достигают высоты от 60 м до 100 м. ',
			},
			{
				id: uuidv4(),
				name: 'Dehistan',
				name_ru: 'Дехистан',
				img: Dehistan,
				history:
					'Dehistan - on the flat, waterless clay plain of the Balkan velayat, rise the mysterious and mystical ruins of the ancient city of Dehistan. It was a prosperous medieval city on the caravan route between Khorezm and Persian Giokani. This city arose at the turn of the 8th-9th centuries. The area of ​​the city was about 200 hectares, and it was protected by a double ring of walls.Nowadays, the famous Shir-Kabir mausoleum, two minarets 25 meters high, the portal of the cathedral mosque, and the remains of the mud-clay city walls remind us of the city’s former greatness. There is an archaeological reserve on the territory of Dehistan. There are unique monuments of ancient architecture, including the Mashad necropolis and the Mashad-ata mosque, which has crossed the 1000-year mark.',
				history_ru:
					'Дехистан – на плоской, безводной глинистой равнине Балканского велаята, высятся загадочные и мистические руины древнего города Дехистана. Это был процветающий средневековый город на караванном пути между Хорезмом и персидской Гиоканией. Возник этот город на рубеже VIII-IX веков. Площадь города составляла около 200 гектар, а защиту ему обеспечивало двойное кольцо стен. В наши дни о былом величии города напоминают сохранившиеся знаменитый мавзолей Шир-Кабир, два минарета высотой по 25 метров, портал соборной мечети, остатки сырцовых глиняных городских стен. На территории Дехистана работает археологический заповедник. Там представлены уникальные памятники древней архитектуры, среди которых некрополь Машад и мечеть Машад-ата, перешагнувшая 1000-летний рубеж.',
			},
			{
				id: uuidv4(),
				name: 'Karakum desert',
				name_ru: 'Каракумы – пустыня Туркмении',
				img: Karakum,
				history:
					'The Karakum desert is a sandy desert, one of the largest in Central Asia, one of the largest on earth. It occupies almost 3/4 of the territory of the Republic of Turkmenistan. It is located between the foothills of Kopetdag, Karabil and Vankhyz in the south, the Khorezm lowland in the north, the Amu Darya valley in the east and the bed of the Western Uzboy in the west. The length of the Karakum along the parallel is about 800 km, along the meridian - about 450 km, the total area is more than 350 thousand. sq. km. It exceeds the territory of states such as Great Britain, Italy or Norway',
				history_ru:
					'Каракумы – это песчаная пустыня, одна из самых больших в Центральной Азии, одна из крупных на земле. Она занимает почти 3/4 территории Республики Туркмения. Расположена между предгорьями Копетдага, Карабиля и Ванхыза на юге, Хорезмской низменностью на севере, долиной Амударьи на востоке и руслом Западного Узбоя на западе.Протяженность Каракумов по параллели – около 800 км, по меридиану – около 450 км, общая площадь – более 350 тыс. кв. км. Она превышает территорию таких государств, как Великобритания, Италия или Норвегия.',
			},
			{
				id: uuidv4(),
				name: 'Parau-bibi',
				name_ru: 'Парау-биби',
				img: ParauBibi,
				history:
					'The small white mosque of Parau-bibi is one of the most revered pilgrimage sites in Turkmenistan. She stands alone on one of the rocks of the Kopetdag. According to legend, Parau-bibi was a beautiful Turkmen woman who lived in one of the villages. Somehow they promised to hand it over to the advancing enemies. To escape, she ran into the mountains and prayed. Then the rock moved apart and hid Parau-Bibi forever. A mosque arose on this site.Parau-bibi was the patroness of pregnant women and children in Turkmen mythology. Before giving birth, women performed a special ceremony in her honor. Today, women from all over Turkmenistan come to her temple and pray to her for help: they ask for beauty, a good husband and many children. A crooked staircase leads to the mosque. Halfway along you can see the imprints in the rock that Parau-bibi left: from the knee, elbow, finger and forehead. Young pilgrims kiss them and pray.',
				history_ru:
					'Маленькая белая мечеть Парау-биби - одно из самых почитаемых паломнических мест Туркменистана. Она одиноко стоит на одной из скал Копетдага.По легенде, Парау-биби была красивой туркменкой, жившая в одной из деревень. Как-то ее пообещали отдать на откуп наступающим врагам. Спасаясь, она убежала в горы и молилась. Тогда скала раздвинулась и спрятала Парау-Биби навсегда. На этом месте и возникла мечеть. Парау-биби являлась покровительницей беременных женщин и детей в туркменской мифологии. Перед родами женщины исполняли в честь нее специальный обряд. Со всей Туркмении сегодня к ее храму съезжаются женщины и молят ее о помощи: просят красоты, хорошего мужа и много детей. К мечети ведет кривая лесенка. На полпути можно увидеть отпечатки в скале, которые оставила Парау-биби: от колена, локтя, пальца и лба. Молодые паломницы прикладываются к ним и молятся.',
			},
			{
				id: uuidv4(),
				name: 'Mausoleum of Gozli-ata',
				name_ru: 'Мавзолей Гозли-ата',
				img: GozliAta,
				history:
					'Gozli-ata Mausoleum is located in the Balkan region in western Turkmenistan. Located 157 kilometers from Turkmenbashi. The Mausoleum of Gozli Ata is the most remote place of pilgrimage in Turkmenistan. The mausoleum is located in a picturesque place, surrounded by pink, greenish, reddish mountains of amazing shape and beauty. On these lands, Turkmen warriors courageously defended themselves against the troops of the Khiva Khan, gradually increasing their strengthyour independence. A visit to the holy place - the Gozli-Ata cemetery and the grave of the classical ancestor Turkmen-ata - a good friend. At the mausoleum and the grave of the saint, external rites are held, legends are pronounced about the great commander, after whom this place is named. Gozli-ata, or Uzynkhasan - a mystical personality and spiritual leader of the Balkan Turkmen tribes during the Middle Ages.',
				history_ru:
					'Гозли-ата Мавзолей находится в Балканском велаяте на западе Туркменистана. Расположен в 157 километрах от Туркменбаши. Мавзолей ГозлиАта – самое отдаленное место паломничества в Туркменистане.Мавзолей находится в живописном месте, окруженным розовыми, зеленоватыми, красноватыми горами удивительной формы и красоты. На этих землях мужественно оборонялись туркменские воины от войск Хивинской ханы, постепенно увеличивая. свою независимость.Посещение святого места- кладбища Гозли-Ата и могилы классического родоначальника Туркмен-ата - хороший знакомый. У мавзолея и могилы святого проходят внешние обряды, произносятся легенды о великом полководце, именем которого названо это место. Гозли-ата, или Узынхасан — мистическая личность и духовный лидер прибалканских туркменских племен в период средневековья',
			},
		],
	},
]

export type CITY = 'Ashgabat' | 'Ahal' | 'Mary' | 'Lebap' | 'Dashohuz' | 'Balkan'

type Places = {
	id: string
	cityName: CITY
	cityImg: string
	cityHistory: string
	places: {
		id: string
		name: string
		name_ru: string
		img: string
		history: string
		history_ru: string
	}[]
}
