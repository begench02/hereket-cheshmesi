import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import { tours } from 'pages/tours/tours.data'
import { useTranslation } from 'react-i18next'
import ArrowLeft from 'assets/imgs/icons/arrow-left.svg'
import ArrowRight from 'assets/imgs/icons/arrow-right.svg'
import clsx from 'clsx'
import styles from './carousel.module.sass'
import { Link } from 'react-router-dom'

const DRAG_BUFFER = 50
export const Carousel: FC<CarouselProps> = (props) => {
	const { imageIndex, setImageIndex, autoPlay = false, perspective = 1, legend } = props
	const [dragging, setDragging] = useState(false)

	const dragX = useMotionValue(0)

	useEffect(() => {
		if (!autoPlay) return

		const interval = setInterval(() => {
			if (imageIndex < tours.length - 1) {
				setImageIndex((prev) => prev + 1)
			} else {
				setImageIndex(0)
			}
		}, 4000)

		return () => clearInterval(interval)
	}, [dragging, imageIndex])

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
				animate={{ translateX: `-${imageIndex * (100 / perspective)}%` }}
				onDragStart={onDragStart}
				onDragEnd={onDragEnd}
				className={styles.content}
				transition={{ type: 'Tween' }}
			>
				<Images imageIndex={imageIndex} perspective={perspective} />
			</motion.div>
			<Dots imageIndex={imageIndex} setImageIndex={setImageIndex} />
			<NavigationArrows imageIndex={imageIndex} setImageIndex={setImageIndex} />
		</div>
	)
}

type CarouselProps = {
	imageIndex: number
	setImageIndex: Dispatch<SetStateAction<number>>
	autoPlay?: boolean
	perspective?: number
	legend?: boolean
}

const Images: FC<ImageProps> = (props) => {
	const { imageIndex, perspective } = props
	const { i18n } = useTranslation()

	return (
		<>
			{tours.map(({ title, title_ru, image, id }, index) => (
				<motion.div
					key={id}
					transition={{ duration: { type: 'spring', mass: 3, stiffness: 400, damping: 50 } }}
					style={{
						width: 100 / perspective + '%',
						x: perspective === 1 ? '0' : '50%',
					}}
					className={styles.tour}
				>
					<Link to={`/tours/${id}`}>
						<motion.div
							animate={{ scale: imageIndex === index ? 0.95 : 0.85 }}
							style={{
								backgroundImage: `url(${image})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
							}}
							className={styles.tour__image}
						/>
						<p className={styles.tour__legend}>{i18n.language === 'en' ? title : title_ru}</p>
					</Link>
				</motion.div>
			))}
		</>
	)
}

type ImageProps = {
	imageIndex: number
	perspective: number
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
