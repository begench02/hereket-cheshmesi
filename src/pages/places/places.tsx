import { clsx } from 'clsx'
import Dehistan from 'assets/imgs/carousel/dehistan.jpg'
import DinosaurPlateau from 'assets/imgs/carousel/dinosaur-plateau.jpg'
import Ekedeshik from 'assets/imgs/carousel/ekedeshik.jpg'
import GonurDepe from 'assets/imgs/carousel/gonur-depe.jpg'
import styles from './places.module.sass'

export const Places = () => {
	return (
		<div className={styles.main}>
			<div className={styles.row}>
				<div className={styles.image_block}>
					<img src={Dehistan} alt='Merv' width={500} height={200} className={styles.image} />
					<p className={styles.legend}>Dehistan</p>
				</div>
				<div className={styles.aaa}>
					<h2 className={styles.title}>Awesome places</h2>
					<p className={styles.subtitle}>
						Traveling is a great opportunity to get know
						<br /> fascinating countries and friendly people
					</p>
					<div className={styles.buttons}>
						<button className={clsx(styles.btn, styles.btn__light)}>CONTACT US</button>
						<button className={clsx(styles.btn, styles.btn__gray)}>GALLERY</button>
					</div>
				</div>
			</div>
			<div className={styles.gallery}>
				<div className={styles.gallery_image}>
					<img src={DinosaurPlateau} alt='Dinosaur Plateau' className={styles.image} />
					<p className={styles.legend}>Dinosaur Plateau</p>
				</div>
				<div className={styles.gallery_image}>
					<img src={Ekedeshik} alt='Ekedeshik' className={styles.image} />
					<p className={styles.legend}>Ekedeshik</p>
				</div>
				<div className={styles.gallery_image}>
					<img src={GonurDepe} alt='Gonur Depe' className={styles.image} />
					<p className={styles.legend}>Gonur Depe</p>
				</div>
			</div>
		</div>
	)
}
