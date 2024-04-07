import { ParallaxLayer } from '@react-spring/parallax'
import clouds from 'imgs/clouds.png'
import mountain from 'imgs/mountain.jpg'
import styles from './introduction.module.sass'

export const Introduction = () => {
	return (
		<div className={styles.main}>
			<ParallaxLayer offset={0}>
				<img src={mountain} style={{ width: '100%' }} />
			</ParallaxLayer>
			<ParallaxLayer
				offset={-0.5}
				speed={-0.3}
				style={{ display: 'flex', alignItems: 'start', justifyContent: 'end', pointerEvents: 'none' }}
			>
				<img src={clouds} />
			</ParallaxLayer>
			<h1 className={styles.main_text}>Täze dünýäni aç</h1>
		</div>
	)
}
