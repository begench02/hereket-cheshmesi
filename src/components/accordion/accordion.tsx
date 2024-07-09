import { FC } from 'react'
import clsx from 'clsx'
import styles from './accordion.module.sass'

export const Accordion: FC<AccordionProps> = (props) => {
	const { title, elements, variant = 'success' } = props

	return (
		<ul className={styles.accordion}>
			<li>
				<input type='checkbox' name='accordion' id={title} className={styles.accordion__input} />
				<label htmlFor={title} className={styles.accordion__label}>
					<button
						className={clsx(
							styles.accordion__toggle,
							variant === 'error' && styles['accordion__toggle--error'],
						)}
					>
						<span></span>
						<span></span>
					</button>
					{title}
				</label>
				<div className={styles.accordion__content}>
					{elements.map((element) => (
						<p>- {element}</p>
					))}
				</div>
			</li>
		</ul>
	)
}

type AccordionProps = {
	title: string
	elements: string[]
	variant?: 'success' | 'error'
}
