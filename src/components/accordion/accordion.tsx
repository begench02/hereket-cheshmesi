import { FC } from 'react'
import clsx from 'clsx'
import styles from './accordion.module.sass'

export const Accordion: FC<AccordionProps> = (props) => {
	const {
		options: { title, elements },
		variant = 'success',
	} = props

	return (
		<ul className={styles.accordion}>
			<li>
				<input type='checkbox' name='accordion' id={title} />
				<label htmlFor={title}>
					<button
						className={clsx(
							styles.accordion_button,
							variant === 'error' && styles['accordion_button--error'],
						)}
					>
						<span></span>
						<span></span>
					</button>
					{title}
				</label>
				<div className={styles.accordion_content}>
					{elements.map((element) => (
						<p>- {element}</p>
					))}
				</div>
			</li>
		</ul>
	)
}

type AccordionProps = {
	options: {
		title: string
		elements: string[]
	}
	variant?: 'success' | 'error'
}
