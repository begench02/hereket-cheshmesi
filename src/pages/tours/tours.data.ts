import ashgabat1 from 'assets/imgs/ashgabat.jpg'
import ashgabat2 from 'assets/imgs/ashgabat2.jpg'
import ashgabat3 from 'assets/imgs/ashgabat3.jpg'
import Dehistan from 'assets/imgs/balkan/dehistan.jpg'
import { v4 } from 'uuid'

export const tours: Tour[] = [
	{
		id: v4(),
		image: ashgabat1,
		title: 'Lorem ipsum',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aliquid doloribus veritatis quis aperiam beatae?',
	},
	{
		id: v4(),
		image: Dehistan,
		title: 'Dehistan',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aliquid doloribus veritatis quis aperiam beatae?',
	},
	{
		id: v4(),
		image: ashgabat3,
		title: 'Lorem ipsum',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aliquid doloribus veritatis quis aperiam beatae?',
	},
]

type Tour = {
	id: string
	image: string
	title: string
	description: string
}
