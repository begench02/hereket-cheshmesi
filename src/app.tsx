import './app.sass'
import { Header } from 'components/Header/header'
import { Introduction } from 'pages/introduction/introduction'
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef } from 'react'

export const App = () => {
	const parallax = useRef<IParallax>(null!)

	return (
		<div>
			<Parallax ref={parallax} pages={3}>
				<ParallaxLayer sticky={{ start: 0, end: 3 }} style={{ zIndex: 1 }}>
					<Header />
				</ParallaxLayer>
				<Introduction />
			</Parallax>
		</div>
	)
}
