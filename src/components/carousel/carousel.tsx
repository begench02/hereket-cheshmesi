import { Dispatch, FC, SetStateAction, useState } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import { tours } from 'pages/tours/tours.data'
import ArrowLeft from 'assets/imgs/icons/arrow-left.svg'
import ArrowRight from 'assets/imgs/icons/arrow-right.svg'
import clsx from 'clsx'
import styles from './carousel.module.sass'

const DRAG_BUFFER = 50
export const Carousel: FC<CarouselProps> = (props) => {
	const { imageIndex, setImageIndex } = props
	const [dragging, setDragging] = useState(false)

	const dragX = useMotionValue(0)

	const onDragStart = () => {
		setDragging(true)
	}

	const onDragEnd = () => {
		setDragging(false)

		const x = dragX.get()
		if (x <= -DRAG_BUFFER && imageIndex < tours.length - 1) {
			setImageIndex((prev) => prev + 1)
		} else if (x >= DRAG_BUFFER && imageIndex > 0) {
			setImageIndex((prev) => prev - 1)
		}
	}

	return (
		<div className={styles.main}>
			<motion.div
				drag='x'
				dragConstraints={{ left: 0, right: 0 }}
				style={{ x: dragX }}
				animate={{ translateX: `-${imageIndex * 800}px` }}
				onDragStart={onDragStart}
				onDragEnd={onDragEnd}
				className={styles.content}
				transition={{ type: 'Tween' }}
			>
				<Images imageIndex={imageIndex} />
			</motion.div>
			<Dots imageIndex={imageIndex} setImageIndex={setImageIndex} />
			<NavigationArrows imageIndex={imageIndex} setImageIndex={setImageIndex} />
		</div>
	)
}

type CarouselProps = {
	imageIndex: number
	setImageIndex: Dispatch<SetStateAction<number>>
}

const Images: FC<ImageProps> = (props) => {
	const { imageIndex } = props

	return (
		<>
			{tours.map(({ image, id }, index) => (
				<motion.div
					key={id}
					animate={{ scale: imageIndex === index ? 0.95 : 0.85 }}
					transition={{ duration: { type: 'spring', mass: 3, stiffness: 400, damping: 50 } }}
					style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
					className={styles.image}
				/>
			))}
		</>
	)
}

type ImageProps = {
	imageIndex: number
}

const dotVariants = {
	up: { y: '-5px' },
	down: { y: 0 },
}
const Dots: FC<DotsProps> = (props) => {
	const { imageIndex, setImageIndex } = props

	return (
		<div className={styles.dots}>
			{tours.map((tour, index) => (
				<motion.button
					key={tour.id}
					animate={index === imageIndex ? 'up' : 'down'}
					variants={dotVariants}
					onClick={() => setImageIndex(index)}
					className={clsx(styles.dots__dot, index === imageIndex && styles['dots__dot--active'])}
				></motion.button>
			))}
		</div>
	)
}

type DotsProps = {
	imageIndex: number
	setImageIndex: Dispatch<SetStateAction<number>>
}

const NavigationArrows: FC<NavigationArrowsProps> = (props) => {
	const { imageIndex, setImageIndex } = props

	return (
		<div className={styles.navigation}>
			<div
				onClick={() => {
					if (imageIndex > 0) {
						setImageIndex((prev) => prev - 1)
					}
				}}
				className={styles.navigation__button}
			>
				<ArrowLeft />
			</div>
			<div
				onClick={() => {
					if (imageIndex < tours.length - 1) {
						setImageIndex((prev) => prev + 1)
					}
				}}
				className={styles.navigation__button}
			>
				<ArrowRight />
			</div>
		</div>
	)
}

type NavigationArrowsProps = {
	imageIndex: number
	setImageIndex: Dispatch<SetStateAction<number>>
}
